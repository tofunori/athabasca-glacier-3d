import "./style.css";
import * as THREE from "three";
import { GlacierScene } from "./glacierScene.js";

const DATA_VER = "v7_clouds_sun_precip_20261125";
const loader = document.getElementById("loader");
const loaderSub = document.getElementById("loaderSub");
const canvas = document.getElementById("sceneCanvas");
const labelsLayer = document.getElementById("labelsLayer");
const compassSvg = document.getElementById("compassSvg");
const compassN = document.getElementById("compassN");
const legendBody = document.getElementById("legendBody");

async function loadAllAssets() {
  loaderSub.textContent = "Chargement du MNE Copernicus GLO-30 (320 × 320) et des séquences horaires…";
  const [metaRes, demRes] = await Promise.all([
    fetch(`./data/meta.json?v=${DATA_VER}`, { cache: "no-store" }),
    fetch(`./data/dem_320.bin?v=${DATA_VER}`),
  ]);
  if (!metaRes.ok || !demRes.ok) throw new Error("Impossible de charger les données du glacier.");

  const meta = await metaRes.json();
  const demU16 = new Uint16Array(await demRes.arrayBuffer());

  loaderSub.textContent = "Chargement de l'imagerie Sentinel-2 L2A (10 m)…";
  const texLoader = new THREE.TextureLoader();
  const [rgbTex, maskTex] = await Promise.all([
    texLoader.loadAsync(`./data/s2_rgb_1536.jpg?v=${DATA_VER}`),
    texLoader.loadAsync(`./data/s2_mask_768.png?v=${DATA_VER}`),
  ]);

  return { meta, demU16, rgbTex, maskTex };
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
  // Approximate clear-sky solar irradiance at Athabasca Glacier (52.2° N, 2,180 m) by day-of-year & local hour
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

  // Locate current local Alberta hour inside the 72h series
  const nowParts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Edmonton",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const pMap = Object.fromEntries(nowParts.map((p) => [p.type, p.value]));
  const nowKey = `${pMap.year}-${pMap.month}-${pMap.day}T${pMap.hour}:00`;
  let nowIdx = times.indexOf(nowKey);
  if (nowIdx < 0) nowIdx = Math.min(times.length - 1, 24);

  let snowPackMm = 0.0;
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
    return {
      t: idx, dayIdx: dIdx, date: ds, dayLabel: dayLabels[dIdx], h: hr,
      ta: Number(ta.toFixed(1)), rh: Number(rh.toFixed(0)), u: Number(u.toFixed(1)), wdir,
      sw: Math.round(sw), lw: Math.round(lw),
      cloud: Number(cloud.toFixed(2)), clLow: Number(clLow.toFixed(2)),
      clMid: Number(clMid.toFixed(2)), clHigh: Number(clHigh.toFixed(2)), wmo,
      plume: 0.0, pm25: 0.0, daod: 0.0,
      precip: Number(precip.toFixed(2)), snMm: Number((snCm * 1.4).toFixed(2)),
      rainSnowM: Math.round(zRs), snowFrac: Number(snowFrac.toFixed(2)),
      snowPackMm: Number(snowPackMm.toFixed(1)), rainCumMm: Number(rainCumMm.toFixed(1)),
      dryRate: 0.0, wetRate: 0.0, depRate: 0.0, depCum: 0.0, wetFrac: 0.0, deltaAlpha: 0.0,
    };
  });

  return {
    nowIdx,
    episode: {
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
      provenance: "Météo horaire en temps réel Open-Meteo pour le glacier Athabasca (52,1955° N, 117,2555° O, 2 180 m, America/Edmonton) : nuages 3 niveaux (bas, moyens, hauts), précipitations pluie/neige, rayonnement solaire SW↓, vent et code météo WMO (hier → demain).",
      hours,
    },
  };
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
  // Perceptual log-scaled soot accumulation so 10-30 mg m-2 dry deposits are clearly visible on the glacier surface!
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
    snowPackMm: lerp(a.snowPackMm ?? a.snowCumMm ?? 0, b.snowPackMm ?? b.snowCumMm ?? 0, f),
    wetFrac: lerp(a.wetFrac ?? 0, b.wetFrac ?? 0, f),
  };
}

