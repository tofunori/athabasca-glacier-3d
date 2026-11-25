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

function sampleSequenceAtStep(ep, tFloat) {
  const maxIdx = ep.hours.length - 1;
  const tc = Math.max(0, Math.min(maxIdx, tFloat));
  const i0 = Math.floor(tc);
  const i1 = Math.min(maxIdx, i0 + 1);
  const f = tc - i0;
  const a = ep.hours[i0];
  const b = ep.hours[i1];

  // Hour of day handles midnight wrap smoothly
  const hourOfDay = a.h + f;

  return {
    t: tc,
    dayIdx: a.dayIdx,
    dayLabel: a.dayLabel,
    date: a.date,
    hour: hourOfDay >= 24 ? hourOfDay - 24 : hourOfDay,
    depCum: lerp(a.depCum, b.depCum, f),
    depRate: lerp(a.depRate, b.depRate, f),
    depCumFrac: lerp(a.depCum, b.depCum, f) / Math.max(ep.totalDepMgM2, 0.1),
    deltaAlpha: lerp(a.deltaAlpha, b.deltaAlpha, f),
    sw: lerp(a.sw, b.sw, f),
    lw: lerp(a.lw, b.lw, f),
    cloud: lerp(a.cloud, b.cloud, f),
    ta: lerp(a.ta, b.ta, f),
    rh: lerp(a.rh, b.rh, f),
    u: lerp(a.u, b.u, f),
    plume: lerp(a.plume, b.plume, f),
    precip: lerp(a.precip, b.precip, f),
    rainSnowM: lerp(a.rainSnowM, b.rainSnowM, f),
    snowPackMm: lerp(a.snowPackMm, b.snowPackMm, f),
    wetFrac: lerp(a.wetFrac, b.wetFrac, f),
  };
}

function describePhase(epId, s, labMode) {
  if (labMode) return "Laboratoire météo manuel";
  if (s.hour < 6.0 || s.hour >= 21.5) {
    if (s.precip >= 0.4) return s.rainSnowM < 2350 ? "Neige nocturne sur le glacier" : "Pluie nocturne / neige en altitude";
    return "Nuit alpine · ciel étoilé / refroidissement";
  }
  if (epId === "2023-08-31") {
    return s.plume > 0.65 ? "Fumée sèche épaisse · zéro neige" : "Transport de fumée sur le glacier";
  }
  if (s.precip >= 0.45) {
    if (s.rainSnowM <= 2280) return "Chute de neige jusqu'au bas du glacier";
    return `Pluie en vallée · Neige > ${Math.round(s.rainSnowM)} m`;
  }
  if (s.sw >= 650 && s.snowPackMm >= 8) return "Grand soleil sur la neige fraîche !";
  if (s.sw >= 650 && s.plume < 0.2) return "Ciel alpin pur · fonte au soleil";
  if (s.plume > 0.6) return "Panache de fumée dense · atténuation SW↓";
  if (s.snowPackMm >= 5 && s.ta > 3.5) return "Fonte progressive de la neige fraîche";
  return "Évolution météorologique en vallée";
}

