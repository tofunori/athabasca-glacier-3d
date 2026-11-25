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
  const demBuf = await demRes.arrayBuffer();
  const demU16 = new Uint16Array(demBuf);

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

function sampleEpisodeAtHour(ep, hourFloat) {
  const hClamped = Math.max(0, Math.min(23, hourFloat));
  const i0 = Math.floor(hClamped);
  const i1 = Math.min(23, i0 + 1);
  const f = hClamped - i0;
  const a = ep.hours[i0];
  const b = ep.hours[i1];
  const maxRate = Math.max(...ep.hours.map((x) => x.depRate), 0.1);

  const depCum = lerp(a.depCum, b.depCum, f);
  const depRate = lerp(a.depRate, b.depRate, f);
  const deltaAlpha = lerp(a.deltaAlpha, b.deltaAlpha, f);
  const sw = lerp(a.sw, b.sw, f);
  const ta = lerp(a.ta, b.ta, f);
  const rh = lerp(a.rh, b.rh, f);
  const u = lerp(a.u, b.u, f);
  const plume = lerp(a.plume, b.plume, f);
  const wetFrac = lerp(a.wetFrac, b.wetFrac, f);
  const rf = Math.max(0, -deltaAlpha * sw);

  return {
    hour: hClamped,
    depCum,
    depRate,
    depCumFrac: depCum / Math.max(ep.dailyDepMgM2, 0.1),
    depRateNorm: depRate / maxRate,
    deltaAlpha,
    rf,
    sw,
    ta,
    rh,
    u,
    plume,
    wetFrac,
  };
}