function describePhase(epId, s, labMode) {
  if (labMode) return "Laboratoire météo manuel";
  const wmoTxt = wmoLabelFr(s.wmo);
  if (epId === "live-now") {
    const clPct = Math.round(s.cloud * 100);
    return `${wmoTxt || "Météo en direct"} · Nuages ${clPct} %`;
  }
  if (s.hour < 6.0 || s.hour >= 21.5) {
    if (s.wetRate >= 2.0) return "Lessivage nocturne intense de la fumée";
    if (s.precip >= 0.4) return s.rainSnowM < 2350 ? "Neige nocturne sur le glacier" : "Pluie nocturne · neige en altitude";
    if (s.pm25 !== null && s.pm25 >= 50) return `Fumée nocturne dense (${Math.round(s.pm25)} µg m⁻³)`;
    return s.cloud > 0.65 ? "Nuit alpine couverte" : "Nuit alpine · ciel étoilé";
  }
  if (s.precip >= 0.45) {
    if (s.wetRate >= 1.5) return "Lessivage humide (EC+OM) sous précipitations";
    if (s.rainSnowM <= 2280) return "Chute de neige jusqu'au bas du glacier";
    return `Pluie en vallée · Neige > ${Math.round(s.rainSnowM)} m`;
  }
  if (epId === "2024-07-22_29" && s.plume > 0.72) return "Panache illustratif du mégafeu de Jasper";
  if (s.pm25 !== null && s.pm25 < 2.0 && (s.daod ?? 0) < 0.02) {
    return s.snowPackMm >= 2.5 ? `${wmoTxt || "Air alpin pur"} · neige fraîche` : `${wmoTxt || "Air alpin limpide"} (0 dépôt)`;
  }
  if (s.pm25 !== null && s.pm25 >= 80) return `Panache extrême · PM2,5 = ${Math.round(s.pm25)} µg m⁻³`;
  if (s.plume > 0.55) return "Fumée dense · dépôt sec actif";
  if (s.pm25 !== null && s.pm25 >= 8) return `Brume de feux · ${wmoTxt || "dépôt sec"}`;
  if (s.snowPackMm >= 3 && s.ta > 4.0) return "Fonte progressive de la neige fraîche";
  return wmoTxt ? `${wmoTxt} · nuages ${Math.round(s.cloud * 100)} %` : "Évolution météorologique en vallée";
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
  "2023-08-17_24": 36.5,    // 18 août 2023 12h30 MDT : orage pluie/neige + lessivage humide (19 août pur -> 20 août retour fumée!)
  "2023-06-11_18": 33.0,    // 12 juin 2023 09h00 MDT : panache extrême 375 µg m-3, ΔAOD 1,05
  "2023-08-26_0902": 132.0, // 31 août 2023 12h00 MDT : pluie de lessivage 42 mg m-2
  "2021-08-12_19": 59.5,    // 14 août 2021 11h30 MDT : record dépôt sec (PM2,5 166, ΔAOD 1,25)
  "2024-07-22_29": 80.5,    // 25 juil. 2024 08h30 MDT : Jasper ERA5 + front pluie/neige
  "2018-08-21_28": 83.5,    // 24 août 2018 11h30 MDT : AWS + NAS tempête pluie/neige & lessivage
};

