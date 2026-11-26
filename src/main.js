import "./style.css";
import * as THREE from "three";
import { GlacierScene } from "./glacierScene.js";

const DATA_VER = "prod_hd_20261125";

const loader = document.getElementById("loader");
const loaderSub = document.getElementById("loaderSub");
const canvas = document.getElementById("sceneCanvas");
const labelsLayer = document.getElementById("labelsLayer");
const compassSvg = document.getElementById("compassSvg");
const compassN = document.getElementById("compassN");
const legendBody = document.getElementById("legendBody");

async function loadAllAssets() {
  loaderSub.textContent = "Chargement du MNT HD 448×448 + couronne Rocheuses 35 km (GLO-30)…";
  const metaRes = await fetch(`./data/meta.json?v=${DATA_VER}`, { cache: "no-store" });
  if (!metaRes.ok) throw new Error("Impossible de charger les métadonnées du glacier.");
  const meta = await metaRes.json();

  const demFile = meta.demFile || "dem_448.bin";
  const ringFile = meta.ring?.file || "dem_ring_320.bin";
  const aoFile = meta.aoFile || "terrain_ao_512.png";
  const ringAoFile = meta.ring?.aoFile || "ring_ao_320.png";

  const texLoader = new THREE.TextureLoader();
  loaderSub.textContent = "Chargement Sentinel-2 L2A (10 m) & cartes d'occlusion topographique…";
  const [demRes, ringRes, rgbTex, maskTex, aoTex, ringAoTex] = await Promise.all([
    fetch(`./data/${demFile}?v=${DATA_VER}`),
    fetch(`./data/${ringFile}?v=${DATA_VER}`).catch(() => null),
    texLoader.loadAsync(`./data/s2_rgb_1536.jpg?v=${DATA_VER}`),
    texLoader.loadAsync(`./data/s2_mask_768.png?v=${DATA_VER}`),
    texLoader.loadAsync(`./data/${aoFile}?v=${DATA_VER}`).catch(() => null),
    texLoader.loadAsync(`./data/${ringAoFile}?v=${DATA_VER}`).catch(() => null),
  ]);
  if (!demRes.ok) throw new Error("Impossible de charger le relief du glacier.");

  const demU16 = new Uint16Array(await demRes.arrayBuffer());
  const ringU16 = ringRes && ringRes.ok ? new Uint16Array(await ringRes.arrayBuffer()) : null;

  return { meta, demU16, ringU16, rgbTex, maskTex, aoTex, ringAoTex };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpAngleDeg(a, b, t) {
  let diff = ((b - a + 540) % 360) - 180;
  return (a + diff * t + 360) % 360;
}

function jenningsRainSnowElevM(taAwsC, rhPct, awsElevM = 2180, lapse = 6.5) {
  const rh = Math.max(20, Math.min(100, rhPct));
  const t50 = 2.6 - 0.019 * rh;
  return awsElevM + ((taAwsC - t50) / lapse) * 1000.0;
}

function estimateLwin(taC, rhPct, cloudFrac) {
  const tk = taC + 273.15;
  const es = 6.1094 * Math.exp((17.625 * taC) / (taC + 243.04));
  const ea = es * (rhPct / 100.0);
  const epsClr = 1.24 * Math.pow(Math.max(ea, 0.5) / tk, 1.0 / 7.0);
  const eps = Math.min(0.99, epsClr * (1.0 + 0.22 * cloudFrac * cloudFrac));
  return eps * 5.670374e-8 * Math.pow(tk, 4);
}

function swClearSkyWm2(hour, dateStr = "2023-08-18") {
  const month = Number((dateStr || "2023-08-18").slice(5, 7)) || 8;
  const peakByMonth = { 1: 230, 2: 340, 3: 520, 4: 690, 5: 840, 6: 900, 7: 870, 8: 800, 9: 640, 10: 450, 11: 280, 12: 205 };
  const halfDayByMonth = { 1: 4.1, 2: 5.0, 3: 6.0, 4: 7.0, 5: 7.9, 6: 8.3, 7: 8.0, 8: 7.2, 9: 6.2, 10: 5.2, 11: 4.3, 12: 3.9 };
  const noon = month >= 4 && month <= 10 ? 13.8 : 12.8;
  const halfD = halfDayByMonth[month] || 7.2;
  const x = (hour - noon) / halfD;
  if (Math.abs(x) >= 1.0) return 0.0;
  return (peakByMonth[month] || 800) * Math.pow(Math.cos(x * Math.PI * 0.5), 1.25);
}

const MONTH_FR = { 1: "janv.", 2: "févr.", 3: "mars", 4: "avr.", 5: "mai", 6: "juin", 7: "juil.", 8: "août", 9: "sept.", 10: "oct.", 11: "nov.", 12: "déc." };

function wmoLabelFr(code) {
  if (code === 0) return "Ciel dégagé";
  if (code === 1) return "Peu nuageux";
  if (code === 2) return "Partiellement nuageux";
  if (code === 3) return "Ciel couvert";
  if (code === 45 || code === 48) return "Brouillard / nuages bas";
  if (code >= 51 && code <= 57) return "Bruine fine";
  if (code >= 61 && code <= 67) return "Pluie en vallée";
  if (code >= 71 && code <= 77) return "Chutes de neige";
  if (code >= 80 && code <= 82) return "Averses de pluie";
  if (code === 85 || code === 86) return "Averses de neige";
  if (code >= 95) return "Orage alpin";
  return "";
}

async function fetchLiveAthabascaEpisode() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.1955&longitude=-117.2555&elevation=2180" +
    "&past_days=1&forecast_days=2" +
    "&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,shortwave_radiation,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,weather_code,wind_speed_10m,wind_direction_10m" +
    "&wind_speed_unit=ms&timezone=America%2FEdmonton";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`API Open-Meteo (${res.status})`);
  const data = await res.json();
  const h = data.hourly;
  const times = h.time;
  const dates = [...new Set(times.map((t) => t.slice(0, 10)))];
  const dayLabels = dates.map((ds) => `${Number(ds.slice(8, 10))} ${MONTH_FR[Number(ds.slice(5, 7))] || ds.slice(5, 7)}`);

  const nowParts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Edmonton",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const pMap = Object.fromEntries(nowParts.map((p) => [p.type, p.value]));
  const nowKey = `${pMap.year}-${pMap.month}-${pMap.day}T${pMap.hour}:00`;
  let nowIdx = times.indexOf(nowKey);
  if (nowIdx < 0) nowIdx = Math.min(times.length - 1, 24);

  const firstMonth = Number(times[0].slice(5, 7)) || 8;
  const meanTa = h.temperature_2m.reduce((a, b) => a + Number(b ?? 0), 0) / Math.max(1, h.temperature_2m.length);
  const isWinterSnow = (firstMonth >= 11 || firstMonth <= 4) && meanTa < 0.0;
  let snowPackMm = isWinterSnow ? 14.0 : 0.0;
  let snowLineM = isWinterSnow ? 1840.0 : 3480.0;
  let rainCumMm = 0.0;

  const hours = times.map((tstr, idx) => {
    const ds = tstr.slice(0, 10);
    const dIdx = dates.indexOf(ds);
    const hr = Number(tstr.slice(11, 13));
    const ta = Number(h.temperature_2m[idx] ?? 0);
    const rh = Number(h.relative_humidity_2m[idx] ?? 70);
    const u = Number(h.wind_speed_10m[idx] ?? 3);
    const wdir = Math.round(Number(h.wind_direction_10m[idx] ?? 245)) % 360;
    const sw = Number(h.shortwave_radiation[idx] ?? 0);
    const cloud = Math.max(0, Math.min(1, Number(h.cloud_cover[idx] ?? 30) / 100));
    const clLow = Math.max(0, Math.min(1, Number(h.cloud_cover_low[idx] ?? 0) / 100));
    const clMid = Math.max(0, Math.min(1, Number(h.cloud_cover_mid[idx] ?? 0) / 100));
    const clHigh = Math.max(0, Math.min(1, Number(h.cloud_cover_high[idx] ?? 0) / 100));
    const wmo = Number(h.weather_code[idx] ?? 0);
    const precip = Number(h.precipitation[idx] ?? 0);
    const snCm = Number(h.snowfall[idx] ?? 0);
    const lw = estimateLwin(ta, rh, cloud);
    const zRs = jenningsRainSnowElevM(ta, rh, 2180, 6.5);
    const snowFrac = Math.max(0, Math.min(1, (3456 - zRs) / (3456 - 1965)));
    const snowAdd = Math.max(precip * snowFrac, snCm * 1.4);
    rainCumMm += Math.max(0, precip - snowAdd);
    const melt = Math.max(0, (ta - 1.0) * 0.14 + Math.max(0, sw - 220) * 0.0018);
    snowPackMm = Math.max(0, Math.min(30, snowPackMm + snowAdd - melt));
    if (snowAdd >= 0.08) {
      const targetLine = Math.max(1840, Math.min(3450, zRs - 60));
      snowLineM = snowPackMm >= 0.35 ? Math.min(snowLineM, targetLine) : (0.55 * snowLineM + 0.45 * targetLine);
    } else if (snowPackMm <= 0.05) {
      snowLineM = 3480.0;
    } else if (melt > 0.05) {
      snowLineM = Math.min(3480.0, snowLineM + melt * 75.0);
    }
    return {
      t: idx, dayIdx: dIdx, date: ds, dayLabel: dayLabels[dIdx], h: hr,
      ta: Number(ta.toFixed(1)), rh: Number(rh.toFixed(0)), u: Number(u.toFixed(1)), wdir,
      sw: Math.round(sw), lw: Math.round(lw),
      cloud: Number(cloud.toFixed(2)), clLow: Number(clLow.toFixed(2)),
      clMid: Number(clMid.toFixed(2)), clHigh: Number(clHigh.toFixed(2)), wmo,
      plume: 0.0, pm25: 0.0, daod: 0.0,
      precip: Number(precip.toFixed(2)), snMm: Number((snCm * 1.4).toFixed(2)),
      rainSnowM: Math.round(zRs), snowLineM: Math.round(snowLineM), snowFrac: Number(snowFrac.toFixed(2)),
      snowPackMm: Number(snowPackMm.toFixed(1)), rainCumMm: Number(rainCumMm.toFixed(1)),
      dryRate: 0.0, wetRate: 0.0, depRate: 0.0, depCum: 0.0, wetFrac: 0.0, deltaAlpha: 0.0,
    };
  });

  const episode = {
    id: "live-now",
    label: "En direct · Athabasca",
    tag: "Météo réelle",
    isLive: true,
    exactNas: false,
    nDays: dates.length,
    dayLabels,
    subtitle: "Météo réelle en direct (Open-Meteo, 2 180 m, heure locale d'Alberta) : nuages bas/moyens/hauts, pluie/neige, vent et solaire.",
    windBearingDeg: hours[nowIdx]?.wdir ?? 245,
    totalDepMgM2: 0.0,
    provenance: "Météo horaire en temps réel Open-Meteo pour le glacier Athabasca (52,1955° N, 117,2555° O, 2 180 m, America/Edmonton).",
    hours,
  };
  return { nowIdx, episode };
}