function formatHour(h) {
  const hh = Math.floor(h) % 24;
  const mm = Math.floor((h - Math.floor(h)) * 60);
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

  // App state — start right during the Aug 26 16:45 storm (4.2 mm/h: pouring rain in valley + heavy snow above 2,400 m!)
  let currentEpId = "2018-08-21_28";
  let currentT = 136.75;
  let playing = true;
  const speeds = [0.5, 1, 2, 4]; // 0.5x = immersive feel, 4x = multi-day timelapse
  let speedIdx = 0; // default 0.5x immersive pace so you really experience the storm!
  let showLabels = true;
  let chartMetric = "precip";

  let labActive = false;
  const lab = { smoke: 0.5, sw: 350, precip: 0.0, ta: 3.5, wind: 5.0 };

  const timeSlider = document.getElementById("timeSlider");
  const histBars = document.getElementById("histBars");
  const dayPillsWrap = document.getElementById("dayPills");
  const clockDate = document.getElementById("clockDate");
  const clockTime = document.getElementById("clockTime");
  const clockPhase = document.getElementById("clockPhase");
  const kpiSw = document.getElementById("kpiSw");
  const kpiLw = document.getElementById("kpiLw");
  const kpiTempIso = document.getElementById("kpiTempIso");
  const kpiPrecip = document.getElementById("kpiPrecip");
  const kpiSnowPack = document.getElementById("kpiSnowPack");
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
  let dayPillEls = [];
  let histBinHours = 1;

  function rebuildTimelineChrome() {
    const ep = meta.episodes[currentEpId];
    timeSlider.max = String(ep.hours.length - 1);

    // Clickable day jump buttons (8 days for 2018-08-21..28, or 4 periods for 24h)
    dayPillsWrap.innerHTML = "";
    if (ep.nDays > 1) {
      dayPillsWrap.style.display = "grid";
      dayPillsWrap.style.gridTemplateColumns = `repeat(${ep.nDays}, 1fr)`;
      dayPillEls = ep.dayLabels.map((lbl, dIdx) => {
        const b = document.createElement("button");
        b.className = "day-pill";
        b.textContent = lbl;
        b.addEventListener("click", () => {
          currentT = dIdx * 24 + 12.0; // Jump to midday of selected day!
          syncTimeUI();
        });
        dayPillsWrap.appendChild(b);
        return b;
      });
    } else {
      dayPillsWrap.style.display = "none";
      dayPillEls = [];
    }

    // Build histogram bars (downsample 192h -> 96 crisp 2-hour bars, or 24 1-hour bars for 24h)
    histBinHours = ep.hours.length > 96 ? 2 : 1;
    const nBins = Math.ceil(ep.hours.length / histBinHours);
    const vals = [];
    for (let b = 0; b < nBins; b++) {
      let acc = 0, cnt = 0;
      for (let k = 0; k < histBinHours; k++) {
        const idx = b * histBinHours + k;
        if (idx < ep.hours.length) {
          const r = ep.hours[idx];
          acc += chartMetric === "ta" ? Math.max(0, r.ta + 2.0) : (r[chartMetric] || 0);
          cnt++;
        }
      }
      vals.push(acc / Math.max(cnt, 1));
    }
    const maxV = Math.max(...vals, 0.1);
    histBars.innerHTML = "";
    barEls = vals.map((v) => {
      const el = document.createElement("div");
      el.className = `hist-bar ${chartMetric}`;
      el.style.height = `${Math.max(7, Math.round((v / maxV) * 100))}%`;
      histBars.appendChild(el);
      return el;
    });
    modalProvenance.textContent = ep.provenance;
  }

  function updateLegend() {
    const m = glacier.state.mode;
    const ep = meta.episodes[currentEpId];
    if (m === 0) {
      legendBody.innerHTML = `
        <div class="legend-title">Atmosphère &amp; manteau neigeux</div>
        <div>Clique sur <strong>Sur le glacier</strong> pour te placer à la station AWS · <span style="color:#5cc8ff">ligne cyan</span> = isotherme pluie/neige (pluie en bas, neige fraîche en haut).</div>
      `;
    } else if (m === 1) {
      legendBody.innerHTML = `
        <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
        <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
        <div class="legend-scale"><span>0</span><span>${fmtFr(ep.totalDepMgM2 * 0.5, 0)}</span><span>${fmtFr(ep.totalDepMgM2, 1)} mg m⁻²</span></div>
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
        <div>Relief pur Copernicus GLO-30 (1 867 – 3 494 m) avec cycle solaire réel sur plusieurs jours.</div>
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
    const base = sampleSequenceAtStep(ep, currentT);
    const s = { ...base };

    if (labActive) {
      s.plume = lab.smoke;
      s.sw = lab.sw;
      s.precip = lab.precip;
      s.ta = lab.ta;
      s.u = lab.wind;
      s.rh = s.precip > 0.2 ? Math.max(90, base.rh) : base.rh;
      s.rainSnowM = jenningsRainSnowElevM(s.ta, s.rh, meta.awsElevM, meta.lapseCPerKm);
      s.cloud = Math.min(1.0, Math.max(base.cloud, s.precip > 0.1 ? 0.85 : 0.15));
      s.lw = 275 + s.cloud * 55;
      s.wetFrac = s.precip > 0.2 ? 0.78 : 0.0;
      if (s.precip > 0.2) {
        const snowFrac = Math.max(0, Math.min(1, (3456 - s.rainSnowM) / (3456 - 1965)));
        s.snowPackMm = Math.max(base.snowPackMm, s.precip * 4.5 * snowFrac);
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
      snowPackMm: s.snowPackMm,
      windSpeed: s.u,
      windBearingDeg: ep.windBearingDeg,
      swIn: s.sw,
      lwIn: s.lw,
      wetFrac: s.wetFrac,
      totalDepMgM2: ep.totalDepMgM2,
    });

    timeSlider.value = s.t.toFixed(2);
    clockDate.textContent = s.dayLabel;
    clockTime.textContent = formatHour(s.hour);
    clockPhase.textContent = describePhase(currentEpId, s, labActive);

    const isClean = glacier.state.compareClean;
    kpiSw.textContent = `${Math.round(s.sw)} W m⁻²`;
    kpiLw.textContent = `${Math.round(s.lw)} W m⁻²`;
    kpiTempIso.textContent = `${fmtFr(s.ta, 1)} °C · ${Math.round(s.rainSnowM)} m`;
    if (s.precip < 0.05) {
      kpiPrecip.textContent = "Sec · 0,0 mm/h";
    } else if (s.rainSnowM <= 2120) {
      kpiPrecip.textContent = `Neige · ${fmtFr(s.precip, 1)} mm/h`;
    } else if (s.rainSnowM >= 3460) {
      kpiPrecip.textContent = `Pluie · ${fmtFr(s.precip, 1)} mm/h`;
    } else {
      kpiPrecip.textContent = `Pluie/Neige · ${fmtFr(s.precip, 1)}`;
    }
    kpiSnowPack.textContent = isClean ? "0,0 mm" : `${fmtFr(s.snowPackMm, 1)} mm éq.`;
    kpiDep.textContent = isClean
      ? "0,0 mg m⁻²"
      : `${fmtFr(s.depCum, 1)} mg m⁻² · ${fmtFr(s.deltaAlpha, 3)}`;

    const curBin = Math.floor(s.t / histBinHours);
    for (let i = 0; i < barEls.length; i++) {
      barEls[i].classList.toggle("past", i < curBin);
      barEls[i].classList.toggle("current", i === curBin);
    }
    for (let d = 0; d < dayPillEls.length; d++) {
      dayPillEls[d].classList.toggle("active", d === s.dayIdx);
    }
  }

  // Play / Pause & speed
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
    btnSpeed.textContent = `${String(speeds[speedIdx]).replace(".", ",")}×`;
  });

  timeSlider.addEventListener("input", () => {
    currentT = parseFloat(timeSlider.value);
    syncTimeUI();
  });

  document.querySelectorAll(".ctab").forEach((btn) => {
    btn.addEventListener("click", () => {
      chartMetric = btn.dataset.metric;
      document.querySelectorAll(".ctab").forEach((b) => b.classList.toggle("active", b === btn));
      rebuildTimelineChrome();
      syncTimeUI();
    });
  });

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
      currentT = currentEpId === "2018-08-21_28" ? 133.0 : 11.0;
      rebuildTimelineChrome();
      updateLegend();
      syncTimeUI();
      setPlaying(true);
    });
  });

  // Live Weather Lab overrides
  function enterLab() {
    if (!labActive) {
      const s = sampleSequenceAtStep(meta.episodes[currentEpId], currentT);
      lab.smoke = s.plume; lab.sw = s.sw; lab.precip = s.precip; lab.ta = s.ta; lab.wind = s.u;
      labActive = true;
      btnSyncAws.classList.remove("hidden");
    }
  }
  slLabSmoke.addEventListener("input", () => { enterLab(); lab.smoke = parseFloat(slLabSmoke.value) / 100; valLabSmoke.textContent = `${Math.round(lab.smoke * 100)} %`; syncTimeUI(); });
  slLabSw.addEventListener("input", () => { enterLab(); lab.sw = parseFloat(slLabSw.value); valLabSw.textContent = `${Math.round(lab.sw)} W m⁻²`; syncTimeUI(); });
  slLabPrecip.addEventListener("input", () => { enterLab(); lab.precip = parseFloat(slLabPrecip.value); valLabPrecip.textContent = `${fmtFr(lab.precip, 1)} mm/h`; syncTimeUI(); });
  slLabTemp.addEventListener("input", () => { enterLab(); lab.ta = parseFloat(slLabTemp.value); valLabTemp.textContent = `${fmtFr(lab.ta, 1)} °C`; syncTimeUI(); });
  slLabWind.addEventListener("input", () => { enterLab(); lab.wind = parseFloat(slLabWind.value); valLabWind.textContent = `${fmtFr(lab.wind, 1)} m/s`; syncTimeUI(); });
  btnSyncAws.addEventListener("click", () => { labActive = false; btnSyncAws.classList.add("hidden"); syncTimeUI(); });

  const btnCompare = document.getElementById("btnCompare");
  const setClean = (on) => { glacier.setCompareClean(on); btnCompare.classList.toggle("active", on); syncTimeUI(); };
  btnCompare.addEventListener("pointerdown", () => setClean(true));
  window.addEventListener("pointerup", () => { if (glacier.state.compareClean) setClean(false); });
  btnCompare.addEventListener("pointerleave", () => { if (glacier.state.compareClean) setClean(false); });

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") { e.preventDefault(); setPlaying(!playing); }
    if (e.key === "b" || e.key === "B") setClean(true);
  });
  window.addEventListener("keyup", (e) => { if (e.key === "b" || e.key === "B") setClean(false); });

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

  const slExag = document.getElementById("slExag"), valExag = document.getElementById("valExag");
  slExag.addEventListener("input", () => { const v = parseFloat(slExag.value); valExag.textContent = `${fmtFr(v, 2)}×`; glacier.setExaggeration(v); });
  const slBoost = document.getElementById("slBoost"), valBoost = document.getElementById("valBoost");
  slBoost.addEventListener("input", () => { const v = parseFloat(slBoost.value); valBoost.textContent = `${fmtFr(v, 1)}×`; glacier.setBoost(v); });

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
    labActive = false; btnSyncAws.classList.add("hidden");
    glacier.flyTo("block");
    slExag.value = "1.30"; valExag.textContent = "1,30×"; glacier.setExaggeration(1.30);
    slBoost.value = "2.2"; valBoost.textContent = "2,2×"; glacier.setBoost(2.2);
    glacier.state.spin = false; document.getElementById("chkSpin").checked = false;
    syncTimeUI();
  });

  document.getElementById("btnSnap").addEventListener("click", () => {
    const ep = meta.episodes[currentEpId];
    const s = sampleSequenceAtStep(ep, currentT);
    const a = document.createElement("a");
    a.download = `athabasca_3d_${s.date}_${formatHour(s.hour).replace(":", "h")}.png`;
    a.href = glacier.capturePNG();
    a.click();
  });

  const infoModal = document.getElementById("infoModal");
  document.getElementById("btnInfo").addEventListener("click", () => infoModal.classList.remove("hidden"));
  document.getElementById("btnCloseInfo").addEventListener("click", () => infoModal.classList.add("hidden"));
  infoModal.addEventListener("click", (e) => { if (e.target === infoModal) infoModal.classList.add("hidden"); });

  window.addEventListener("resize", () => glacier.resize());

  rebuildTimelineChrome();
  updateLegend();
  syncTimeUI();
  setTimeout(() => loader.classList.add("done"), 160);

  let lastNow = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - lastNow) / 1000, 0.05);
    lastNow = now;

    if (playing) {
      const ep = meta.episodes[currentEpId];
      // 1x = ~1.5 simulated hours/sec (~16 s per day; 0.5x = 32 s immersive day; 4x = 4 s per day timelapse!)
      currentT += dt * 1.5 * speeds[speedIdx];
      if (currentT > ep.hours.length - 1) currentT = 0.0;
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
        if (!p) el.style.opacity = "0";
        else {
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