async function boot() {
  try {
    const assets = await loadAllAssets();
    const { meta, demU16, rgbTex, maskTex } = assets;
    loaderSub.textContent = "Initialisation de la scène 3D…";
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

    // Safe default episode selection (exact NAS Aug 17-24, 2023 sequence!)
    let currentEpId = "2023-08-17_24";
    if (!meta.episodes[currentEpId]) {
      currentEpId = Object.keys(meta.episodes)[0];
    }
    let currentT = EP_START_T[currentEpId] ?? 12.0;
    let playing = true;
    const speeds = [0.5, 1, 2, 4];
    let speedIdx = 0; // 0.5x immersive pace by default
    let showLabels = true;
    let chartMetric = "precip";

    let labActive = false;
    const lab = { smoke: 0.5, sw: 350, cloud: 0.4, precip: 0.0, ta: 3.5, wind: 5.0 };

    const timeSlider = document.getElementById("timeSlider");
    const histBars = document.getElementById("histBars");
    const dayPillsWrap = document.getElementById("dayPills");
    const clockDate = document.getElementById("clockDate");
    const clockTime = document.getElementById("clockTime");
    const clockPhase = document.getElementById("clockPhase");
    const sunDot = document.getElementById("sunDot");
    const kpiSwLw = document.getElementById("kpiSwLw");
    const kpiSmoke = document.getElementById("kpiSmoke");
    const kpiTempIso = document.getElementById("kpiTempIso");
    const kpiPrecip = document.getElementById("kpiPrecip");
    const kpiSnowPack = document.getElementById("kpiSnowPack");
    const kpiDep = document.getElementById("kpiDep");
    const modalProvenance = document.getElementById("modalProvenance");
    const liveTag = document.getElementById("liveTag");

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

    let barEls = [];
    let dayPillEls = [];
    let histBinHours = 1;

    function rebuildTimelineChrome() {
      const ep = meta.episodes[currentEpId];
      timeSlider.max = String(ep.hours.length - 1);

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
            if (chartMetric === "ta") acc += Math.max(0, (r.ta ?? 0) + 4.0);
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
        if (chartMetric === "depRate") {
          // Perceptual log scale so 0.1-5 mg/h dry & moderate peaks remain clearly visible beside 48 mg/h storm spikes!
          frac = v <= 0.005 ? 0.0 : Math.log1p(v * 4.0) / Math.log1p(maxV * 4.0);
        } else if (chartMetric === "pm25") {
          frac = v <= 0.5 ? 0.0 : Math.log1p(v * 0.25) / Math.log1p(maxV * 0.25);
        } else if (chartMetric === "precip") {
          frac = v <= 0.02 ? 0.0 : Math.sqrt(v / maxV);
        } else {
          frac = v / maxV;
        }
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
          <div>Clique sur <strong>Sur le glacier</strong> pour te placer à la station AWS · <span style="color:#5cc8ff">ligne cyan</span> = isotherme pluie/neige (pluie en bas, neige fraîche en haut).</div>
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
            <span class="legend-chip"><i style="background:#1fadad"></i>Lac proglaciaire</span>
            <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
          </div>
        `;
      } else {
        legendBody.innerHTML = `
          <div class="legend-title">Maquette géomorphologique</div>
          <div>Relief pur Copernicus GLO-30 (1 867 – 3 494 m) avec cycle solaire réel sur 8 jours.</div>
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
      slLabTemp.value = Math.max(-4, Math.min(16, s.ta)).toFixed(1);
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
        if (s.precip > 0.2) {
          const snowFrac = Math.max(0, Math.min(1, (3456 - s.rainSnowM) / (3456 - 1965)));
          s.snowPackMm = Math.max(base.snowPackMm, s.precip * 4.5 * snowFrac);
        }
      } else {
        syncSlidersToState(s);
      }

      // Compute real solar transmission & masking % relative to Athabasca clear-sky curve
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
        snowPackMm: s.snowPackMm,
        windSpeed: s.u,
        windBearingDeg: s.wdir,
        swIn: s.sw,
        lwIn: s.lw,
        wetFrac: s.wetFrac,
        totalDepMgM2: ep.totalDepMgM2 || ep.dailyDepMgM2 || 30,
      });

      timeSlider.value = s.t.toFixed(2);
      clockDate.textContent = s.dayLabel;
      clockTime.textContent = formatHour(s.hour);
      clockPhase.textContent = describePhase(currentEpId, s, labActive);

      const isClean = glacier.state.compareClean;
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

      if (labActive) {
        kpiSmoke.textContent = `Manuel · ${Math.round(s.plume * 100)} %`;
      } else if (ep.isLive) {
        kpiSmoke.textContent = `Nuages ${Math.round(s.cloud * 100)} %`;
      } else if (s.pm25 === null) {
        kpiSmoke.textContent = `Illust. · ${Math.round(s.plume * 100)} %`;
      } else if (s.pm25 < 1.5 && (s.daod ?? 0) < 0.02) {
        kpiSmoke.textContent = `Air pur · ${fmtFr(s.pm25, 1)}`;
      } else {
        const aodStr = s.daod && s.daod >= 0.03 ? ` · ${fmtFr(s.daod, 2)}` : "";
        kpiSmoke.textContent = `${fmtFr(s.pm25, s.pm25 >= 10 ? 0 : 1)} µg/m³${aodStr}`;
      }
      kpiTempIso.textContent = `${fmtFr(s.ta, 1)} °C · ${Math.round(s.rainSnowM)} m`;
      if (s.precip < 0.05) {
        kpiPrecip.textContent = "Sec · 0,0 mm/h";
      } else if (s.rainSnowM <= 2120) {
        kpiPrecip.textContent = `Neige · ${fmtFr(s.precip, 1)} mm/h`;
      } else if (s.rainSnowM >= 3460) {
        kpiPrecip.textContent = `Pluie · ${fmtFr(s.precip, 1)} mm/h`;
      } else {
        kpiPrecip.textContent = `Mixte · ${fmtFr(s.precip, 1)} mm/h`;
      }
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

    function activateEpisode(nextId, startT = null) {
      currentEpId = nextId;
      labActive = false;
      btnSyncAws.classList.add("hidden");
      document.querySelectorAll(".ep-btn").forEach((b) => {
        const on = b.dataset.episode === currentEpId;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      currentT = startT != null ? startT : (EP_START_T[currentEpId] ?? 12.0);
      rebuildTimelineChrome();
      updateLegend();
      syncTimeUI();
      setPlaying(nextId !== "live-now");
    }

    document.querySelectorAll(".ep-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const nextId = btn.dataset.episode;
        if (nextId === "live-now") {
          liveTag.textContent = "Chargement…";
          try {
            const { nowIdx, episode } = await fetchLiveAthabascaEpisode();
            meta.episodes["live-now"] = episode;
            const curH = episode.hours[nowIdx];
            liveTag.textContent = `${fmtFr(curH.ta, 0)} °C · ${Math.round(curH.cloud * 100)} %`;
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
  } catch (err) {
    console.error("Athabasca 3D boot error:", err);
    loaderSub.textContent = "Erreur d'initialisation : " + (err?.message || String(err));
  }
}

boot();