function sampleSequenceAtStep(ep, tFloat) {
  const maxIdx = ep.hours.length - 1;
  const tc = Math.max(0, Math.min(maxIdx, tFloat));
  const i0 = Math.floor(tc);
  const i1 = Math.min(maxIdx, i0 + 1);
  const f = tc - i0;
  const a = ep.hours[i0];
  const b = ep.hours[i1];
  const hourOfDay = a.h + f;
  const depCum = lerp(a.depCum ?? 0, b.depCum ?? 0, f);
  const totDep = ep.totalDepMgM2 || ep.dailyDepMgM2 || 0;
  const depCumFrac = totDep > 0.05 ? Math.log1p(depCum / 16.0) / Math.log1p(Math.max(totDep, 45.0) / 16.0) : 0.0;

  return {
    t: tc,
    dayIdx: a.dayIdx ?? 0,
    dayLabel: a.dayLabel || a.date || "",
    date: a.date || "",
    hour: hourOfDay >= 24 ? hourOfDay - 24 : hourOfDay,
    depCum,
    depRate: lerp(a.depRate ?? 0, b.depRate ?? 0, f),
    dryRate: lerp(a.dryRate ?? 0, b.dryRate ?? 0, f),
    wetRate: lerp(a.wetRate ?? 0, b.wetRate ?? 0, f),
    depCumFrac,
    deltaAlpha: lerp(a.deltaAlpha ?? 0, b.deltaAlpha ?? 0, f),
    pm25: a.pm25 == null || b.pm25 == null ? null : lerp(a.pm25, b.pm25, f),
    daod: a.daod == null || b.daod == null ? null : lerp(a.daod, b.daod, f),
    sw: lerp(a.sw ?? 0, b.sw ?? 0, f),
    lw: lerp(a.lw ?? 300, b.lw ?? 300, f),
    cloud: lerp(a.cloud ?? 0.2, b.cloud ?? 0.2, f),
    clLow: lerp(a.clLow ?? a.cloud ?? 0.2, b.clLow ?? b.cloud ?? 0.2, f),
    clMid: lerp(a.clMid ?? (a.cloud ?? 0.2) * 0.85, b.clMid ?? (b.cloud ?? 0.2) * 0.85, f),
    clHigh: lerp(a.clHigh ?? (a.cloud ?? 0.2) * 0.6, b.clHigh ?? (b.cloud ?? 0.2) * 0.6, f),
    wmo: a.wmo ?? 0,
    ta: lerp(a.ta ?? 4, b.ta ?? 4, f),
    rh: lerp(a.rh ?? 70, b.rh ?? 70, f),
    u: lerp(a.u ?? 4, b.u ?? 4, f),
    wdir: lerpAngleDeg(a.wdir ?? ep.windBearingDeg ?? 250, b.wdir ?? ep.windBearingDeg ?? 250, f),
    plume: lerp(a.plume ?? 0.3, b.plume ?? 0.3, f),
    precip: lerp(a.precip ?? 0, b.precip ?? 0, f),
    rainSnowM: lerp(a.rainSnowM ?? 2600, b.rainSnowM ?? 2600, f),
    snowLineM: lerp(a.snowLineM ?? a.rainSnowM ?? 2600, b.snowLineM ?? b.rainSnowM ?? 2600, f),
    snowPackMm: lerp(a.snowPackMm ?? a.snowCumMm ?? 0, b.snowPackMm ?? b.snowCumMm ?? 0, f),
    wetFrac: lerp(a.wetFrac ?? 0, b.wetFrac ?? 0, f),
  };
}