function describePhase(epId, s) {
  if (s.hour < 6) return "Nuit · advection résiduelle";
  if (epId === "2018-08-26") {
    if (s.wetFrac > 0.55) return "Lessivage humide · pic de dépôt (HR ~98 %)";
    if (s.plume > 0.65) return "Panache dense · atténuation solaire (SW↓ < 200 W m⁻²)";
    return "Arrivée du panache de fumée de C.-B.";
  } else {
    if (s.hour >= 11 && s.hour <= 18) return "Pic de dépôt sec · panache épais sans neige";
    if (s.hour > 18) return "Accumulation de fin de journée · surface assombrie";
    return "Transport matinal de fumée vers les Rocheuses";
  }
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

  // App UI state
  let currentEpId = "2018-08-26";
  let currentHour = 10.5;
  let playing = true;
  const speeds = [1, 2, 4];
  let speedIdx = 0;
  let showLabels = true;

  // DOM refs
  const timeSlider = document.getElementById("timeSlider");
  const histBars = document.getElementById("histBars");
  const clockTime = document.getElementById("clockTime");
  const clockPhase = document.getElementById("clockPhase");
  const kpiDepCum = document.getElementById("kpiDepCum");
  const kpiDepRate = document.getElementById("kpiDepRate");
  const kpiDeltaAlpha = document.getElementById("kpiDeltaAlpha");
  const kpiRF = document.getElementById("kpiRF");
  const kpiMet = document.getElementById("kpiMet");
  const kpiTemp = document.getElementById("kpiTemp");
  const modalProvenance = document.getElementById("modalProvenance");

  let barEls = [];
  function rebuildHistogram() {
    const ep = meta.episodes[currentEpId];
    const maxRate = Math.max(...ep.hours.map((x) => x.depRate), 0.1);
    histBars.innerHTML = "";
    barEls = ep.hours.map((row) => {
      const b = document.createElement("div");
      b.className = "hist-bar";
      const pct = Math.max(8, Math.round((row.depRate / maxRate) * 100));
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
        <div class="legend-title">Satellite Sentinel-2 + dépôt simulé</div>
        <div>Assombrissement progressif de la neige et de la glace vive piloté par le dépôt cumulé (<strong>${fmtFr(ep.dailyDepMgM2, 1)} mg m⁻²</strong> sur 24 h).</div>
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
        <div>Relief pur Copernicus GLO-30 (1 867 – 3 494 m) avec ombres solaires réelles sur les cirques, chutes de glace et moraines.</div>
      `;
    }
  }

  function syncTimeUI() {
    const ep = meta.episodes[currentEpId];
    const s = sampleEpisodeAtHour(ep, currentHour);

    glacier.setEpisodeState({
      hour: s.hour,
      depCumFrac: s.depCumFrac,
      depRateNorm: s.depRateNorm,
      plumeDensity: s.plume,
      wetFrac: s.wetFrac,
      windSpeed: s.u,
      windBearingDeg: ep.windBearingDeg,
      dailyDepMgM2: ep.dailyDepMgM2,
    });

    timeSlider.value = s.hour.toFixed(2);
    clockTime.textContent = formatHour(s.hour);
    clockPhase.textContent = describePhase(currentEpId, s);

    const isClean = glacier.state.compareClean;
    kpiDepCum.textContent = isClean ? "0,0 mg m⁻² (avant)" : `${fmtFr(s.depCum, 1)} mg m⁻²`;
    kpiDepRate.textContent = `${fmtFr(s.depRate, 2)} mg m⁻² h⁻¹`;
    kpiDeltaAlpha.textContent = isClean ? "0,000" : fmtFr(s.deltaAlpha, 3);
    kpiRF.textContent = isClean ? "0,0 W m⁻²" : `+${fmtFr(s.rf, 1)} W m⁻²`;
    kpiMet.textContent = `${fmtFr(s.u, 1)} m/s · ${Math.round(s.sw)} W/m²`;
    kpiTemp.textContent = `${fmtFr(s.ta, 1)} °C · ${Math.round(s.rh)} %`;

    const curIdx = Math.floor(s.hour);
    for (let i = 0; i < barEls.length; i++) {
      barEls[i].classList.toggle("past", i < curIdx);
      barEls[i].classList.toggle("current", i === curIdx);
    }
  }

  // Play / Pause controls
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

  // Episode switcher
  document.querySelectorAll(".ep-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentEpId = btn.dataset.episode;
      document.querySelectorAll(".ep-btn").forEach((b) => {
        const on = b.dataset.episode === currentEpId;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      currentHour = 0.0;
      rebuildHistogram();
      updateLegend();
      syncTimeUI();
      setPlaying(true);
    });
  });

  // Hold to compare clean (before deposition)
  const btnCompare = document.getElementById("btnCompare");
  const setClean = (on) => {
    glacier.setCompareClean(on);
    btnCompare.classList.toggle("active", on);
    syncTimeUI();
  };
  btnCompare.addEventListener("pointerdown", () => setClean(true));
  window.addEventListener("pointerup", () => { if (glacier.state.compareClean) setClean(false); });
  btnCompare.addEventListener("pointerleave", () => { if (glacier.state.compareClean) setClean(false); });

  // Keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") { e.preventDefault(); setPlaying(!playing); }
    if (e.key === "b" || e.key === "B") setClean(true);
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "b" || e.key === "B") setClean(false);
  });

  // Camera presets
  const presetBtns = document.querySelectorAll(".preset-group .pill-btn");
  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      glacier.flyTo(btn.dataset.preset);
    });
  });
  document.getElementById("compassWrap").addEventListener("click", () => {
    glacier.flyTo("block");
  });
  canvas.addEventListener("dblclick", () => glacier.flyTo("block"));

  // Settings drawer
  const btnSettings = document.getElementById("btnSettings");
  const settingsDrawer = document.getElementById("settingsDrawer");
  btnSettings.addEventListener("click", () => {
    const open = settingsDrawer.classList.toggle("hidden");
    btnSettings.setAttribute("aria-expanded", open ? "false" : "true");
  });

  // Mode buttons
  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      glacier.setMode(Number(btn.dataset.mode));
      updateLegend();
    });
  });

  // Sliders & toggles
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

  const slSunEl = document.getElementById("slSunEl");
  const valSunMode = document.getElementById("valSunMode");
  const chkAutoSun = document.getElementById("chkAutoSun");
  slSunEl.addEventListener("input", () => {
    glacier.state.autoSun = false;
    chkAutoSun.checked = false;
    glacier.state.manualSunEl = parseFloat(slSunEl.value);
    valSunMode.textContent = `${Math.round(glacier.state.manualSunEl)}°`;
    glacier._updateSunAndAtmosphere();
  });
  chkAutoSun.addEventListener("change", () => {
    glacier.state.autoSun = chkAutoSun.checked;
    valSunMode.textContent = chkAutoSun.checked ? "Auto (24 h)" : `${Math.round(glacier.state.manualSunEl)}°`;
    glacier._updateSunAndAtmosphere();
  });

  document.getElementById("chkPlume").addEventListener("change", (e) => glacier.setShowPlume(e.target.checked));
  document.getElementById("chkShadows").addEventListener("change", (e) => glacier.setShadows(e.target.checked));
  document.getElementById("chkContours").addEventListener("change", (e) => glacier.setContours(e.target.checked));
  document.getElementById("chkLabels").addEventListener("change", (e) => {
    showLabels = e.target.checked;
    labelsLayer.style.display = showLabels ? "block" : "none";
  });
  document.getElementById("chkSpin").addEventListener("change", (e) => {
    glacier.state.spin = e.target.checked;
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    glacier.flyTo("block");
    slExag.value = "1.30"; valExag.textContent = "1,30×"; glacier.setExaggeration(1.30);
    slBoost.value = "2.2"; valBoost.textContent = "2,2×"; glacier.setBoost(2.2);
    glacier.state.autoSun = true; chkAutoSun.checked = true; valSunMode.textContent = "Auto (24 h)";
    glacier.state.spin = false; document.getElementById("chkSpin").checked = false;
    syncTimeUI();
  });

  document.getElementById("btnSnap").addEventListener("click", () => {
    const a = document.createElement("a");
    a.download = `athabasca_3d_${currentEpId}_${formatHour(currentHour).replace(":", "h")}.png`;
    a.href = glacier.capturePNG();
    a.click();
  });

  // Provenance modal
  const infoModal = document.getElementById("infoModal");
  document.getElementById("btnInfo").addEventListener("click", () => infoModal.classList.remove("hidden"));
  document.getElementById("btnCloseInfo").addEventListener("click", () => infoModal.classList.add("hidden"));
  infoModal.addEventListener("click", (e) => { if (e.target === infoModal) infoModal.classList.add("hidden"); });

  window.addEventListener("resize", () => glacier.resize());

  // Initial sync & dismiss loader
  rebuildHistogram();
  updateLegend();
  syncTimeUI();
  setTimeout(() => loader.classList.add("done"), 180);

  // Main render loop
  let lastNow = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - lastNow) / 1000, 0.05);
    lastNow = now;

    if (playing) {
      // 1x = 1.6 simulated hours per second (~15 s full 24 h cycle)
      currentHour += dt * 1.35 * speeds[speedIdx];
      if (currentHour > 23.0) currentHour = 0.0;
      syncTimeUI();
    }

    glacier.update(dt);

    // Update rotating North compass
    const deg = glacier.getNorthAngleDeg();
    compassSvg.style.transform = `rotate(${deg.toFixed(1)}deg)`;
    const rad = (deg * Math.PI) / 180;
    compassN.style.left = `${(19 + 13 * Math.sin(rad) - 4).toFixed(1)}px`;
    compassN.style.top = `${(19 - 13 * Math.cos(rad) - 6).toFixed(1)}px`;

    // Update 3D projected labels
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
