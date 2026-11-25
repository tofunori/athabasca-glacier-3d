import "./style.css";
import * as THREE from "three";
import { GlacierScene } from "./glacierScene.js";

const loader = document.getElementById("loader");
const loaderSub = document.getElementById("loaderSub");
const canvas = document.getElementById("sceneCanvas");
const labelsLayer = document.getElementById("labelsLayer");
const compassSvg = document.getElementById("compassSvg");
const compassN = document.getElementById("compassN");
const legendBody = document.getElementById("legendBody");

async function loadAllAssets() {
  loaderSub.textContent = "Chargement du MNE Copernicus GLO-30 (320 × 320)…";
  const [metaRes, demRes] = await Promise.all([
    fetch("./data/meta.json"),
    fetch("./data/dem_320.bin"),
  ]);
  if (!metaRes.ok || !demRes.ok) throw new Error("Impossible de charger les données du glacier.");

  const meta = await metaRes.json();
  const demU16 = new Uint16Array(await demRes.arrayBuffer());

  loaderSub.textContent = "Chargement de l'imagerie Sentinel-2 L2A (10 m)…";
  const texLoader = new THREE.TextureLoader();
  const [rgbTex, maskTex] = await Promise.all([
    texLoader.loadAsync("./data/s2_rgb_1536.jpg"),
    texLoader.loadAsync("./data/s2_mask_768.png"),
  ]);

  return { meta, demU16, rgbTex, maskTex };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function jenningsRainSnowElevM(taAwsC, rhPct, awsElevM = 2180, lapse = 6.5) {
  const rh = Math.max(20, Math.min(100, rhPct));
  const t50 = 2.6 - 0.019 * rh;
  return awsElevM + ((taAwsC - t50) / lapse) * 1000.0;
}

function sampleEpisodeAtHour(ep, hourFloat) {
  const h = Math.max(0, Math.min(23, hourFloat));
  const i0 = Math.floor(h);
  const i1 = Math.min(23, i0 + 1);
  const f = h - i0;
  const a = ep.hours[i0];
  const b = ep.hours[i1];

  const depCum = lerp(a.depCum, b.depCum, f);
  const depRate = lerp(a.depRate, b.depRate, f);
  const deltaAlpha = lerp(a.deltaAlpha, b.deltaAlpha, f);
  const sw = lerp(a.sw, b.sw, f);
  const lw = lerp(a.lw, b.lw, f);
  const cloud = lerp(a.cloud, b.cloud, f);
  const ta = lerp(a.ta, b.ta, f);
  const rh = lerp(a.rh, b.rh, f);
  const u = lerp(a.u, b.u, f);
  const plume = lerp(a.plume, b.plume, f);
  const precip = lerp(a.precip, b.precip, f);
  const rainSnowM = lerp(a.rainSnowM, b.rainSnowM, f);
  const snowCumMm = lerp(a.snowCumMm, b.snowCumMm, f);
  const wetFrac = lerp(a.wetFrac, b.wetFrac, f);

  return {
    hour: h,
    depCum,
    depRate,
    depCumFrac: depCum / Math.max(ep.dailyDepMgM2, 0.1),
    deltaAlpha,
    sw,
    lw,
    cloud,
    ta,
    rh,
    u,
    plume,
    precip,
    rainSnowM,
    snowCumMm,
    wetFrac,
  };
}

function describePhase(epId, s, labMode) {
  if (labMode) return "Mode laboratoire météo (forçages manuels)";
  if (s.hour < 6.0) return "Nuit · refroidissement et vent catabatique";
  if (epId === "2018-08-22") return "Ciel alpin pur · rayonnement solaire maximal";
  if (epId === "2023-08-31") {
    if (s.hour >= 11 && s.hour <= 18) return "Fumée sèche dense · zéro neige fraîche";
    return "Transport de fumée sur le champ de glace";
  }
  // 2018-08-26: full meteorological progression!
  if (s.precip >= 0.4 && s.rainSnowM <= 2300) return "Neige jusqu'au bas du glacier · blanchiment";
  if (s.precip >= 0.4) return `Pluie en bas / Neige > ${Math.round(s.rainSnowM)} m · lessivage`;
  if (s.plume > 0.6) return "Panache dense · forte atténuation solaire";
  return "Arrivée de la fumée et du front humide";
}

function formatHour(h) {
  const hh = Math.floor(h);
  const mm = Math.floor((h - hh) * 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function fmtFr(val, dec = 1) {
  return val.toFixed(dec).replace(".", ",");
}

async function boot() {
  let assets;
  try {
    assets = await loadAllAssets();
  } catch (err) {
    loaderSub.textContent = "Erreur de chargement : " + err.message;
    return;
  }

  const { meta, demU16, rgbTex, maskTex } = assets;
  const glacier = new GlacierScene(canvas, meta, demU16, rgbTex, maskTex);

  // Build 3D landmark pins
  const pins = meta.landmarks.map((lm) => {
    const el = document.createElement("div");
    el.className = "pin-label";
    el.innerHTML = `
      <div class="pin-card">
        <span class="pin-name">${lm.name}</span>
        <span class="pin-elev">${lm.elevM.toLocaleString("fr-CA")} m</span>
      </div>
      <div class="pin-stem"></div>
      <div class="pin-dot ${lm.kind}"></div>
    `;
    labelsLayer.appendChild(el);
    return { el, lm };
  });

  // App state
  let currentEpId = "2018-08-26";
  let currentHour = 13.0;
  let playing = true;
  const speeds = [1, 2, 4];
  let speedIdx = 0;
  let showLabels = true;
  let chartMetric = "depRate";

  // Live manual Weather Lab overrides (null = driven by real hourly episode!)
  let labActive = false;
  const lab = { smoke: 0.5, sw: 350, precip: 0.0, ta: 3.5, wind: 5.0 };

  // DOM refs
  const timeSlider = document.getElementById("timeSlider");
  const histBars = document.getElementById("histBars");
  const clockTime = document.getElementById("clockTime");
  const clockPhase = document.getElementById("clockPhase");
  const kpiSw = document.getElementById("kpiSw");
  const kpiLw = document.getElementById("kpiLw");
  const kpiTempIso = document.getElementById("kpiTempIso");
  const kpiPrecip = document.getElementById("kpiPrecip");
  const kpiWindRh = document.getElementById("kpiWindRh");
  const kpiDep = document.getElementById("kpiDep");
  const modalProvenance = document.getElementById("modalProvenance");

  const slLabSmoke = document.getElementById("slLabSmoke");
  const slLabSw = document.getElementById("slLabSw");
  const slLabPrecip = document.getElementById("slLabPrecip");
  const slLabTemp = document.getElementById("slLabTemp");
  const slLabWind = document.getElementById("slLabWind");
  const valLabSmoke = document.getElementById("valLabSmoke");
  const valLabSw = document.getElementById("valLabSw");
  const valLabPrecip = document.getElementById("valLabPrecip");
  const valLabTemp = document.getElementById("valLabTemp");
  const valLabWind = document.getElementById("valLabWind");
  const btnSyncAws = document.getElementById("btnSyncAws");

  let barEls = [];
  function rebuildHistogram() {
    const ep = meta.episodes[currentEpId];
    const vals = ep.hours.map((r) => {
      if (chartMetric === "ta") return Math.max(0, r.ta + 2.0);
      return r[chartMetric] || 0;
    });
    const maxV = Math.max(...vals, 0.1);
    histBars.innerHTML = "";
    barEls = vals.map((v) => {
      const b = document.createElement("div");
      b.className = `hist-bar ${chartMetric}`;
      const pct = Math.max(7, Math.round((v / maxV) * 100));
      b.style.height = `${pct}%`;
      histBars.appendChild(b);
      return b;
    });
    modalProvenance.textContent = ep.provenance;
  }

  function updateLegend() {
    const m = glacier.state.mode;
    const ep = meta.episodes[currentEpId];
    if (m === 0) {
      legendBody.innerHTML = `
        <div class="legend-title">Atmosphère &amp; surface glaciaire</div>
        <div>Fumée volumétrique entraînée par le vent · <span style="color:#5cc8ff">ligne cyan</span> = isotherme pluie/neige (pluie en bas, neige fraîche en haut).</div>
      `;
    } else if (m === 1) {
      legendBody.innerHTML = `
        <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
        <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
        <div class="legend-scale"><span>0</span><span>${fmtFr(ep.dailyDepMgM2 * 0.5, 0)}</span><span>${fmtFr(ep.dailyDepMgM2, 1)} mg m⁻²</span></div>
      `;
    } else if (m === 2) {
      legendBody.innerHTML = `
        <div class="legend-title">Surface glaciaire (NDSI + albédo)</div>
        <div class="legend-grid">
          <span class="legend-chip"><i style="background:#d6e3f2"></i>Neige / névé</span>
          <span class="legend-chip"><i style="background:#4f9ad8"></i>Glace vive</span>
          <span class="legend-chip"><i style="background:#1fadad"></i>Lac proglaciaire</span>
          <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
        </div>
      `;
    } else {
      legendBody.innerHTML = `
        <div class="legend-title">Maquette géomorphologique</div>
        <div>Relief pur Copernicus GLO-30 (1 867 – 3 494 m) avec ombres solaires pilotées par SW↓.</div>
      `;
    }
  }

  function syncSlidersToState(s) {
    slLabSmoke.value = String(Math.round(s.plume * 100));
    valLabSmoke.textContent = `${Math.round(s.plume * 100)} %`;
    slLabSw.value = String(Math.round(s.sw));
    valLabSw.textContent = `${Math.round(s.sw)} W m⁻²`;
    slLabPrecip.value = s.precip.toFixed(1);
    valLabPrecip.textContent = `${fmtFr(s.precip, 1)} mm/h`;
    slLabTemp.value = s.ta.toFixed(1);
    valLabTemp.textContent = `${fmtFr(s.ta, 1)} °C`;
    slLabWind.value = s.u.toFixed(1);
    valLabWind.textContent = `${fmtFr(s.u, 1)} m/s`;
  }

  function syncTimeUI() {
    const ep = meta.episodes[currentEpId];
    const base = sampleEpisodeAtHour(ep, currentHour);

    // Apply optional live Weather Lab manual overrides cleanly on top of real episode state
    const s = { ...base };
    if (labActive) {
      s.plume = lab.smoke;
      s.sw = lab.sw;
      s.precip = lab.precip;
      s.ta = lab.ta;
      s.u = lab.wind;
      s.rh = s.precip > 0.2 ? Math.max(88, base.rh) : base.rh;
      s.rainSnowM = jenningsRainSnowElevM(s.ta, s.rh, meta.awsElevM, meta.lapseCPerKm);
      s.cloud = Math.min(1.0, Math.max(base.cloud, s.precip > 0.1 ? 0.82 : 0.15));
      s.lw = 275 + s.cloud * 52;
      s.wetFrac = s.precip > 0.2 ? 0.78 : 0.0;
      if (s.precip > 0.2) {
        const snowFrac = Math.max(0, Math.min(1, (3456 - s.rainSnowM) / (3456 - 1965)));
        s.snowCumMm = Math.max(base.snowCumMm, s.precip * 3.5 * snowFrac);
      }
    } else {
      syncSlidersToState(s);
    }

    glacier.setMeteorology({
      hour: s.hour,
      depCumFrac: s.depCumFrac,
      plumeDensity: s.plume,
      cloudCover: s.cloud,
      precipMmH: s.precip,
      rainSnowM: s.rainSnowM,
      snowCumMm: s.snowCumMm,
      windSpeed: s.u,
      windBearingDeg: ep.windBearingDeg,
      swIn: s.sw,
      lwIn: s.lw,
      wetFrac: s.wetFrac,
      dailyDepMgM2: ep.dailyDepMgM2,
    });

    timeSlider.value = s.hour.toFixed(2);
    clockTime.textContent = formatHour(s.hour);
    clockPhase.textContent = describePhase(currentEpId, s, labActive);

    const isClean = glacier.state.compareClean;
    kpiSw.textContent = `${Math.round(s.sw)} W m⁻²`;
    kpiLw.textContent = `${Math.round(s.lw)} W m⁻²`;
    kpiTempIso.textContent = `${fmtFr(s.ta, 1)} °C · ${Math.round(s.rainSnowM)} m`;
    if (s.precip < 0.05) {
      kpiPrecip.textContent = s.snowCumMm > 0.2 ? `0 mm/h (${fmtFr(s.snowCumMm, 1)} mm neige)` : "Sec · 0,0 mm/h";
    } else if (s.rainSnowM <= 2100) {
      kpiPrecip.textContent = `Neige · ${fmtFr(s.precip, 1)} mm/h`;
    } else if (s.rainSnowM >= 3460) {
      kpiPrecip.textContent = `Pluie · ${fmtFr(s.precip, 1)} mm/h`;
    } else {
      kpiPrecip.textContent = `Mixte · ${fmtFr(s.precip, 1)} mm/h`;
    }
    kpiWindRh.textContent = `${fmtFr(s.u, 1)} m/s · ${Math.round(s.rh)} %`;
    kpiDep.textContent = isClean
      ? "0,0 mg m⁻²"
      : `${fmtFr(s.depCum, 1)} mg m⁻² · ${fmtFr(s.deltaAlpha, 3)}`;

    const curIdx = Math.floor(s.hour);
    for (let i = 0; i < barEls.length; i++) {
      barEls[i].classList.toggle("past", i < curIdx);
      barEls[i].classList.toggle("current", i === curIdx);
    }
  }

  // Play / Pause
  const btnPlay = document.getElementById("btnPlay");
  const iconPlay = document.getElementById("iconPlay");
  const iconPause = document.getElementById("iconPause");
  function setPlaying(p) {
    playing = p;
    iconPlay.style.display = playing ? "none" : "block";
    iconPause.style.display = playing ? "block" : "none";
  }
  btnPlay.addEventListener("click", () => setPlaying(!playing));
  setPlaying(true);

  const btnSpeed = document.getElementById("btnSpeed");
  btnSpeed.addEventListener("click", () => {
    speedIdx = (speedIdx + 1) % speeds.length;
    btnSpeed.textContent = `${speeds[speedIdx]}×`;
  });

  timeSlider.addEventListener("input", () => {
    currentHour = parseFloat(timeSlider.value);
    syncTimeUI();
  });

  // Histogram metric switcher
  document.querySelectorAll(".ctab").forEach((btn) => {
    btn.addEventListener("click", () => {
      chartMetric = btn.dataset.metric;
      document.querySelectorAll(".ctab").forEach((b) => b.classList.toggle("active", b === btn));
      rebuildHistogram();
      syncTimeUI();
    });
  });

  // Episode switcher
  document.querySelectorAll(".ep-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentEpId = btn.dataset.episode;
      labActive = false;
      btnSyncAws.classList.add("hidden");
      document.querySelectorAll(".ep-btn").forEach((b) => {
        const on = b.dataset.episode === currentEpId;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      currentHour = currentEpId === "2018-08-26" ? 13.0 : 11.0;
      rebuildHistogram();
      updateLegend();
      syncTimeUI();
      setPlaying(true);
    });
  });

  // Live Weather Lab manual overrides
  function enterLab() {
    if (!labActive) {
      const s = sampleEpisodeAtHour(meta.episodes[currentEpId], currentHour);
      lab.smoke = s.plume;
      lab.sw = s.sw;
      lab.precip = s.precip;
      lab.ta = s.ta;
      lab.wind = s.u;
      labActive = true;
      btnSyncAws.classList.remove("hidden");
    }
  }
  slLabSmoke.addEventListener("input", () => {
    enterLab();
    lab.smoke = parseFloat(slLabSmoke.value) / 100;
    valLabSmoke.textContent = `${Math.round(lab.smoke * 100)} %`;
    syncTimeUI();
  });
  slLabSw.addEventListener("input", () => {
    enterLab();
    lab.sw = parseFloat(slLabSw.value);
    valLabSw.textContent = `${Math.round(lab.sw)} W m⁻²`;
    syncTimeUI();
  });
  slLabPrecip.addEventListener("input", () => {
    enterLab();
    lab.precip = parseFloat(slLabPrecip.value);
    valLabPrecip.textContent = `${fmtFr(lab.precip, 1)} mm/h`;
    syncTimeUI();
  });
  slLabTemp.addEventListener("input", () => {
    enterLab();
    lab.ta = parseFloat(slLabTemp.value);
    valLabTemp.textContent = `${fmtFr(lab.ta, 1)} °C`;
    syncTimeUI();
  });
  slLabWind.addEventListener("input", () => {
    enterLab();
    lab.wind = parseFloat(slLabWind.value);
    valLabWind.textContent = `${fmtFr(lab.wind, 1)} m/s`;
    syncTimeUI();
  });
  btnSyncAws.addEventListener("click", () => {
    labActive = false;
    btnSyncAws.classList.add("hidden");
    syncTimeUI();
  });

  // Hold to compare clean
  const btnCompare = document.getElementById("btnCompare");
  const setClean = (on) => {
    glacier.setCompareClean(on);
    btnCompare.classList.toggle("active", on);
    syncTimeUI();
  };
  btnCompare.addEventListener("pointerdown", () => setClean(true));
  window.addEventListener("pointerup", () => { if (glacier.state.compareClean) setClean(false); });
  btnCompare.addEventListener("pointerleave", () => { if (glacier.state.compareClean) setClean(false); });

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") { e.preventDefault(); setPlaying(!playing); }
    if (e.key === "b" || e.key === "B") setClean(true);
  });
  window.addEventListener("keyup", (e) => { if (e.key === "b" || e.key === "B") setClean(false); });

  // Presets & drawer
  const presetBtns = document.querySelectorAll(".preset-group .pill-btn");
  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      glacier.flyTo(btn.dataset.preset);
    });
  });
  document.getElementById("compassWrap").addEventListener("click", () => glacier.flyTo("block"));
  canvas.addEventListener("dblclick", () => glacier.flyTo("block"));

  const btnSettings = document.getElementById("btnSettings");
  const settingsDrawer = document.getElementById("settingsDrawer");
  btnSettings.addEventListener("click", () => {
    const hidden = settingsDrawer.classList.toggle("hidden");
    btnSettings.setAttribute("aria-expanded", hidden ? "false" : "true");
  });

  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      glacier.setMode(Number(btn.dataset.mode));
      updateLegend();
    });
  });

  const slExag = document.getElementById("slExag");
  const valExag = document.getElementById("valExag");
  slExag.addEventListener("input", () => {
    const v = parseFloat(slExag.value);
    valExag.textContent = `${fmtFr(v, 2)}×`;
    glacier.setExaggeration(v);
  });

  const slBoost = document.getElementById("slBoost");
  const valBoost = document.getElementById("valBoost");
  slBoost.addEventListener("input", () => {
    const v = parseFloat(slBoost.value);
    valBoost.textContent = `${fmtFr(v, 1)}×`;
    glacier.setBoost(v);
  });

  document.getElementById("chkSmoke").addEventListener("change", (e) => glacier.setShowSmoke(e.target.checked));
  document.getElementById("chkPrecip").addEventListener("change", (e) => glacier.setShowPrecip(e.target.checked));
  document.getElementById("chkIsotherm").addEventListener("change", (e) => glacier.setShowIsotherm(e.target.checked));
  document.getElementById("chkShadows").addEventListener("change", (e) => glacier.setShadows(e.target.checked));
  document.getElementById("chkContours").addEventListener("change", (e) => glacier.setContours(e.target.checked));
  document.getElementById("chkLabels").addEventListener("change", (e) => {
    showLabels = e.target.checked;
    labelsLayer.style.display = showLabels ? "block" : "none";
  });
  document.getElementById("chkSpin").addEventListener("change", (e) => { glacier.state.spin = e.target.checked; });

  document.getElementById("btnReset").addEventListener("click", () => {
    labActive = false;
    btnSyncAws.classList.add("hidden");
    glacier.flyTo("block");
    slExag.value = "1.30"; valExag.textContent = "1,30×"; glacier.setExaggeration(1.30);
    slBoost.value = "2.2"; valBoost.textContent = "2,2×"; glacier.setBoost(2.2);
    glacier.state.spin = false; document.getElementById("chkSpin").checked = false;
    syncTimeUI();
  });

  document.getElementById("btnSnap").addEventListener("click", () => {
    const a = document.createElement("a");
    a.download = `athabasca_3d_${currentEpId}_${formatHour(currentHour).replace(":", "h")}.png`;
    a.href = glacier.capturePNG();
    a.click();
  });

  const infoModal = document.getElementById("infoModal");
  document.getElementById("btnInfo").addEventListener("click", () => infoModal.classList.remove("hidden"));
  document.getElementById("btnCloseInfo").addEventListener("click", () => infoModal.classList.add("hidden"));
  infoModal.addEventListener("click", (e) => { if (e.target === infoModal) infoModal.classList.add("hidden"); });

  window.addEventListener("resize", () => glacier.resize());

  rebuildHistogram();
  updateLegend();
  syncTimeUI();
  setTimeout(() => loader.classList.add("done"), 160);

  let lastNow = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - lastNow) / 1000, 0.05);
    lastNow = now;

    if (playing) {
      currentHour += dt * 1.1 * speeds[speedIdx];
      if (currentHour > 23.0) currentHour = 0.0;
      syncTimeUI();
    }

    glacier.update(dt);

    const deg = glacier.getNorthAngleDeg();
    compassSvg.style.transform = `rotate(${deg.toFixed(1)}deg)`;
    const rad = (deg * Math.PI) / 180;
    compassN.style.left = `${(19 + 13 * Math.sin(rad) - 4).toFixed(1)}px`;
    compassN.style.top = `${(19 - 13 * Math.cos(rad) - 6).toFixed(1)}px`;

    if (showLabels) {
      for (let i = 0; i < pins.length; i++) {
        const { el, lm } = pins[i];
        const p = glacier.projectLandmark(lm);
        if (!p) {
          el.style.opacity = "0";
        } else {
          el.style.opacity = "1";
          el.style.left = `${p.x.toFixed(1)}px`;
          el.style.top = `${p.y.toFixed(1)}px`;
          el.style.zIndex = String(Math.floor((1.0 - p.depth) * 1000));
        }
      }
    }
  }
  requestAnimationFrame(animate);
}

boot();