function describePhase(epId, s, labMode) {
  if (labMode) return "Laboratoire météo manuel";
  const wmoTxt = wmoLabelFr(s.wmo);
  if (epId === "live-now") return `${wmoTxt || "Météo en direct"} · Nuages ${Math.round(s.cloud * 100)} %`;
  if (s.hour < 6.0 || s.hour >= 21.5) {
    if (s.wetRate >= 2.0) return "Lessivage nocturne intense";
    if (s.precip >= 0.4) return s.rainSnowM < 2350 ? "Neige nocturne" : "Pluie nocturne · neige en altitude";
    if (s.pm25 !== null && s.pm25 >= 50) return `Fumée nocturne (${Math.round(s.pm25)} µg/m³)`;
    return s.cloud > 0.65 ? "Nuit alpine couverte" : "Nuit alpine étoilée";
  }
  if (s.precip >= 0.45) {
    if (s.wetRate >= 1.5) return "Lessivage humide (EC+OM)";
    if (s.rainSnowM <= 2280) return "Neige jusqu'au bas du glacier";
    return `Pluie · Neige > ${Math.round(s.rainSnowM)} m`;
  }
  if (epId === "2024-07-22_29" && s.plume > 0.72) return "Panache illustratif Jasper";
  if (s.pm25 !== null && s.pm25 < 2.0 && (s.daod ?? 0) < 0.02) {
    return s.snowPackMm >= 2.5 ? `${wmoTxt || "Air pur"} · neige fraîche` : `${wmoTxt || "Air alpin limpide"}`;
  }
  if (s.pm25 !== null && s.pm25 >= 80) return `Panache extrême · ${Math.round(s.pm25)} µg/m³`;
  if (s.plume > 0.55) return "Fumée dense · dépôt sec";
  if (s.pm25 !== null && s.pm25 >= 8) return `Brume de feux · ${wmoTxt || "dépôt sec"}`;
  if (s.snowPackMm >= 3 && s.ta > 4.0) return "Fonte de la neige fraîche";
  return wmoTxt || "Évolution météo";
}

function formatHour(h) {
  const hh = Math.floor(h) % 24;
  const mm = Math.floor((h - Math.floor(h)) * 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function fmtFr(val, dec = 1) {
  return val.toFixed(dec).replace(".", ",");
}

const EP_START_T = {
  "2023-08-17_24": 36.5,
  "2023-06-11_18": 33.0,
  "2023-08-26_0902": 132.0,
  "2021-08-12_19": 59.5,
  "2024-07-22_29": 80.5,
  "2018-08-21_28": 83.5,
};

const EP_META_UI = {
  "2023-08-17_24": { dot: "amber", title: "Août 2023 · 17–24", sub: "198,6 mg m⁻² · NAS + Webcam" },
  "2023-06-11_18": { dot: "hot",   title: "Juin 2023 · 11–18", sub: "PM2,5 375 + Blizzard · NAS" },
  "2023-08-26_0902": { dot: "amber", title: "Fin août 2023 · 26–2", sub: "85,4 mg m⁻² · NAS + Webcam" },
  "2021-08-12_19": { dot: "amber", title: "Août 2021 · 12–19", sub: "Record sec · ΔAOD 1,33" },
  "2024-07-22_29": { dot: "hot",   title: "Juil. 2024 · Jasper", sub: "ERA5 réel + 144 webcams" },
  "2018-08-21_28": { dot: "",      title: "Août 2018 · 21–28", sub: "AWS réelle + NAS (143,9 mg)" },
  "live-now":      { dot: "live",  title: "En direct · Athabasca", sub: "Open-Meteo temps réel" },
};

async function boot() {
  try {
    const assets = await loadAllAssets();
    const { meta, demU16, ringU16, rgbTex, maskTex, aoTex, ringAoTex } = assets;

    loaderSub.textContent = "Initialisation de la scène 3D HD…";
    const glacier = new GlacierScene(canvas, meta, demU16, rgbTex, maskTex, aoTex, ringU16, ringAoTex);

    const pins = meta.landmarks.map((lm) => {
      const el = document.createElement("div");
      el.className = "pin-label hud-el";
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

    let currentEpId = "2023-08-17_24";
    if (!meta.episodes[currentEpId]) currentEpId = Object.keys(meta.episodes)[0];
    let currentT = EP_START_T[currentEpId] ?? 12.0;
    let playing = true;
    const speeds = [0.5, 1, 2, 4];
    let speedIdx = 0;
    let showLabels = true;
    let chartMetric = "precip";
    let presentMode = false;

    let labActive = false;
    const lab = { smoke: 0.35, sw: 350, cloud: 0.4, precip: 0.0, ta: 3.5, wind: 5.0 };

    const timeSlider = document.getElementById("timeSlider");
    const histBars = document.getElementById("histBars");
    const dayPillsWrap = document.getElementById("dayPills");
    const clockDate = document.getElementById("clockDate");
    const clockTime = document.getElementById("clockTime");
    const clockPhase = document.getElementById("clockPhase");
    const presentBar = document.getElementById("presentBar");
    const presentClock = document.getElementById("presentClock");
    const presentMeta = document.getElementById("presentMeta");
    const sunDot = document.getElementById("sunDot");
    const kpiSwLw = document.getElementById("kpiSwLw");
    const kpiSmoke = document.getElementById("kpiSmoke");
    const kpiTempIso = document.getElementById("kpiTempIso");
    const kpiPrecip = document.getElementById("kpiPrecip");
    const kpiSnowPack = document.getElementById("kpiSnowPack");
    const kpiDep = document.getElementById("kpiDep");
    const modalProvenance = document.getElementById("modalProvenance");
    const liveTag = document.getElementById("liveTag");

    // Episode Dropdown UI
    const epDropdown = document.getElementById("epDropdown");
    const epTrigger = document.getElementById("epTrigger");
    const epMenu = document.getElementById("epMenu");
    const epTriggerDot = document.getElementById("epTriggerDot");
    const epTriggerTitle = document.getElementById("epTriggerTitle");
    const epTriggerSub = document.getElementById("epTriggerSub");

    epTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const hidden = epMenu.classList.toggle("hidden");
      epTrigger.setAttribute("aria-expanded", hidden ? "false" : "true");
    });
    window.addEventListener("click", (e) => {
      if (!epDropdown.contains(e.target)) {
        epMenu.classList.add("hidden");
        epTrigger.setAttribute("aria-expanded", "false");
      }
    });

    // Massif 35 km Horizon Quick Toggle (synced with chkHorizon in drawer)
    const btnHorizonToggle = document.getElementById("btnHorizonToggle");
    const chkHorizon = document.getElementById("chkHorizon");
    function setHorizonMode(on) {
      glacier.setShowHorizon(on);
      chkHorizon.checked = on;
      btnHorizonToggle.classList.toggle("active-cam", on);
      btnHorizonToggle.setAttribute("aria-pressed", on ? "true" : "false");
    }
    btnHorizonToggle.addEventListener("click", () => setHorizonMode(!glacier.state.showHorizon));
    chkHorizon.addEventListener("change", (e) => setHorizonMode(e.target.checked));

    // Synchronized Skaping Webcam PiP + Drag/Resize + Lightbox
    const webcamCard = document.getElementById("webcamCard");
    const btnWebcamToggle = document.getElementById("btnWebcamToggle");
    const btnWebcamClose = document.getElementById("btnWebcamClose");
    const btnWebcamZoom = document.getElementById("btnWebcamZoom");
    const btnMatchCam = document.getElementById("btnMatchCam");
    const webcamMedia = document.getElementById("webcamMedia");
    const webcamImg = document.getElementById("webcamImg");
    const webcamOverlay = document.getElementById("webcamOverlay");
    const webcamStamp = document.getElementById("webcamStamp");
    const webcamLink = document.getElementById("webcamLink");
    const webcamModal = document.getElementById("webcamModal");
    const webcamModalImg = document.getElementById("webcamModalImg");
    const webcamModalTitle = document.getElementById("webcamModalTitle");
    const webcamModalLink = document.getElementById("webcamModalLink");
    const skapingBase = meta.skapingBase || "https://skaping.s3.gra.io.cloud.ovh.net/pursuit/columbia_icefield";

    let webcamVisible = true;
    let lastCamKey = "";
    let currentCamLargeUrl = "";
    let currentCamSkapingUrl = "https://www.skaping.com/columbiaicefield";
    const camPreloadCache = new Map();

    function buildSkapingUrl(compactRel, sizeDir = "small") {
      if (!compactRel) return "";
      const slash = compactRel.lastIndexOf("/");
      if (slash < 0) return "";
      return `${skapingBase}/${compactRel.slice(0, slash)}/${sizeDir}/${compactRel.slice(slash + 1)}`;
    }
    function skapingArchiveDeepLink(unixTs) {
      if (!unixTs) return "https://www.skaping.com/columbiaicefield";
      return `https://www.skaping.com/columbiaicefield?archives=${btoa(String(unixTs)).replace(/=+$/, "")}`;
    }
    function preloadWebcamUrl(url) {
      if (!url || camPreloadCache.has(url)) return;
      if (camPreloadCache.size > 48) camPreloadCache.delete(camPreloadCache.keys().next().value);
      const im = new Image(); im.src = url; camPreloadCache.set(url, im);
    }

    function updateWebcamForHour(ep, tFloat) {
      if (!webcamVisible) return;
      const idx = Math.max(0, Math.min(ep.hours.length - 1, Math.round(tFloat)));
      const key = `${ep.id}:${idx}`;
      if (key === lastCamKey) return;
      lastCamKey = key;

      const row = ep.hours[idx];
      if (ep.isLive) {
        webcamStamp.textContent = "En direct";
        webcamImg.classList.add("dimmed");
        webcamOverlay.textContent = "Caméra Columbia Icefield en hibernation hivernale (archives 2019–2024 disponibles sur les autres séquences).";
        webcamOverlay.classList.remove("hidden");
        webcamLink.href = "https://www.skaping.com/columbiaicefield";
        currentCamLargeUrl = "";
        return;
      }
      if (!ep.hasWebcam) {
        webcamStamp.textContent = row.dayLabel;
        webcamImg.removeAttribute("src");
        webcamOverlay.textContent = "Archives Skaping disponibles dès juin 2019 (août 2018 antérieur).";
        webcamOverlay.classList.remove("hidden");
        webcamLink.href = "https://www.skaping.com/columbiaicefield";
        currentCamLargeUrl = "";
        return;
      }
      if (row.cam) {
        const smallUrl = buildSkapingUrl(row.cam, "small");
        currentCamLargeUrl = buildSkapingUrl(row.cam, "large");
        currentCamSkapingUrl = skapingArchiveDeepLink(row.camTs);
        webcamStamp.textContent = `${row.dayLabel} · ${String(row.h).padStart(2, "0")}:00`;
        webcamLink.href = currentCamSkapingUrl;
        webcamImg.classList.remove("dimmed");
        webcamOverlay.classList.add("hidden");
        const loaderImg = new Image();
        loaderImg.onload = () => { if (lastCamKey === key) webcamImg.src = smallUrl; };
        loaderImg.src = smallUrl;
        for (let step = 1; step <= 2; step++) {
          const nxt = ep.hours[idx + step];
          if (nxt && nxt.cam) preloadWebcamUrl(buildSkapingUrl(nxt.cam, "small"));
        }
      } else {
        webcamStamp.textContent = `${row.dayLabel} · ${String(row.h).padStart(2, "0")}:00 (Nuit)`;
        webcamImg.classList.add("dimmed");
        webcamOverlay.textContent = "Nuit en montagne · prochaine image dès 05:00 MDT";
        webcamOverlay.classList.remove("hidden");
      }
    }

    function setWebcamVisible(on) {
      webcamVisible = on;
      webcamCard.classList.toggle("hidden", !on);
      btnWebcamToggle.classList.toggle("active-cam", on);
      btnWebcamToggle.setAttribute("aria-pressed", on ? "true" : "false");
      if (on) { lastCamKey = ""; updateWebcamForHour(meta.episodes[currentEpId], currentT); }
    }
    btnWebcamToggle.addEventListener("click", () => setWebcamVisible(!webcamVisible));
    btnWebcamClose.addEventListener("click", () => setWebcamVisible(false));
    btnMatchCam.addEventListener("click", () => {
      document.querySelectorAll(".preset-group .pill-btn").forEach((b) => b.classList.toggle("active", b.dataset.preset === "webcam"));
      glacier.flyTo("webcam");
    });

    function openWebcamModal() {
      if (!currentCamLargeUrl) return;
      webcamModalImg.src = currentCamLargeUrl;
      webcamModalTitle.textContent = `Webcam Columbia Icefield — ${webcamStamp.textContent} MDT`;
      webcamModalLink.href = currentCamSkapingUrl;
      webcamModal.classList.remove("hidden");
    }
    btnWebcamZoom.addEventListener("click", openWebcamModal);
    webcamMedia.addEventListener("click", openWebcamModal);
    document.getElementById("btnCloseWebcamModal").addEventListener("click", () => webcamModal.classList.add("hidden"));
    webcamModal.addEventListener("click", (e) => { if (e.target === webcamModal) webcamModal.classList.add("hidden"); });

    // Draggable & Resizable Webcam PiP
    const webcamDragHandle = document.getElementById("webcamDragHandle");
    const webcamResizeHandle = document.getElementById("webcamResizeHandle");
    let dragState = null, resizeState = null;
    function clampWebcamInViewport() {
      if (!webcamCard.style.left && !webcamCard.style.top) return;
      const rect = webcamCard.getBoundingClientRect();
      const maxX = Math.max(8, window.innerWidth - rect.width - 8);
      const maxY = Math.max(8, window.innerHeight - rect.height - 8);
      webcamCard.style.left = `${Math.max(8, Math.min(maxX, parseFloat(webcamCard.style.left) || rect.left))}px`;
      webcamCard.style.top = `${Math.max(8, Math.min(maxY, parseFloat(webcamCard.style.top) || rect.top))}px`;
    }
    webcamDragHandle.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a")) return;
      e.preventDefault(); e.stopPropagation();
      const rect = webcamCard.getBoundingClientRect();
      webcamCard.style.left = `${rect.left}px`; webcamCard.style.top = `${rect.top}px`;
      webcamCard.style.right = "auto"; webcamCard.style.bottom = "auto";
      webcamCard.classList.add("dragging");
      dragState = { id: e.pointerId, dx: e.clientX - rect.left, dy: e.clientY - rect.top };
      webcamDragHandle.setPointerCapture(e.pointerId);
    });
    webcamDragHandle.addEventListener("pointermove", (e) => {
      if (!dragState || e.pointerId !== dragState.id) return;
      const rect = webcamCard.getBoundingClientRect();
      webcamCard.style.left = `${Math.max(8, Math.min(window.innerWidth - rect.width - 8, e.clientX - dragState.dx))}px`;
      webcamCard.style.top = `${Math.max(8, Math.min(window.innerHeight - rect.height - 8, e.clientY - dragState.dy))}px`;
    });
    const endDrag = (e) => {
      if (!dragState || e.pointerId !== dragState.id) return;
      dragState = null; webcamCard.classList.remove("dragging");
      try { webcamDragHandle.releasePointerCapture(e.pointerId); } catch {}
    };
    webcamDragHandle.addEventListener("pointerup", endDrag);
    webcamDragHandle.addEventListener("pointercancel", endDrag);
    webcamDragHandle.addEventListener("dblclick", (e) => {
      if (e.target.closest("button, a")) return;
      webcamCard.style.left = ""; webcamCard.style.top = ""; webcamCard.style.right = ""; webcamCard.style.bottom = ""; webcamCard.style.width = "";
    });
    webcamResizeHandle.addEventListener("pointerdown", (e) => {
      e.preventDefault(); e.stopPropagation();
      const rect = webcamCard.getBoundingClientRect();
      webcamCard.style.left = `${rect.left}px`; webcamCard.style.top = `${rect.top}px`;
      webcamCard.style.right = "auto"; webcamCard.style.bottom = "auto";
      resizeState = { id: e.pointerId, startX: e.clientX, startW: rect.width };
      webcamResizeHandle.setPointerCapture(e.pointerId);
    });
    webcamResizeHandle.addEventListener("pointermove", (e) => {
      if (!resizeState || e.pointerId !== resizeState.id) return;
      const maxW = Math.min(720, window.innerWidth - (parseFloat(webcamCard.style.left) || 16) - 12);
      webcamCard.style.width = `${Math.round(Math.max(240, Math.min(maxW, resizeState.startW + (e.clientX - resizeState.startX))))}px`;
      clampWebcamInViewport();
    });
    const endResize = (e) => {
      if (!resizeState || e.pointerId !== resizeState.id) return;
      resizeState = null;
      try { webcamResizeHandle.releasePointerCapture(e.pointerId); } catch {}
    };
    webcamResizeHandle.addEventListener("pointerup", endResize);
    webcamResizeHandle.addEventListener("pointercancel", endResize);
    window.addEventListener("resize", clampWebcamInViewport);

    // One-Click Clean WebGL Video Recorder (captures #sceneCanvas cleanly without HUD!)
    const btnRecTop = document.getElementById("btnRecTop");
    const recLabel = document.getElementById("recLabel");
    let recorder = null, recChunks = [], recTimer = null, recSec = 0;

    function stopRecording() {
      if (recorder && recorder.state !== "inactive") recorder.stop();
      if (recTimer) { clearInterval(recTimer); recTimer = null; }
      btnRecTop.classList.remove("recording");
      recLabel.textContent = "Clip";
    }

    function toggleRecording() {
      if (recorder && recorder.state === "recording") { stopRecording(); return; }
      if (!canvas.captureStream || typeof MediaRecorder === "undefined") {
        alert("L'enregistrement vidéo direct n'est pas pris en charge par ce navigateur.");
        return;
      }
      const mimes = ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
      const mimeType = mimes.find((m) => MediaRecorder.isTypeSupported(m)) || "";
      const stream = canvas.captureStream(30);
      recChunks = [];
      recorder = new MediaRecorder(stream, mimeType ? { mimeType, videoBitsPerSecond: 6000000 } : { videoBitsPerSecond: 6000000 });
      recorder.ondataavailable = (ev) => { if (ev.data && ev.data.size > 0) recChunks.push(ev.data); };
      recorder.onstop = () => {
        const ext = mimeType.includes("mp4") ? "mp4" : "webm";
        const blob = new Blob(recChunks, { type: mimeType || "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const ep = meta.episodes[currentEpId];
        const s = sampleSequenceAtStep(ep, currentT);
        a.download = `athabasca_3d_${s.date}_${formatHour(s.hour).replace(":", "h")}.${ext}`;
        a.href = url;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      };
      recorder.start();
      if (!playing) setPlaying(true);
      recSec = 0;
      btnRecTop.classList.add("recording");
      recLabel.textContent = "0s";
      recTimer = setInterval(() => {
        recSec++;
        recLabel.textContent = `${recSec}s`;
        if (recSec >= 20) stopRecording();
      }, 1000);
    }
    btnRecTop.addEventListener("click", toggleRecording);

    // Presentation Mode (H)
    function setPresentationMode(on) {
      presentMode = on;
      document.body.classList.toggle("present-mode", on);
      presentBar.classList.toggle("hidden", !on);
      if (on) {
        epMenu.classList.add("hidden");
        settingsDrawer.classList.add("hidden");
      }
    }
    document.getElementById("btnPresent").addEventListener("click", () => setPresentationMode(!presentMode));
    document.getElementById("btnExitPresent").addEventListener("click", () => setPresentationMode(false));

    // Weather Lab Sliders
    const slLabSmoke = document.getElementById("slLabSmoke");
    const slLabSw = document.getElementById("slLabSw");
    const slLabCloud = document.getElementById("slLabCloud");
    const slLabPrecip = document.getElementById("slLabPrecip");
    const slLabTemp = document.getElementById("slLabTemp");
    const slLabWind = document.getElementById("slLabWind");
    const valLabSmoke = document.getElementById("valLabSmoke");
    const valLabSw = document.getElementById("valLabSw");
    const valLabCloud = document.getElementById("valLabCloud");
    const valLabPrecip = document.getElementById("valLabPrecip");
    const valLabTemp = document.getElementById("valLabTemp");
    const valLabWind = document.getElementById("valLabWind");
    const btnSyncAws = document.getElementById("btnSyncAws");

    let barEls = [], dayPillEls = [], histBinHours = 1;

    function rebuildTimelineChrome() {
      const ep = meta.episodes[currentEpId];
      timeSlider.max = String(ep.hours.length - 1);

      const ui = EP_META_UI[currentEpId] || { dot: "amber", title: ep.label, sub: ep.tag || "" };
      epTriggerDot.className = `ep-dot ${ui.dot}`;
      epTriggerTitle.textContent = ui.title;
      epTriggerSub.textContent = ui.sub;

      dayPillsWrap.innerHTML = "";
      const labels = ep.dayLabels || [];
      if (labels.length > 1) {
        dayPillsWrap.style.display = "grid";
        dayPillsWrap.style.gridTemplateColumns = `repeat(${labels.length}, 1fr)`;
        dayPillEls = labels.map((lbl, dIdx) => {
          const b = document.createElement("button");
          b.className = "day-pill";
          b.textContent = lbl;
          b.addEventListener("click", () => {
            currentT = Math.min(ep.hours.length - 1, dIdx * 24 + 12.0);
            syncTimeUI();
          });
          dayPillsWrap.appendChild(b);
          return b;
        });
      } else {
        dayPillsWrap.style.display = "none";
        dayPillEls = [];
      }

      histBinHours = ep.hours.length > 96 ? 2 : 1;
      const nBins = Math.ceil(ep.hours.length / histBinHours);
      const vals = [];
      for (let b = 0; b < nBins; b++) {
        let acc = 0, cnt = 0;
        for (let k = 0; k < histBinHours; k++) {
          const idx = b * histBinHours + k;
          if (idx < ep.hours.length) {
            const r = ep.hours[idx];
            if (chartMetric === "ta") acc += Math.max(0, (r.ta ?? 0) + 6.0);
            else if (chartMetric === "pm25") acc += r.pm25 != null ? r.pm25 : (r.plume || 0) * 100.0;
            else acc += r[chartMetric] || 0;
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
        let frac;
        if (chartMetric === "depRate") frac = v <= 0.005 ? 0.0 : Math.log1p(v * 4.0) / Math.log1p(maxV * 4.0);
        else if (chartMetric === "pm25") frac = v <= 0.5 ? 0.0 : Math.log1p(v * 0.25) / Math.log1p(maxV * 0.25);
        else if (chartMetric === "precip") frac = v <= 0.02 ? 0.0 : Math.sqrt(v / maxV);
        else frac = v / maxV;
        el.style.height = `${Math.max(6, Math.round(frac * 100))}%`;
        histBars.appendChild(el);
        return el;
      });
      modalProvenance.textContent = ep.provenance || "";
    }

    function updateLegend() {
      const m = glacier.state.mode;
      const ep = meta.episodes[currentEpId];
      const totDep = ep.totalDepMgM2 || ep.dailyDepMgM2 || 30;
      if (m === 0) {
        legendBody.innerHTML = `
          <div class="legend-title">Atmosphère &amp; manteau neigeux</div>
          <div><span style="color:#eab308">■ Fumée 3D</span> (volumétrique) · <span style="color:#e2e8f0">■ Nuages</span> (altitude + ombres) · <span style="color:#5cc8ff">— Pluie/neige</span></div>
        `;
      } else if (m === 1) {
        legendBody.innerHTML = `
          <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
          <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
          <div class="legend-scale"><span>0</span><span>${fmtFr(totDep * 0.5, 0)}</span><span>${fmtFr(totDep, 1)} mg m⁻²</span></div>
        `;
      } else if (m === 2) {
        legendBody.innerHTML = `
          <div class="legend-title">Surface glaciaire (NDSI + albédo)</div>
          <div class="legend-grid">
            <span class="legend-chip"><i style="background:#d6e3f2"></i>Neige / névé</span>
            <span class="legend-chip"><i style="background:#4f9ad8"></i>Glace vive</span>
            <span class="legend-chip"><i style="background:#1fadad"></i>Lac Sunwapta</span>
            <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
          </div>
        `;
      } else {
        legendBody.innerHTML = `
          <div class="legend-title">Maquette géomorphologique</div>
          <div>Relief HD Copernicus GLO-30 (448×448, 1 867 – 3 494 m) + Rocheuses 35 km.</div>
        `;
      }
    }

    function syncSlidersToState(s) {
      slLabSmoke.value = String(Math.round(s.plume * 100));
      valLabSmoke.textContent = `${Math.round(s.plume * 100)} %`;
      slLabSw.value = String(Math.round(s.sw));
      valLabSw.textContent = `${Math.round(s.sw)} W m⁻²`;
      slLabCloud.value = String(Math.round(s.cloud * 100));
      valLabCloud.textContent = `${Math.round(s.cloud * 100)} %`;
      slLabPrecip.value = s.precip.toFixed(1);
      valLabPrecip.textContent = `${fmtFr(s.precip, 1)} mm/h`;
      slLabTemp.value = Math.max(-6, Math.min(18, s.ta)).toFixed(1);
      valLabTemp.textContent = `${fmtFr(s.ta, 1)} °C`;
      slLabWind.value = Math.max(0.5, Math.min(16, s.u)).toFixed(1);
      valLabWind.textContent = `${fmtFr(s.u, 1)} m/s`;
    }

    function syncTimeUI() {
      const ep = meta.episodes[currentEpId];
      const base = sampleSequenceAtStep(ep, currentT);
      const s = { ...base };

      if (labActive) {
        s.plume = lab.smoke;
        s.sw = lab.sw;
        s.cloud = lab.cloud;
        s.clLow = lab.cloud;
        s.clMid = lab.cloud * 0.9;
        s.clHigh = lab.cloud * 0.65;
        s.precip = lab.precip;
        s.ta = lab.ta;
        s.u = lab.wind;
        s.rh = s.precip > 0.2 ? Math.max(90, base.rh) : base.rh;
        s.rainSnowM = jenningsRainSnowElevM(s.ta, s.rh, meta.awsElevM || 2180, meta.lapseCPerKm || 6.5);
        if (s.precip > 0.15) {
          s.cloud = Math.max(s.cloud, 0.72);
          s.clLow = Math.max(s.clLow, 0.72);
          s.clMid = Math.max(s.clMid, 0.78);
        }
        s.lw = 275 + s.cloud * 55;
        s.wetFrac = s.precip > 0.2 ? 0.78 : 0.0;
        if (s.precip > 0.1) {
          const snowFrac = Math.max(0, Math.min(1, (3456 - s.rainSnowM) / (3456 - 1965)));
          s.snowPackMm = Math.max(base.snowPackMm, s.precip * 5.5 * snowFrac);
          s.snowLineM = Math.max(1840, Math.min(s.snowLineM, s.rainSnowM - 50));
        }
      } else {
        syncSlidersToState(s);
      }

      const swClear = swClearSkyWm2(s.hour, s.date);
      const isDay = swClear >= 35.0;
      const sunTrans = isDay ? Math.max(0.05, Math.min(1.0, s.sw / swClear)) : 0.05;
      const maskPct = isDay ? Math.max(0, Math.min(99, Math.round((1.0 - sunTrans) * 100))) : 100;

      glacier.setMeteorology({
        hour: s.hour,
        depCumFrac: s.depCumFrac,
        plumeDensity: s.plume,
        cloudCover: s.cloud,
        cloudLow: s.clLow,
        cloudMid: s.clMid,
        cloudHigh: s.clHigh,
        sunTrans,
        precipMmH: s.precip,
        rainSnowM: s.rainSnowM,
        snowLineM: s.snowLineM,
        snowPackMm: s.snowPackMm,
        windSpeed: s.u,
        windBearingDeg: s.wdir,
        swIn: s.sw,
        lwIn: s.lw,
        wetFrac: s.wetFrac,
        totalDepMgM2: ep.totalDepMgM2 || ep.dailyDepMgM2 || 30,
      });

      const isClean = glacier.state.compareClean;
      timeSlider.value = s.t.toFixed(2);
      clockDate.textContent = s.dayLabel;
      clockTime.textContent = formatHour(s.hour);
      clockPhase.textContent = describePhase(currentEpId, s, labActive);
      presentClock.textContent = `${s.dayLabel} · ${formatHour(s.hour)} MDT`;
      const pmTxt = s.pm25 != null ? `PM2,5 ${fmtFr(s.pm25, s.pm25 >= 10 ? 0 : 1)} µg/m³` : describePhase(currentEpId, s, labActive);
      presentMeta.textContent = isClean ? "Référence propre" : `${pmTxt} · ${fmtFr(s.ta, 1)} °C`;

      if (!isDay) {
        kpiSwLw.textContent = `Nuit · LW ${Math.round(s.lw)}`;
        sunDot.style.backgroundColor = "#475569";
        sunDot.style.boxShadow = "none";
        sunDot.style.opacity = "0.65";
      } else {
        const maskStr = maskPct <= 10 ? "Clair" : `−${maskPct} %`;
        kpiSwLw.textContent = `${Math.round(s.sw)} W/m² · ${maskStr}`;
        if (s.plume > 0.45 && s.cloud < 0.65) {
          sunDot.style.backgroundColor = "#f97316";
          sunDot.style.boxShadow = `0 0 ${Math.round(4 + 6 * sunTrans)}px rgba(249,115,22,0.85)`;
        } else if (maskPct >= 45) {
          sunDot.style.backgroundColor = "#94a3b8";
          sunDot.style.boxShadow = "0 0 4px rgba(148,163,184,0.45)";
        } else {
          sunDot.style.backgroundColor = "#fde047";
          sunDot.style.boxShadow = `0 0 ${Math.round(5 + 7 * sunTrans)}px rgba(253,224,71,0.9)`;
        }
        sunDot.style.opacity = String(Math.max(0.35, 0.35 + 0.65 * sunTrans));
      }

      if (labActive) kpiSmoke.textContent = `Manuel · ${Math.round(s.plume * 100)} %`;
      else if (ep.isLive) kpiSmoke.textContent = `Nuages ${Math.round(s.cloud * 100)} %`;
      else if (s.pm25 === null) kpiSmoke.textContent = `Illust. · ${Math.round(s.plume * 100)} %`;
      else if (s.pm25 < 1.5 && (s.daod ?? 0) < 0.02) kpiSmoke.textContent = `Air pur · ${fmtFr(s.pm25, 1)}`;
      else {
        const aodStr = s.daod && s.daod >= 0.03 ? ` · ${fmtFr(s.daod, 2)}` : "";
        kpiSmoke.textContent = `${fmtFr(s.pm25, s.pm25 >= 10 ? 0 : 1)} µg/m³${aodStr}`;
      }

      kpiTempIso.textContent = `${fmtFr(s.ta, 1)} °C · ${Math.round(s.rainSnowM)} m`;
      if (s.precip < 0.05) kpiPrecip.textContent = "Sec · 0,0 mm/h";
      else if (s.rainSnowM <= 2120) kpiPrecip.textContent = `Neige · ${fmtFr(s.precip, 1)} mm/h`;
      else if (s.rainSnowM >= 3460) kpiPrecip.textContent = `Pluie · ${fmtFr(s.precip, 1)} mm/h`;
      else kpiPrecip.textContent = `Mixte · ${fmtFr(s.precip, 1)} mm/h`;

      kpiSnowPack.textContent = isClean ? "0,0 mm" : `${fmtFr(s.snowPackMm, 1)} mm éq.`;
      if (isClean || ep.isLive) {
        kpiDep.textContent = ep.isLive ? "Météo live (0 feu)" : "0,0 mg m⁻²";
      } else {
        const modeTag = s.depRate < 0.02 ? "0/h" : `+${fmtFr(s.depRate, s.depRate >= 10 ? 0 : 1)} ${s.wetFrac >= 0.5 ? "hum" : "sec"}`;
        kpiDep.textContent = `${fmtFr(s.depCum, s.depCum >= 100 ? 0 : 1)} mg (${modeTag})`;
      }

      const curBin = Math.floor(s.t / histBinHours);
      for (let i = 0; i < barEls.length; i++) {
        barEls[i].classList.toggle("past", i < curBin);
        barEls[i].classList.toggle("current", i === curBin);
      }
      for (let d = 0; d < dayPillEls.length; d++) {
        dayPillEls[d].classList.toggle("active", d === s.dayIdx);
      }
      updateWebcamForHour(ep, currentT);
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

    timeSlider.addEventListener("input", () => { currentT = parseFloat(timeSlider.value); syncTimeUI(); });

    document.querySelectorAll(".ctab").forEach((btn) => {
      btn.addEventListener("click", () => {
        chartMetric = btn.dataset.metric;
        document.querySelectorAll(".ctab").forEach((b) => b.classList.toggle("active", b === btn));
        rebuildTimelineChrome();
        syncTimeUI();
      });
    });

    function activateEpisode(nextId, startT = null) {
      currentEpId = nextId;
      labActive = false;
      btnSyncAws.classList.add("hidden");
      epMenu.classList.add("hidden");
      epTrigger.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".ep-item").forEach((b) => {
        const on = b.dataset.episode === currentEpId;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      currentT = startT != null ? startT : (EP_START_T[currentEpId] ?? 12.0);
      lastCamKey = "";
      rebuildTimelineChrome();
      updateLegend();
      syncTimeUI();
      setPlaying(nextId !== "live-now");
    }

    document.querySelectorAll(".ep-item").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const nextId = btn.dataset.episode;
        if (nextId === "live-now") {
          liveTag.textContent = "Chargement…";
          try {
            const { nowIdx, episode } = await fetchLiveAthabascaEpisode();
            meta.episodes["live-now"] = episode;
            const curH = episode.hours[nowIdx];
            liveTag.textContent = `${fmtFr(curH.ta, 0)} °C · ${Math.round(curH.cloud * 100)} %`;
            EP_META_UI["live-now"].sub = `${fmtFr(curH.ta, 0)} °C · nuages ${Math.round(curH.cloud * 100)} %`;
            activateEpisode("live-now", nowIdx);
          } catch (e) {
            console.error("Live weather fetch failed:", e);
            liveTag.textContent = "Indisponible";
          }
          return;
        }
        if (!meta.episodes[nextId]) return;
        activateEpisode(nextId);
      });
    });

    // Live Weather Lab overrides
    function enterLab() {
      if (!labActive) {
        const s = sampleSequenceAtStep(meta.episodes[currentEpId], currentT);
        lab.smoke = s.plume; lab.sw = s.sw; lab.cloud = s.cloud; lab.precip = s.precip; lab.ta = s.ta; lab.wind = s.u;
        labActive = true;
        btnSyncAws.classList.remove("hidden");
      }
    }
    slLabSmoke.addEventListener("input", () => { enterLab(); lab.smoke = parseFloat(slLabSmoke.value) / 100; valLabSmoke.textContent = `${Math.round(lab.smoke * 100)} %`; syncTimeUI(); });
    slLabSw.addEventListener("input", () => { enterLab(); lab.sw = parseFloat(slLabSw.value); valLabSw.textContent = `${Math.round(lab.sw)} W m⁻²`; syncTimeUI(); });
    slLabCloud.addEventListener("input", () => { enterLab(); lab.cloud = parseFloat(slLabCloud.value) / 100; valLabCloud.textContent = `${Math.round(lab.cloud * 100)} %`; syncTimeUI(); });
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
      if (e.key === "h" || e.key === "H") setPresentationMode(!presentMode);
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
    function setSurfaceMode(modeNum) {
      modeBtns.forEach((b) => b.classList.toggle("active", Number(b.dataset.mode) === modeNum));
      glacier.setMode(modeNum);
      updateLegend();
    }
    modeBtns.forEach((btn) => btn.addEventListener("click", () => setSurfaceMode(Number(btn.dataset.mode))));

    const slExag = document.getElementById("slExag"), valExag = document.getElementById("valExag");
    slExag.addEventListener("input", () => { const v = parseFloat(slExag.value); valExag.textContent = `${fmtFr(v, 2)}×`; glacier.setExaggeration(v); });
    const slBoost = document.getElementById("slBoost"), valBoost = document.getElementById("valBoost");
    slBoost.addEventListener("input", () => { const v = parseFloat(slBoost.value); valBoost.textContent = `${fmtFr(v, 1)}×`; glacier.setBoost(v); });

    document.getElementById("chkClouds").addEventListener("change", (e) => glacier.setShowClouds(e.target.checked));
    document.getElementById("chkSmoke").addEventListener("change", (e) => glacier.setShowSmoke(e.target.checked));
    document.getElementById("chkPrecip").addEventListener("change", (e) => glacier.setShowPrecip(e.target.checked));
    document.getElementById("chkSunArc").addEventListener("change", (e) => glacier.setShowSunArc(e.target.checked));
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
      presetBtns.forEach((b) => b.classList.toggle("active", b.dataset.preset === "block"));
      slExag.value = "1.30"; valExag.textContent = "1,30×"; glacier.setExaggeration(1.30);
      slBoost.value = "1.4"; valBoost.textContent = "1,4×"; glacier.setBoost(1.4);
      glacier.state.spin = false; document.getElementById("chkSpin").checked = false;
      setSurfaceMode(0);
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
    loader.classList.add("done");

    let lastNow = performance.now();
    function animate(now) {
      requestAnimationFrame(animate);
      const dt = Math.min((now - lastNow) / 1000, 0.05);
      lastNow = now;

      if (playing) {
        const ep = meta.episodes[currentEpId];
        currentT += dt * 1.5 * speeds[speedIdx];
        if (currentT > ep.hours.length - 1) currentT = 0.0;
        syncTimeUI();
      }

      glacier.update(dt);

      const deg = glacier.getNorthAngleDeg();
      compassSvg.style.transform = `rotate(${deg.toFixed(1)}deg)`;
      const rad = (deg * Math.PI) / 180;
      compassN.style.left = `${(18 + 12 * Math.sin(rad) - 4).toFixed(1)}px`;
      compassN.style.top = `${(18 - 12 * Math.cos(rad) - 6).toFixed(1)}px`;

      if (showLabels && !presentMode) {
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
  } catch (err) {
    console.error("Athabasca 3D v2 boot error:", err);
    loaderSub.textContent = "Erreur d'initialisation : " + (err?.message || String(err));
  }
}

boot();
