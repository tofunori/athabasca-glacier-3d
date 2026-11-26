import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Three.js 3D Photorealistic Glacier & Multi-Day Alpine Atmosphere Simulator (v2):
 * - HDR linear-space Rayleigh + Mie Sky Dome with seamless volumetric horizon smoke band & alpine stars
 * - 448x448 real Copernicus GLO-30 DEM (~24.6 m) + 16-azimuth Horizon Sky-View Ambient Occlusion,
 *   procedural world-space micro-normals (limestone strata, glacial ogives/crevasses, wind sastrugi, lake waves),
 *   glacial ice subsurface scattering (SSS), aspect-aware snow accumulation/meltback, and animated Lac Sunwapta
 * - Seamless 35x35 km surrounding Canadian Rockies (320x320 GLO-30 + 16-azimuth SVF AO)
 * - True 8-step 3D Volumetric Ray-Marched Wildfire Smoke (Beer-Lambert + Henyey-Greenstein Mie forward glow, ZERO flat sheets!)
 * - 96-puff multi-lobe 3D volumetric cumulus/nimbus clouds with peak-wrapping soft terrain fade & projected ground shadows
 * - Multi-scale realistic rain & snow (virga curtains, near-field velocity streaks, fluttering snowflakes, mist & spindrift)
 */
export class GlacierScene {
  constructor(canvas, meta, demU16, rgbTex, maskTex, aoTex = null, ringU16 = null, ringAoTex = null) {
    this.canvas = canvas;
    this.meta = meta;
    this.G = meta.grid;
    this.sizeX = meta.sizeX;
    this.sizeY = meta.sizeY;
    this.zRangeKm = (meta.zMaxM - meta.zMinM) / 1000.0;
    this.skirtDepth = 0.78;

    this.demZ = new Float32Array(this.G * this.G);
    const demRgba = new Uint8Array(this.G * this.G * 4);
    for (let i = 0; i < this.demZ.length; i++) {
      const norm = demU16[i] / 65535.0;
      this.demZ[i] = norm * this.zRangeKm;
      const b = Math.max(0, Math.min(255, Math.round(norm * 255.0)));
      demRgba[i * 4 + 0] = b;
      demRgba[i * 4 + 1] = b;
      demRgba[i * 4 + 2] = b;
      demRgba[i * 4 + 3] = 255;
    }
    this.demTex = new THREE.DataTexture(demRgba, this.G, this.G, THREE.RGBAFormat, THREE.UnsignedByteType);
    this.demTex.minFilter = THREE.LinearFilter;
    this.demTex.magFilter = THREE.LinearFilter;
    this.demTex.wrapS = THREE.ClampToEdgeWrapping;
    this.demTex.wrapT = THREE.ClampToEdgeWrapping;
    this.demTex.flipY = false;
    this.demTex.needsUpdate = true;

    const makeNeutralAo = () => {
      const t = new THREE.DataTexture(new Uint8Array([235, 128, 128, 255]), 1, 1, THREE.RGBAFormat);
      t.colorSpace = THREE.NoColorSpace;
      t.needsUpdate = true;
      return t;
    };
    this.aoTex = aoTex || makeNeutralAo();
    this.aoTex.colorSpace = THREE.NoColorSpace;
    this.aoTex.wrapS = THREE.ClampToEdgeWrapping;
    this.aoTex.wrapT = THREE.ClampToEdgeWrapping;

    this.ringAoTex = ringAoTex || makeNeutralAo();
    this.ringAoTex.colorSpace = THREE.NoColorSpace;
    this.ringAoTex.wrapS = THREE.ClampToEdgeWrapping;
    this.ringAoTex.wrapT = THREE.ClampToEdgeWrapping;

    this.state = {
      exag: 1.3,
      mode: 0,
      contours: false,
      showSmoke: true,
      showClouds: true,
      showPrecip: true,
      showIsotherm: true,
      showSunArc: true,
      showHorizon: false,
      shadows: true,
      spin: false,
      boost: 1.4,
      compareClean: false,
      hour: 13.0,
      depProgress: 0.0,
      plumeDensity: 0.4,
      cloudCover: 0.4,
      cloudLow: 0.3,
      cloudMid: 0.3,
      cloudHigh: 0.25,
      sunTrans: 0.85,
      precipMmH: 0.0,
      rainSnowM: 2600.0,
      snowLineM: 3480.0,
      snowPackMm: 0.0,
      windSpeed: 5.0,
      windBearingDeg: 245,
      swIn: 350.0,
      lwIn: 315.0,
      wetFrac: 0.0,
      totalDepMgM2: 36.8,
    };

    this._sunDir = new THREE.Vector3(0.3, 0.7, 0.6).normalize();

    this._initRenderer();
    this._initSkyDomeAndLighting();
    this._buildSolarOrbAndArc();
    this._buildTerrain(rgbTex, maskTex);
    this._buildSurroundingRockies(ringU16);
    this._buildCloudDeck();
    this._buildPrecipVolume();
    this._buildValleyMistAndSpindrift();
    this._buildRealisticNearRain();
    this._buildRealisticSnow();
    this._initCameraPresets();
    this.resize();
  }

  _sampleDemNormalized(u, v) {
    const col = Math.max(0, Math.min(this.G - 1, Math.round(u * (this.G - 1))));
    const row = Math.max(0, Math.min(this.G - 1, Math.round(v * (this.G - 1))));
    return this.demZ[row * this.G + col];
  }

  _sampleDemXZ(x, z) {
    const u = Math.max(0, Math.min(1, x / this.sizeX + 0.5));
    const v = Math.max(0, Math.min(1, z / this.sizeY + 0.5));
    return this._sampleDemNormalized(u, v);
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    // Unified physical Rayleigh + 3D volumetric ray-marched smoke handles aerial perspective directly in linear radiance space!
    this.scene.fog = null;

    this.camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.04, 260);
    this.camera.position.set(9.4, 8.5, -10.3);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.065;
    this.controls.minDistance = 0.45;
    this.controls.maxDistance = 30.0;
    this.controls.maxPolarAngle = Math.PI * 0.495;
    this.controls.target.set(0.0, 0.55, 0.15);
    this.controls.update();

    this._camAnim = null;
  }

  _initSkyDomeAndLighting() {
    // HDR Linear-Space Physical Rayleigh + Mie Sky Dome (exact ACESFilmic + sRGB parity with terrain & 35 km Rockies!)
    this.skyUniforms = {
      uSunDir: { value: this._sunDir.clone() },
      uTime: { value: 0.0 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uDaylight: { value: 0.8 },
      uTwilight: { value: 0.0 },
      uSmoke: { value: 0.3 },
      uCloud: { value: 0.3 },
      uCloudMid: { value: 0.3 },
      uCloudHigh: { value: 0.25 },
      uShowClouds: { value: 1.0 },
      uSwNorm: { value: 0.6 },
    };

    const skyGeo = new THREE.SphereGeometry(145, 56, 36);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSmoke;
        uniform float uCloud;
        uniform float uCloudMid;
        uniform float uCloudHigh;
        uniform float uShowClouds;
        uniform float uSwNorm;
        varying vec3 vDir;

        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }
        float hash21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float snoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float sfbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * snoise(p); p = p * 2.04 + vec2(5.2, 1.3); a *= 0.5; }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.25, 1.0);
          float horiz = pow(1.0 - max(h, 0.0), 3.4);
          float lowBand = pow(1.0 - max(h, 0.0), 7.5);
          vec3 sDir = normalize(uSunDir);
          float sunDot = max(dot(d, sDir), 0.0);

          // Linear-space alpine midnight sky (rich deep cobalt, never flat black)
          vec3 nightZen = vec3(0.0014, 0.0032, 0.0110);
          vec3 nightHor = vec3(0.0065, 0.0135, 0.0320);
          vec3 skyNight = mix(nightZen, nightHor, horiz);

          // Linear-space high-altitude Rocky Mountain Rayleigh sky (deep cobalt zenith -> crisp luminous azure horizon!)
          vec3 clearZen = vec3(0.022, 0.135, 0.500);
          vec3 clearHor = vec3(0.320, 0.530, 0.800);
          vec3 skyClear = mix(clearZen, clearHor, horiz);

          // Bright daylight overcast storm sky (linear space)
          vec3 stormZen = vec3(0.115, 0.155, 0.215);
          vec3 stormHor = vec3(0.300, 0.360, 0.440);
          vec3 skyStorm = mix(stormZen, stormHor, horiz);

          // Wildfire smoke linear sky + Henyey-Greenstein Mie forward sun-glow
          float g = 0.62;
          float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * dot(d, sDir)), 1.5);
          float mieGlow = clamp((hg - 0.32) * 0.22, 0.0, 0.72);
          vec3 smokeZen = vec3(0.145, 0.120, 0.095);
          vec3 smokeHor = mix(vec3(0.420, 0.395, 0.355), vec3(0.760, 0.480, 0.220), clamp(0.28 + 0.58 * mieGlow + 0.32 * uSmoke, 0.0, 1.0));
          vec3 skySmoke = mix(smokeZen, smokeHor, pow(1.0 - max(h, 0.0), 2.1));

          vec3 daySky = mix(skyClear, skyStorm, clamp(uCloud * 0.78, 0.0, 1.0));
          daySky = mix(daySky, skySmoke, clamp(uSmoke * 0.76, 0.0, 1.0));
          // Dense trapped alpine horizon smoke veil matching the 35 km Rockies outer rim identically!
          vec3 veilCol = mix(vec3(0.39, 0.38, 0.36), vec3(0.70, 0.45, 0.21), clamp(0.26 + 0.55 * mieGlow + 0.36 * uSmoke, 0.0, 1.0));
          daySky = mix(daySky, veilCol, lowBand * clamp(uSmoke * 0.88, 0.0, 0.85));

          // Golden / alpenglow rose sunrise & sunset horizon band
          vec3 twilightBand = mix(vec3(0.95, 0.22, 0.05), vec3(1.15, 0.62, 0.14), pow(sunDot, 2.0));
          daySky = mix(daySky, twilightBand, uTwilight * horiz * (0.48 + 0.52 * pow(sunDot, 1.5)) * (1.0 - uCloud * 0.42));

          vec3 col = mix(skyNight, daySky, uDaylight);

          // Real projected hemispherical HIGH CIRRUS (uCloudHigh) & mid ALTOSTRATUS (uCloudMid) across the sky dome!
          if (uShowClouds > 0.5 && h > 0.02 && (uCloudHigh > 0.05 || uCloudMid > 0.05)) {
            vec2 skyPlane = d.xz / (h + 0.13);
            float horizonFade = smoothstep(0.02, 0.22, h);
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);

            if (uCloudHigh > 0.05) {
              vec2 cUv = vec2(dot(skyPlane, uWindDir) * 0.36 - uTime * 0.011, dot(skyPlane, wPerp) * 1.18);
              float w1 = sfbm(cUv * 1.45 + vec2(2.3, 7.1));
              float cirrus = smoothstep(0.68 - uCloudHigh * 0.36, 0.88, sfbm(cUv + 0.68 * w1));
              float cAlpha = cirrus * horizonFade * clamp(uCloudHigh * 0.78, 0.0, 0.68);
              vec3 cDay = mix(vec3(0.76, 0.83, 0.94), vec3(1.15, 0.48, 0.20), uTwilight * 0.78);
              cDay = mix(cDay, vec3(0.62, 0.44, 0.28), uSmoke * 0.42);
              vec3 cNight = vec3(0.012, 0.020, 0.042);
              vec3 cCol = mix(cNight, cDay, uDaylight) + vec3(0.42, 0.32, 0.18) * pow(sunDot, 10.0) * uDaylight;
              col = mix(col, cCol, cAlpha);
            }

            if (uCloudMid > 0.06) {
              vec2 mUv = skyPlane * 0.46 - uWindDir * uTime * 0.016 + vec2(4.7, 9.2);
              float warp = sfbm(mUv * 1.2 + vec2(1.4, 3.8));
              float midN = sfbm(mUv + 0.55 * warp);
              float midMask = smoothstep(0.66 - uCloudMid * 0.44, 0.86, midN);
              float mAlpha = midMask * horizonFade * clamp(uCloudMid * 0.84, 0.0, 0.80);
              vec3 mDark = mix(vec3(0.09, 0.12, 0.18), vec3(0.05, 0.07, 0.11), uCloud * 0.6);
              vec3 mLit = mix(vec3(0.70, 0.78, 0.88), vec3(1.05, 0.46, 0.16), uTwilight * 0.68);
              vec3 mDay = mix(mDark, mLit, clamp(0.22 + 0.56 * (1.0 - midMask) + 0.38 * pow(sunDot, 3.0), 0.0, 1.0));
              vec3 mCol = mix(vec3(0.008, 0.014, 0.028), mDay, uDaylight);
              col = mix(col, mCol, mAlpha);
            }
          }

          // Smooth below-horizon reflection (harmonizes with Bloc 3D diorama & 35 km rim)
          if (h < 0.0) {
            vec3 belowCol = mix(vec3(0.003, 0.006, 0.016), mix(vec3(0.09, 0.15, 0.24), vec3(0.24, 0.21, 0.17), uSmoke * 0.7), uDaylight);
            col = mix(col, belowCol, clamp(-h * 4.2, 0.0, 0.88));
          }

          // HDR Golden Solar Disc + Realistic Mie Aureole (ACESFilmic blooms incandescent core cleanly!)
          if (uDaylight > 0.04 && uSunDir.y > -0.02) {
            float maskKeep = clamp(uSwNorm, 0.04, 1.0);
            float disc = smoothstep(0.9978, 0.9994, sunDot);
            float innerHalo = pow(sunDot, 55.0) * 1.15;
            float wideHalo = pow(sunDot, 9.0) * 0.32;
            vec3 clearCol = vec3(1.65, 1.28, 0.32);
            vec3 smokeOrb = vec3(1.75, 0.32, 0.04);
            vec3 cloudVeil = vec3(1.05, 0.96, 0.72);
            vec3 sunTint = mix(clearCol, cloudVeil, clamp(uCloud * 0.70, 0.0, 1.0));
            sunTint = mix(sunTint, smokeOrb, clamp(uSmoke * 0.88 + uTwilight * 0.45, 0.0, 1.0));
            float discPower = disc * (3.6 * pow(maskKeep, 0.80) * (1.0 - uCloud * 0.68) + 0.55 * uSmoke * (1.0 - uCloud * 0.60));
            float haloPower = (innerHalo * (0.25 + 0.95 * maskKeep) + wideHalo * (0.30 + 0.65 * maskKeep));
            col += sunTint * (discPower + haloPower) * uDaylight;
          }

          // Crisp alpine starry night + subtle Milky Way glow
          float nightClear = (1.0 - uDaylight) * (1.0 - uCloud * 0.85) * (1.0 - uSmoke * 0.7) * smoothstep(0.06, 0.34, h);
          if (nightClear > 0.05) {
            vec3 cell = floor(d * 260.0);
            float rnd = hash31(cell);
            float star = smoothstep(0.9962, 0.9998, rnd);
            float twinkle = 0.75 + 0.25 * sin(uTime * 2.5 + rnd * 60.0);
            vec3 starTint = mix(vec3(0.75, 0.88, 1.0), vec3(1.0, 0.92, 0.76), fract(rnd * 37.0));
            col += starTint * star * twinkle * nightClear * 1.35;
            float mwBand = exp(-pow(dot(d, normalize(vec3(0.55, 0.42, -0.72))) * 3.8, 2.0));
            float mwCloud = sfbm(d.xz * 3.5 + vec2(1.4, 2.7));
            col += vec3(0.014, 0.022, 0.045) * mwBand * mwCloud * nightClear;
          }

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });
    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);

    // Physical Alpine Lighting (crisp shadow map + cerulean sky fill + subtle alpenglow snow bounce!)
    this.hemiLight = new THREE.HemisphereLight(0x88c4ff, 0x2a211b, 0.72);
    this.scene.add(this.hemiLight);

    const maxTex = this.renderer.capabilities.maxTextureSize || 2048;
    const shadowRes = maxTex >= 4096 ? 4096 : 2048;
    this.sunLight = new THREE.DirectionalLight(0xfff1dc, 2.3);
    this.sunLight.position.set(8, 12, 10);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = shadowRes;
    this.sunLight.shadow.mapSize.height = shadowRes;
    this.sunLight.shadow.camera.near = 2.0;
    this.sunLight.shadow.camera.far = 42.0;
    const d = 7.6;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.00035;
    this.sunLight.shadow.normalBias = 0.018;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.rimLight = new THREE.DirectionalLight(0x6ba6e6, 0.42);
    this.rimLight.position.set(-10, 6, -12);
    this.scene.add(this.rimLight);

    // Subtle shadow catcher directly beneath the 11x11 km block (no giant flat gray plane cutting the sky!)
    const floorGeo = new THREE.PlaneGeometry(this.sizeX * 1.04, this.sizeY * 1.04);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0b121c,
      roughness: 0.96,
      metalness: 0.0,
      transparent: true,
      opacity: 0.55,
    });
    this.floorMesh = new THREE.Mesh(floorGeo, floorMat);
    this.floorMesh.position.y = -this.skirtDepth - 0.02;
    this.floorMesh.receiveShadow = true;
    this.scene.add(this.floorMesh);
  }

  _buildSolarOrbAndArc() {
    // Physical 3D Golden Sun Disc + subtle solar trajectory arc cleanly framed in the upper sky (never hidden behind top HUD!)
    this.sunGroup = new THREE.Group();
    const arcR = 7.4;
    const arcPts = [];
    for (let h = 6.2; h <= 20.8; h += 0.2) {
      const dp = Math.max(-1.0, Math.min(1.0, (h - 13.5) / 7.1));
      const az = ((180 + dp * 110) * Math.PI) / 180;
      const el = (Math.max(1.5, Math.cos(dp * Math.PI * 0.5) * 38.0) * Math.PI) / 180;
      arcPts.push(new THREE.Vector3(
        arcR * Math.cos(el) * Math.sin(az),
        0.55 + arcR * Math.sin(el) * 0.62,
        -arcR * Math.cos(el) * Math.cos(az)
      ));
    }
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
    this.sunArcMat = new THREE.LineDashedMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0.26,
      dashSize: 0.22,
      gapSize: 0.20,
      depthWrite: false,
    });
    this.sunArcLine = new THREE.Line(arcGeo, this.sunArcMat);
    this.sunArcLine.computeLineDistances();
    this.sunGroup.add(this.sunArcLine);

    this.sunOrbUniforms = {
      uSunTrans: { value: 0.9 },
      uSmoke: { value: 0.2 },
      uCloud: { value: 0.2 },
      uDaylight: { value: 1.0 },
      uTwilight: { value: 0.0 },
      uArcVis: { value: 1.0 },
    };
    const orbGeo = new THREE.PlaneGeometry(2.1, 2.1);
    const orbMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: this.sunOrbUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // Camera-facing billboard for the 3D sun orb
          vec4 mvCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mvCenter.xy += position.xy;
          gl_Position = projectionMatrix * mvCenter;
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uSunTrans;
        uniform float uSmoke;
        uniform float uCloud;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uArcVis;
        varying vec2 vUv;
        void main() {
          if (uDaylight < 0.03 || uArcVis < 0.02) discard;
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          if (r > 1.0) discard;

          float trans = clamp(uSunTrans, 0.05, 1.0);
          // Crisp bright solar core shrinks/softens as clouds mask it; turns glowing ember red-orange in wildfire smoke!
          float coreSharp = mix(0.26, 0.14, uCloud * 0.8);
          float core = (1.0 - smoothstep(coreSharp * 0.35, coreSharp + 0.10, r)) * (0.28 + 0.95 * trans);
          float corona = exp(-r * mix(3.4, 5.2, uCloud)) * (0.20 + 0.75 * trans);
          float veilRing = (1.0 - smoothstep(0.18, 0.55, abs(r - 0.24))) * (uCloud * 0.25 + uSmoke * 0.22);

          vec3 clearSun = vec3(1.00, 0.84, 0.16);
          vec3 clearCore = vec3(1.00, 0.94, 0.48);
          vec3 smokeSun = vec3(1.00, 0.34, 0.06);
          vec3 cloudSun = vec3(0.90, 0.84, 0.62);
          vec3 baseCol = mix(clearSun, clearCore, clamp(core, 0.0, 1.0));
          vec3 col = mix(baseCol, cloudSun, clamp(uCloud * 0.72, 0.0, 1.0));
          col = mix(col, smokeSun, clamp(uSmoke * 0.88 + uTwilight * 0.40, 0.0, 1.0));

          float alpha = clamp((core + corona + veilRing) * uDaylight * uArcVis, 0.0, 1.0);
          if (alpha < 0.005) discard;
          gl_FragColor = vec4(col * (0.65 + 0.95 * trans), alpha);
        }
      `,
    });
    this.sunOrb = new THREE.Mesh(orbGeo, orbMat);
    this.sunGroup.add(this.sunOrb);
    this.scene.add(this.sunGroup);
  }

  _buildTerrain(rgbTex, maskTex) {
    const G = this.G;
    const sizeX = this.sizeX;
    const sizeY = this.sizeY;

    rgbTex.colorSpace = THREE.SRGBColorSpace;
    rgbTex.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    rgbTex.wrapS = THREE.ClampToEdgeWrapping;
    rgbTex.wrapT = THREE.ClampToEdgeWrapping;

    maskTex.colorSpace = THREE.NoColorSpace;
    maskTex.wrapS = THREE.ClampToEdgeWrapping;
    maskTex.wrapT = THREE.ClampToEdgeWrapping;

    const nTop = G * G;
    const positions = new Float32Array(nTop * 3);
    const uvs = new Float32Array(nTop * 2);
    const baseElev = new Float32Array(nTop);

    for (let r = 0; r < G; r++) {
      const vFrac = r / (G - 1);
      const z = (vFrac - 0.5) * sizeY;
      const uvV = 1.0 - vFrac;
      for (let c = 0; c < G; c++) {
        const uFrac = c / (G - 1);
        const x = (uFrac - 0.5) * sizeX;
        const idx = r * G + c;
        const y0 = this.demZ[idx];
        baseElev[idx] = y0;
        positions[idx * 3 + 0] = x;
        positions[idx * 3 + 1] = y0 * this.state.exag;
        positions[idx * 3 + 2] = z;
        uvs[idx * 2 + 0] = uFrac;
        uvs[idx * 2 + 1] = uvV;
      }
    }

    const indices = new Uint32Array((G - 1) * (G - 1) * 6);
    let ptr = 0;
    for (let r = 0; r < G - 1; r++) {
      for (let c = 0; c < G - 1; c++) {
        const i00 = r * G + c, i01 = i00 + 1, i10 = i00 + G, i11 = i10 + 1;
        indices[ptr++] = i00; indices[ptr++] = i10; indices[ptr++] = i11;
        indices[ptr++] = i00; indices[ptr++] = i11; indices[ptr++] = i01;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geo.setAttribute("aBaseElev", new THREE.BufferAttribute(baseElev, 1));
    geo.setIndex(new THREE.BufferAttribute(indices, 1));
    geo.computeVertexNormals();
    this.terrainGeo = geo;

    this.terrainUniforms = {
      uMaskTex: { value: maskTex },
      uAoTex: { value: this.aoTex },
      uMode: { value: 0.0 },
      uContours: { value: 0.0 },
      uShowIsotherm: { value: 1.0 },
      uDepCumFrac: { value: 0.0 },
      uDepBoost: { value: this.state.boost },
      uRainSnowM: { value: this.state.rainSnowM },
      uSnowLineM: { value: this.state.snowLineM },
      uSnowPackMm: { value: 0.0 },
      uRainIntensity: { value: 0.0 },
      uSmokeHaze: { value: 0.0 },
      uDaylight: { value: 0.9 },
      uTwilight: { value: 0.0 },
      uTime: { value: 0.0 },
      uSunDir: { value: this._sunDir.clone() },
      uCloudShadowAmt: { value: 0.3 },
      uExag: { value: this.state.exag },
      uZMinM: { value: this.meta.zMinM },
      uZRangeKm: { value: this.zRangeKm },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
    };

    const mat = new THREE.MeshStandardMaterial({
      map: rgbTex,
      roughness: 0.78,
      metalness: 0.02,
    });

    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.terrainUniforms);

      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
          attribute float aBaseElev;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;
          varying float vSlopeUp;`
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
          vBaseElev = aBaseElev;
          vObjPos = position;
          vTerrainUv = uv;
          vSlopeUp = clamp(normal.y, 0.0, 1.0);`
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
          uniform sampler2D uMaskTex;
          uniform sampler2D uAoTex;
          uniform float uMode;
          uniform float uContours;
          uniform float uShowIsotherm;
          uniform float uDepCumFrac;
          uniform float uDepBoost;
          uniform float uRainSnowM;
          uniform float uSnowLineM;
          uniform float uSnowPackMm;
          uniform float uRainIntensity;
          uniform float uSmokeHaze;
          uniform float uDaylight;
          uniform float uTwilight;
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform float uCloudShadowAmt;
          uniform float uExag;
          uniform float uZMinM;
          uniform float uZRangeKm;
          uniform vec2 uWindDir;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;
          varying float vSlopeUp;

          float hash21(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }
          float vnoise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
              mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x),
              f.y
            );
          }
          float fbm(vec2 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 4; i++) {
              v += a * vnoise(p);
              p = p * 2.07 + vec2(13.1, 7.7);
              a *= 0.5;
            }
            return v;
          }
          float fbm2(vec2 p) {
            return 0.65 * vnoise(p) + 0.35 * vnoise(p * 2.13 + vec2(5.7, 9.2));
          }
          vec3 depHeatmap(float t) {
            vec3 c0 = vec3(0.012, 0.022, 0.055);
            vec3 c1 = vec3(0.070, 0.045, 0.190);
            vec3 c2 = vec3(0.480, 0.085, 0.030);
            vec3 c3 = vec3(0.880, 0.360, 0.020);
            vec3 c4 = vec3(0.980, 0.800, 0.260);
            if (t < 0.25) return mix(c0, c1, t / 0.25);
            if (t < 0.55) return mix(c1, c2, (t - 0.25) / 0.30);
            if (t < 0.82) return mix(c2, c3, (t - 0.55) / 0.27);
            return mix(c3, c4, clamp((t - 0.82) / 0.18, 0.0, 1.0));
          }
          // Procedural surface micro-height for analytical world-space bump normals (limestone ledges, ice ogives, snow sastrugi, lake waves)
          float terrainMicroHeight(vec2 xz, float elevM, float isCryo, float isSnow, float isIce, float freshSnow, float isLake) {
            vec2 wa = vec2(dot(xz, uWindDir), dot(xz, vec2(-uWindDir.y, uWindDir.x)));
            float rockStrata = sin(elevM * 0.13 + fbm2(xz * 2.4) * 3.8) * 0.45 + (fbm2(xz * 19.0) - 0.5) * 0.85;
            float iceOgive = sin(xz.x * 18.0 - xz.y * 22.0 + vnoise(xz * 6.0) * 3.0) * 0.32 + (vnoise(xz * 28.0) - 0.5) * 0.65;
            float snowDrift = (fbm2(vec2(wa.x * 5.5, wa.y * 16.0)) - 0.5) * 0.72;
            float h = mix(rockStrata * 0.85, mix(iceOgive * 0.62, snowDrift * 0.42, isSnow), isCryo);
            h = mix(h, snowDrift * 0.38, freshSnow * 0.85);
            if (isLake > 0.05) {
              vec2 p1 = xz * 26.0 - uWindDir * uTime * 1.15;
              vec2 p2 = xz * 46.0 + vec2(uWindDir.y, -uWindDir.x) * uTime * 0.85;
              vec2 p3 = xz * 74.0 - uWindDir * uTime * 1.65;
              float wH = (vnoise(p1) - 0.5) * 0.50 + (vnoise(p2) - 0.5) * 0.32 + (vnoise(p3) - 0.5) * 0.18;
              h = mix(h, wH * 0.48, isLake);
            }
            return h;
          }`
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
          vec3 msk = texture2D(uMaskTex, vTerrainUv).rgb;
          vec3 aoMap = texture2D(uAoTex, vTerrainUv).rgb;
          float svfAo = aoMap.r;        // 16-azimuth Horizon Sky-View Factor [0.40..0.96]
          float topoCurv = aoMap.g;     // Multi-scale curvature: <0.5 gully/hollow, >0.5 ridge/arete
          float warmAspect = aoMap.b;   // Solar aspect: >0.5 sun-exposed South/SW, <0.5 shaded North

          float visAlb = msk.r;
          float ndsi = msk.g * 2.0 - 1.0;
          float water = msk.b;
          float elevT = clamp(vBaseElev / max(uZRangeKm, 0.001), 0.0, 1.0);
          float elevM = uZMinM + vBaseElev * 1000.0;

          float isCryo = smoothstep(0.30, 0.46, ndsi);
          float isSnow = isCryo * smoothstep(0.38, 0.58, visAlb);
          float isIce = isCryo * (1.0 - smoothstep(0.38, 0.58, visAlb));
          float isLake = smoothstep(0.22, 0.62, water);

          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.85 + 0.22 * sastrugi, isSnow) * (0.91 + 0.15 * grain);

          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          // Physically realistic aspect- & gully-aware snow accumulation & meltback across the ENTIRE Rockies massif!
          // Fresh snow holds longer in concave couloirs (topoCurv < 0.5) & cool north slopes (warmAspect < 0.5),
          // while melting off sun-exposed south rocky ridges first!
          float activeSnow = clamp(uRainIntensity * 0.55, 0.0, 0.65) * smoothstep(uRainSnowM - 100.0, uRainSnowM + 100.0, elevM);
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float snowDepthNorm = clamp(max(packCover, activeSnow * 0.80), 0.0, 1.0);

          float aspectBiasM = (warmAspect - 0.5) * 185.0 * (1.0 - activeSnow * 0.6);
          float gullyBiasM = (topoCurv - 0.5) * 145.0;
          float snowLineEff = min(uSnowLineM, mix(3520.0, uRainSnowM - 60.0, smoothstep(0.04, 0.25, activeSnow)));
          float patchNoise = fbm(vObjPos.xz * 2.4 + vec2(3.1, 7.4));
          float elevMask = smoothstep(snowLineEff - 120.0, snowLineEff + 150.0, elevM - aspectBiasM - gullyBiasM + (patchNoise - 0.5) * 115.0);

          float ledgeTex = fbm(vObjPos.xz * 9.5);
          float slopeHold = smoothstep(0.26, 0.70, vSlopeUp + 0.22 * ledgeTex + 0.16 * (0.5 - topoCurv) + 0.14 * snowDepthNorm);
          float notLake = 1.0 - isLake;
          float rockCrevice = smoothstep(0.55 - 0.65 * snowDepthNorm, 0.88 - 0.45 * snowDepthNorm, patchNoise * 0.55 + ledgeTex * 0.28 + (0.65 - topoCurv) * 0.35 + snowDepthNorm * 0.52);
          float terrainHold = mix(rockCrevice, 1.0, isCryo * 0.55 + snowDepthNorm * 0.45);

          float freshSnow = clamp(snowDepthNorm * elevMask * slopeHold * terrainHold * notLake * 1.14, 0.0, 0.96);

          float belowRainLine = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 110.0, elevM);
          float wetSurface = clamp(uRainIntensity * 0.62, 0.0, 0.78) * belowRainLine * (1.0 - freshSnow * 0.85);

          // Projected moving 3D cloud shadows gliding across the glacier & cliffs along the true sun vector!
          float cloudShadow = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vObjPos.xz + uSunDir.xz * ((3.5 - vObjPos.y) / max(uSunDir.y, 0.24));
            float cn = fbm(shP * 0.25 - uWindDir * uTime * 0.062);
            float cMask = smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn);
            cloudShadow = 1.0 - cMask * uCloudShadowAmt * 0.46 * uDaylight;
          }

          if (uMode < 0.5) {
            // Subtle alpine cliff striations & glacial blue-ice depth enhancement
            float cliffReveal = (1.0 - isCryo) * (1.0 - vSlopeUp);
            float strataCol = sin(elevM * 0.11 + ledgeTex * 3.5) * 0.06 * cliffReveal;
            diffuseColor.rgb = max(vec3(0.01), diffuseColor.rgb * (microShade + strataCol));
            // Give bare glacier ice natural glacial turquoise-steel hue & snow crisp alpine balance
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.86, 0.92, 0.98), isSnow * 0.42);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.86, 0.97, 1.08), isIce * 0.35);

            float depVis = pow(clamp(localDepNorm, 0.0, 1.25), 0.78);
            float sootCover = clamp(depVis * 0.22 * uDepBoost * (0.20 + 0.80 * isCryo), 0.0, 0.72);
            float impurityEnrich = mix(0.85, 1.35, isIce) * (0.80 + 0.40 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.74);
            sootCover *= (1.0 - freshSnow * 0.90);

            vec3 sootTint = mix(vec3(0.18, 0.17, 0.16), vec3(0.07, 0.07, 0.08), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.46 + sootTint * 0.54, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.08 * (1.0 - isCryo));

            // Rain wets rock & moraines darker
            diffuseColor.rgb *= (1.0 - wetSurface * 0.30 * (1.0 - isSnow));

            // Crisp fresh alpine snow blanket across moraines, gullies, rock ledges & glacier
            vec3 freshSnowCol = vec3(0.82, 0.88, 0.95) * (0.88 + 0.15 * sastrugi + 0.07 * grain);
            diffuseColor.rgb = mix(diffuseColor.rgb, freshSnowCol, freshSnow * 0.94);

            // Proglacial Lac Sunwapta glacial rock-flour turquoise base + pale silt shoreline
            if (isLake > 0.01) {
              float shore = smoothstep(0.22, 0.42, water) * (1.0 - smoothstep(0.45, 0.70, water));
              vec3 flourBase = mix(vec3(0.014, 0.042, 0.072), vec3(0.032, 0.195, 0.215), uDaylight);
              flourBase = mix(flourBase, vec3(0.14, 0.26, 0.27), shore * 0.45 * uDaylight);
              diffuseColor.rgb = mix(diffuseColor.rgb, flourBase, isLake);
            }

            // Apply moving cloud shadows across terrain
            diffuseColor.rgb *= cloudShadow;
          } else if (uMode < 1.5) {
            // Mode 1: Cumulative FireWork carbon deposition (EC+POM+SOM, mg m-2)
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 2.5) {
            // Mode 2: Glacier / Snow / Lake classification (NDSI + albedo)
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            // Mode 3: Sculpted geomorphological relief model
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade * cloudShadow;
          }

          if (uContours > 0.5) {
            float c100 = abs(fract(elevM / 100.0 + 0.5) - 0.5);
            float c500 = abs(fract(elevM / 500.0 + 0.5) - 0.5);
            float fw100 = fwidth(elevM / 100.0) * 1.2;
            float fw500 = fwidth(elevM / 500.0) * 1.7;
            float l100 = 1.0 - smoothstep(0.0, max(fw100, 0.014), c100);
            float l500 = 1.0 - smoothstep(0.0, max(fw500, 0.010), c500);
            vec3 lc = uMode > 2.5 ? vec3(0.14, 0.20, 0.28) : vec3(0.05, 0.09, 0.14);
            diffuseColor.rgb = mix(diffuseColor.rgb, lc, clamp(l100 * 0.34 + l500 * 0.50, 0.0, 0.75));
          }

          if (uShowIsotherm > 0.5 && uRainSnowM > 1880.0 && uRainSnowM < 3480.0) {
            float dIso = abs(elevM - uRainSnowM);
            float isoW = max(fwidth(elevM) * 2.2, 16.0);
            float isoLine = 1.0 - smoothstep(0.0, isoW, dIso);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.15, 0.75, 1.0), isoLine * 0.85);
          }`
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
          float rVal = 0.88;
          rVal = mix(rVal, 0.62, isSnow);
          rVal = mix(rVal, 0.28, isIce);
          rVal = mix(rVal, 0.58, freshSnow * 0.75);
          rVal = mix(rVal, 0.06, isLake);
          rVal = mix(rVal, 0.85, clamp(uDepCumFrac * 0.32 * isCryo, 0.0, 0.5));
          rVal = mix(rVal, 0.16, wetSurface * 0.75);
          roughnessFactor = rVal;`
        )
        .replace(
          "#include <normal_fragment_maps>",
          `#include <normal_fragment_maps>
          // Real-time analytical world-space micro-normal bump mapping (limestone ledges, glacier ogives, wind sastrugi & animated lake waves!)
          if (uMode < 0.5 || uMode > 2.5) {
            float camD = length(vObjPos - cameraPosition);
            float bumpDistFade = 1.0 - smoothstep(6.0, 22.0, camD);
            float eps = 0.018;
            float h0 = terrainMicroHeight(vObjPos.xz, elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float hX = terrainMicroHeight(vObjPos.xz + vec2(eps, 0.0), elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float hZ = terrainMicroHeight(vObjPos.xz + vec2(0.0, eps), elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float bumpStrength = mix(0.28, 0.16, isCryo) * (0.35 + 0.65 * bumpDistFade);
            bumpStrength = mix(bumpStrength, 0.22, isLake);
            vec3 gWorld = vec3((hX - h0) / eps, 0.0, (hZ - h0) / eps) * bumpStrength * 0.032;
            vec3 gView = (viewMatrix * vec4(gWorld, 0.0)).xyz;
            normal = normalize(normal - gView);
          }`
        )
        .replace(
          "#include <aomap_fragment>",
          `#include <aomap_fragment>
          // 16-Azimuth Horizon Sky-View Ambient Occlusion + crisp alpine blue indirect sky bounce in shadow!
          float aoWeight = mix(0.46, 1.08, pow(clamp(svfAo, 0.0, 1.0), 1.15));
          vec3 alpineShadowBounce = mix(vec3(0.76, 0.88, 1.12), vec3(1.0), clamp(svfAo, 0.0, 1.0));
          reflectedLight.indirectDiffuse *= aoWeight * mix(vec3(1.0), alpineShadowBounce, uDaylight * 0.65);
          reflectedLight.indirectSpecular *= aoWeight;

          if (uMode < 0.5) {
            vec3 viewW = normalize(cameraPosition - vObjPos);
            vec3 sDirW = normalize(uSunDir);
            // Translucent glacial-ice & snow-crest subsurface scattering (SSS)
            float wrapNdl = clamp(dot(vec3(0.0, 1.0, 0.0), sDirW) * 0.5 + 0.5, 0.0, 1.0);
            float backLit = pow(max(dot(-viewW, sDirW), 0.0), 3.0) * 0.55 + 0.45 * wrapNdl;
            float ridgeCrest = smoothstep(0.50, 0.82, topoCurv);
            vec3 iceSSS = vec3(0.05, 0.24, 0.36) * isIce * (1.0 - freshSnow * 0.8) * backLit * uDaylight * cloudShadow * 0.55;
            vec3 snowSSS = vec3(0.16, 0.26, 0.36) * max(isSnow, freshSnow) * ridgeCrest * backLit * uDaylight * cloudShadow * 0.30;
            reflectedLight.directDiffuse += (iceSSS + snowSSS);

            // Crisp micro-sparkle on sunlit fresh alpine snow crystals (close/mid camera view)
            if (freshSnow > 0.20 && uDaylight > 0.25) {
              float spCell = hash21(floor(vObjPos.xz * 260.0 + viewW.xz * 12.0));
              float sparkle = smoothstep(0.986, 0.999, spCell) * freshSnow * uDaylight * cloudShadow * (1.0 - smoothstep(2.5, 11.0, length(vObjPos - cameraPosition)));
              reflectedLight.directSpecular += vec3(1.4, 1.35, 1.25) * sparkle * 0.65;
            }

            // Live sky + smoke Fresnel mirror reflection & solar shimmer on proglacial Lac Sunwapta!
            if (isLake > 0.02) {
              vec2 w1 = vObjPos.xz * 24.0 - uWindDir * uTime * 1.1;
              vec2 w2 = vObjPos.xz * 44.0 + vec2(uWindDir.y, -uWindDir.x) * uTime * 0.8;
              float rx = (vnoise(w1) - 0.5) * 0.26 + (vnoise(w2) - 0.5) * 0.16;
              float rz = (vnoise(w1 + 9.1) - 0.5) * 0.26 + (vnoise(w2 + 4.3) - 0.5) * 0.16;
              vec3 nW = normalize(vec3(rx, 1.0, rz));
              float fres = pow(1.0 - max(dot(viewW, nW), 0.0), 3.6);
              vec3 reflSkyDay = mix(vec3(0.24, 0.44, 0.72), vec3(0.46, 0.39, 0.30), clamp(uSmokeHaze * 0.75, 0.0, 1.0));
              reflSkyDay = mix(reflSkyDay, vec3(0.90, 0.42, 0.16), uTwilight * 0.55);
              vec3 reflCol = mix(vec3(0.008, 0.016, 0.036), reflSkyDay, uDaylight);
              vec3 hVec = normalize(viewW + sDirW);
              float glint = pow(max(dot(nW, hVec), 0.0), 140.0) * uDaylight * cloudShadow * 2.2;
              vec3 sunGlintCol = mix(vec3(1.2, 1.02, 0.62), vec3(1.3, 0.52, 0.15), clamp(uSmokeHaze * 0.7 + uTwilight * 0.6, 0.0, 1.0));
              reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, reflCol * (0.22 + 0.78 * fres), isLake);
              reflectedLight.directSpecular += sunGlintCol * glint * isLake;
            }
          }`
        )
        .replace(
          "#include <tonemapping_fragment>",
          `// Unified Linear-Space Physical Rayleigh Aerial Perspective + 8-Step True 3D Volumetric Ray-Marched Wildfire Smoke!
          // ZERO flat sheets, ZERO popping — continuous 3D animated valley plumes wrapping around every cliff & glacier ridge!
          if (uMode < 0.5) {
            vec3 rayVec = vObjPos - cameraPosition;
            float rayLen = length(rayVec);
            vec3 rayDir = rayVec / max(rayLen, 0.001);
            vec3 sDir = normalize(uSunDir);

            // 1. Subtle crisp clear-air alpine Rayleigh aerial perspective (depth cue even on pure blue-sky days!)
            float rayleighT = clamp((1.0 - exp(-rayLen * 0.015)) * 0.48, 0.0, 0.48);
            vec3 rayleighDay = mix(vec3(0.26, 0.45, 0.74), vec3(0.28, 0.34, 0.42), uCloudShadowAmt * 0.70);
            rayleighDay = mix(rayleighDay, vec3(0.68, 0.36, 0.16), uTwilight * 0.42);
            vec3 rayleighCol = mix(vec3(0.006, 0.012, 0.028), rayleighDay, uDaylight);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, rayleighCol, rayleighT);

            // 2. True 8-Step 3D Volumetric Ray-Marched Wildfire Smoke (Beer-Lambert + Henyey-Greenstein Mie!)
            if (uSmokeHaze > 0.015) {
              float yTop = 2.65 * uExag;
              float y0 = cameraPosition.y;
              float y1 = vObjPos.y;
              float tEnter = 0.0;
              float tExit = rayLen;
              bool hitVol = true;
              if (y0 > yTop && y1 >= yTop) {
                hitVol = false;
              } else if (y0 > yTop && y1 < yTop) {
                tEnter = rayLen * clamp((y0 - yTop) / max(y0 - y1, 0.001), 0.0, 1.0);
              } else if (y0 < yTop && y1 > yTop) {
                tExit = rayLen * clamp((yTop - y0) / max(y1 - y0, 0.001), 0.0, 1.0);
              }

              if (hitVol && tExit > tEnter + 0.02) {
                float segLen = tExit - tEnter;
                float stepLen = segLen / 8.0;
                float H = 0.96 * uExag;
                float extBase = 0.055 + 0.50 * pow(uSmokeHaze, 0.88);
                float cosT = dot(rayDir, sDir);
                float g = 0.62;
                float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * cosT), 1.5);
                float sunGlow = clamp((hg - 0.32) * 0.24, 0.0, 0.72);

                vec3 smokeCool = vec3(0.36, 0.36, 0.35);
                vec3 smokeWarm = vec3(0.68, 0.45, 0.21);
                vec3 smokeDense = vec3(0.64, 0.29, 0.09);
                vec3 baseInscatter = mix(smokeCool, smokeWarm, clamp(0.24 + 0.56 * sunGlow + 0.34 * uSmokeHaze, 0.0, 1.0));
                baseInscatter = mix(baseInscatter, smokeDense, clamp((uSmokeHaze - 0.55) * 0.85, 0.0, 0.52));
                baseInscatter *= (1.0 - uCloudShadowAmt * 0.20);
                vec3 nightInscatter = vec3(0.009, 0.010, 0.015);

                float trans = 1.0;
                vec3 accumLight = vec3(0.0);
                vec2 windDrift = uWindDir * uTime * 0.042;
                for (int i = 0; i < 8; i++) {
                  float t = tEnter + (float(i) + 0.5) * stepLen;
                  vec3 p = cameraPosition + rayDir * t;
                  float hAbove = max(0.0, p.y - 0.04 * uExag);
                  float strat = exp(-hAbove / H);
                  // True 3D wind-advected silky plume turbulence (drifts gently down the Sunwapta trough!)
                  vec2 nUv = p.xz * 0.24 - windDrift + vec2(p.y * 0.34, -p.y * 0.26);
                  float wisp = 0.66 + 0.54 * fbm2(nUv);
                  float sigma = extBase * strat * wisp;
                  float stepT = exp(-sigma * stepLen);
                  // Sunlit upper smoke glows slightly warmer/brighter; deep trapped valley floor is softer milky-cool
                  float altLit = clamp(0.76 + 0.34 * (hAbove / max(yTop, 0.1)), 0.72, 1.12);
                  vec3 stepCol = mix(nightInscatter, baseInscatter * altLit, uDaylight);
                  accumLight += trans * (1.0 - stepT) * stepCol;
                  trans *= stepT;
                }
                float fadeIn = smoothstep(0.015, 0.15, uSmokeHaze);
                float blendTrans = mix(1.0, max(trans, 0.12), fadeIn);
                gl_FragColor.rgb = gl_FragColor.rgb * blendTrans + accumLight * fadeIn;
              }
            }
          }
          #include <tonemapping_fragment>`
        );
    };

    this.terrainMesh = new THREE.Mesh(geo, mat);
    this.terrainMesh.castShadow = true;
    this.terrainMesh.receiveShadow = true;
    this.scene.add(this.terrainMesh);

    this._buildCutawaySkirt();
  }

  _buildCutawaySkirt() {
    const G = this.G, sizeX = this.sizeX, sizeY = this.sizeY, yb = -this.skirtDepth;
    const pos = [], nrm = [], baseRim = [], idx = [];
    let vOff = 0;
    const addSide = (sampleFn, nx, ny, nz) => {
      const start = vOff;
      for (let i = 0; i < G; i++) {
        const p = sampleFn(i);
        pos.push(p.x, p.y0 * this.state.exag, p.z); nrm.push(nx, ny, nz); baseRim.push(p.y0);
        pos.push(p.x, yb, p.z); nrm.push(nx, ny, nz); baseRim.push(-1.0);
        vOff += 2;
      }
      for (let i = 0; i < G - 1; i++) {
        const t0 = start + i * 2, b0 = t0 + 1, t1 = t0 + 2, b1 = t0 + 3;
        idx.push(t0, b0, b1, t0, b1, t1);
      }
    };
    addSide((i) => ({ x: (i / (G - 1) - 0.5) * sizeX, z: -sizeY * 0.5, y0: this.demZ[i] }), 0, 0, -1);
    addSide((i) => ({ x: sizeX * 0.5, z: (i / (G - 1) - 0.5) * sizeY, y0: this.demZ[i * G + (G - 1)] }), 1, 0, 0);
    addSide((i) => { const c = G - 1 - i; return { x: (c / (G - 1) - 0.5) * sizeX, z: sizeY * 0.5, y0: this.demZ[(G - 1) * G + c] }; }, 0, 0, 1);
    addSide((i) => { const r = G - 1 - i; return { x: -sizeX * 0.5, z: (r / (G - 1) - 0.5) * sizeY, y0: this.demZ[r * G] }; }, -1, 0, 0);

    const cb = vOff, hx = sizeX * 0.5, hz = sizeY * 0.5;
    pos.push(-hx, yb, -hz, hx, yb, -hz, hx, yb, hz, -hx, yb, hz);
    for (let k = 0; k < 4; k++) { nrm.push(0, -1, 0); baseRim.push(-1.0); }
    idx.push(cb, cb + 1, cb + 2, cb, cb + 2, cb + 3);

    const skirtGeo = new THREE.BufferGeometry();
    skirtGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    skirtGeo.setAttribute("normal", new THREE.Float32BufferAttribute(nrm, 3));
    skirtGeo.setIndex(idx);
    this.skirtGeo = skirtGeo;
    this.skirtBaseRim = new Float32Array(baseRim);

    const skirtMat = new THREE.MeshStandardMaterial({ color: 0x121924, roughness: 0.88, metalness: 0.08, side: THREE.DoubleSide });
    this.skirtMesh = new THREE.Mesh(skirtGeo, skirtMat);
    this.skirtMesh.castShadow = true;
    this.skirtMesh.receiveShadow = true;
    this.scene.add(this.skirtMesh);
  }

  _buildSurroundingRockies(ringU16) {
    // 35 km x 35 km real Copernicus GLO-30 Rocky Mountain horizon (320x320, border-snapped to dem_448, + 16-azimuth SVF AO)!
    // Identical linear-space lighting, aspect snowline, cloud shadows, Rayleigh aerial perspective & 8-step volumetric smoke!
    this.ringMesh = null;
    this.ringGeo = null;
    if (!ringU16 || !this.meta.ring) return;

    const G = this.meta.ring.grid;
    const size = this.meta.ring.sizeKm;
    const zMinR = this.meta.ring.zMinM;
    const zMaxR = this.meta.ring.zMaxM;
    const zSpanR = Math.max(zMaxR - zMinR, 1.0);
    const baseRefM = this.meta.zMinM;

    const nV = G * G;
    const pos = new Float32Array(nV * 3);
    const uvs = new Float32Array(nV * 2);
    const baseElev = new Float32Array(nV);
    for (let r = 0; r < G; r++) {
      const vFrac = r / (G - 1);
      const z = (vFrac - 0.5) * size;
      const uvV = 1.0 - vFrac;
      for (let c = 0; c < G; c++) {
        const uFrac = c / (G - 1);
        const x = (uFrac - 0.5) * size;
        const idx = r * G + c;
        const elevM = zMinR + (ringU16[idx] / 65535.0) * zSpanR;
        const y0 = (elevM - baseRefM) / 1000.0;
        baseElev[idx] = y0;
        pos[idx * 3 + 0] = x;
        pos[idx * 3 + 1] = y0 * this.state.exag;
        pos[idx * 3 + 2] = z;
        uvs[idx * 2 + 0] = uFrac;
        uvs[idx * 2 + 1] = uvV;
      }
    }

    const halfCut = this.sizeX * 0.5 - 0.08;
    const indices = [];
    for (let r = 0; r < G - 1; r++) {
      const z0 = (r / (G - 1) - 0.5) * size;
      const z1 = ((r + 1) / (G - 1) - 0.5) * size;
      for (let c = 0; c < G - 1; c++) {
        const x0 = (c / (G - 1) - 0.5) * size;
        const x1 = ((c + 1) / (G - 1) - 0.5) * size;
        if (Math.abs(x0) < halfCut && Math.abs(x1) < halfCut && Math.abs(z0) < halfCut && Math.abs(z1) < halfCut) continue;
        const i00 = r * G + c, i01 = i00 + 1, i10 = i00 + G, i11 = i10 + 1;
        indices.push(i00, i10, i11, i00, i11, i01);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geo.setAttribute("aBaseElev", new THREE.BufferAttribute(baseElev, 1));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    this.ringGeo = geo;

    this.ringUniforms = {
      uRingAoTex: { value: this.ringAoTex },
      uSunDir: { value: this._sunDir.clone() },
      uTime: { value: 0.0 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uCloudShadowAmt: { value: 0.3 },
      uSmokeHaze: { value: 0.0 },
      uDaylight: { value: 0.9 },
      uTwilight: { value: 0.0 },
      uSnowPackMm: { value: 0.0 },
      uSnowLineM: { value: 3480.0 },
      uZMinM: { value: this.meta.zMinM },
      uExag: { value: this.state.exag },
      uHalfInner: { value: this.sizeX * 0.5 - 0.025 },
      uHalfOuter: { value: size * 0.5 },
      uRingAlpha: { value: 0.0 },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: true,
      uniforms: this.ringUniforms,
      vertexShader: `
        attribute float aBaseElev;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec2 vRingUv;
        varying float vElevM;
        uniform float uZMinM;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normal);
          vRingUv = uv;
          vElevM = uZMinM + aBaseElev * 1000.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform sampler2D uRingAoTex;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uCloudShadowAmt;
        uniform float uSmokeHaze;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSnowPackMm;
        uniform float uSnowLineM;
        uniform float uExag;
        uniform float uHalfInner;
        uniform float uHalfOuter;
        uniform float uRingAlpha;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec2 vRingUv;
        varying float vElevM;

        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float vnoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.05 + vec2(7.3, 11.1); a *= 0.5; }
          return v;
        }
        float fbm2(vec2 p) {
          return 0.65 * vnoise(p) + 0.35 * vnoise(p * 2.13 + vec2(5.7, 9.2));
        }

        void main() {
          if (uRingAlpha < 0.02) discard;
          float inBox = max(abs(vWorldPos.x), abs(vWorldPos.z));
          if (inBox < uHalfInner) discard;
          float outerFade = 1.0 - smoothstep(uHalfOuter * 0.70, uHalfOuter * 0.99, length(vWorldPos.xz));
          if (outerFade < 0.01) discard;

          vec3 aoMap = texture2D(uRingAoTex, vRingUv).rgb;
          float svfAo = aoMap.r;
          float topoCurv = aoMap.g;
          float warmAspect = aoMap.b;

          vec3 N = normalize(vNormal);
          float slopeUp = clamp(N.y, 0.0, 1.0);
          float n = fbm(vWorldPos.xz * 0.85);
          float strata = sin(vElevM * 0.09 + n * 4.2) * 0.14 * (1.0 - slopeUp);

          // Linear-space Rockies palette calibrated to Sentinel-2 block reflectance
          vec3 forest = mix(vec3(0.016, 0.036, 0.020), vec3(0.032, 0.056, 0.030), n);
          vec3 rock = mix(vec3(0.058, 0.050, 0.044), vec3(0.165, 0.145, 0.125), clamp(n + strata, 0.0, 1.0));
          vec3 alpineSnow = vec3(0.58, 0.66, 0.76);

          float treeLine = smoothstep(1920.0, 2220.0, vElevM + (n - 0.5) * 180.0 - (warmAspect - 0.5) * 120.0);
          vec3 baseCol = mix(forest, rock, treeLine);
          float aspectBias = (warmAspect - 0.5) * 180.0;
          float gullyBias = (topoCurv - 0.5) * 140.0;
          float permSnow = smoothstep(2580.0, 2920.0, vElevM - aspectBias - gullyBias + (n - 0.5) * 200.0) * smoothstep(0.34, 0.72, slopeUp + (0.5 - topoCurv) * 0.20);
          baseCol = mix(baseCol, alpineSnow, permSnow * 0.88);

          // Synchronized aspect-aware fresh snow whitening!
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float freshMask = packCover * smoothstep(uSnowLineM - 120.0, uSnowLineM + 160.0, vElevM - aspectBias - gullyBias + (n - 0.5) * 130.0) * smoothstep(0.28, 0.68, slopeUp + 0.16 * n);
          baseCol = mix(baseCol, vec3(0.66, 0.74, 0.84), clamp(freshMask * 0.92, 0.0, 0.92));

          // Direct sun + 16-azimuth SVF AO + alpine blue shadow bounce + moving cloud shadows!
          vec3 sDir = normalize(uSunDir);
          float ndl = max(dot(N, sDir), 0.0);
          float cloudSh = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vWorldPos.xz + sDir.xz * ((3.5 - vWorldPos.y) / max(sDir.y, 0.24));
            float cn = fbm(shP * 0.25 - uWindDir * uTime * 0.062);
            cloudSh = 1.0 - smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn) * uCloudShadowAmt * 0.45 * uDaylight;
          }
          float aoWeight = mix(0.45, 1.06, pow(clamp(svfAo, 0.0, 1.0), 1.15));
          vec3 sunTint = mix(vec3(0.14, 0.24, 0.48), mix(vec3(1.08, 0.88, 0.52), vec3(1.18, 0.54, 0.20), uTwilight * 0.65), uDaylight);
          vec3 ambCol = mix(vec3(0.015, 0.028, 0.065), vec3(0.26, 0.38, 0.54), uDaylight) * aoWeight;
          vec3 col = baseCol * (ambCol + sunTint * ndl * (0.20 + 0.94 * uDaylight) * cloudSh);

          // Exact same Rayleigh aerial perspective + 8-step 3D volumetric ray-marched smoke as terrainMesh!
          vec3 rayVec = vWorldPos - cameraPosition;
          float rayLen = length(rayVec);
          vec3 rayDir = rayVec / max(rayLen, 0.001);

          float rayleighT = clamp((1.0 - exp(-rayLen * 0.024)) * 0.68, 0.0, 0.72);
          vec3 rayleighDay = mix(vec3(0.28, 0.48, 0.76), vec3(0.29, 0.35, 0.43), uCloudShadowAmt * 0.72);
          rayleighDay = mix(rayleighDay, vec3(0.74, 0.38, 0.16), uTwilight * 0.45);
          col = mix(col, mix(vec3(0.006, 0.012, 0.028), rayleighDay, uDaylight), rayleighT);

          if (uSmokeHaze > 0.015) {
            float yTop = 2.65 * uExag;
            float y0 = cameraPosition.y;
            float y1 = vWorldPos.y;
            float tEnter = 0.0;
            float tExit = rayLen;
            bool hitVol = true;
            if (y0 > yTop && y1 >= yTop) {
              hitVol = false;
            } else if (y0 > yTop && y1 < yTop) {
              tEnter = rayLen * clamp((y0 - yTop) / max(y0 - y1, 0.001), 0.0, 1.0);
            } else if (y0 < yTop && y1 > yTop) {
              tExit = rayLen * clamp((yTop - y0) / max(y1 - y0, 0.001), 0.0, 1.0);
            }
            if (hitVol && tExit > tEnter + 0.02) {
              float segLen = min(tExit - tEnter, 24.0);
              float stepLen = segLen / 8.0;
              float H = 0.96 * uExag;
              float extBase = 0.055 + 0.50 * pow(uSmokeHaze, 0.88);
              float cosT = dot(rayDir, sDir);
              float g = 0.62;
              float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * cosT), 1.5);
              float sunGlow = clamp((hg - 0.32) * 0.24, 0.0, 0.72);

              vec3 smokeCool = vec3(0.36, 0.36, 0.35);
              vec3 smokeWarm = vec3(0.68, 0.45, 0.21);
              vec3 smokeDense = vec3(0.64, 0.29, 0.09);
              vec3 baseInscatter = mix(smokeCool, smokeWarm, clamp(0.24 + 0.56 * sunGlow + 0.34 * uSmokeHaze, 0.0, 1.0));
              baseInscatter = mix(baseInscatter, smokeDense, clamp((uSmokeHaze - 0.55) * 0.85, 0.0, 0.52));
              baseInscatter *= (1.0 - uCloudShadowAmt * 0.20);
              vec3 nightInscatter = vec3(0.009, 0.010, 0.015);

              float trans = 1.0;
              vec3 accumLight = vec3(0.0);
              vec2 windDrift = uWindDir * uTime * 0.042;
              for (int i = 0; i < 8; i++) {
                float t = tEnter + (float(i) + 0.5) * stepLen;
                vec3 p = cameraPosition + rayDir * t;
                float hAbove = max(0.0, p.y - 0.04 * uExag);
                float strat = exp(-hAbove / H);
                vec2 nUv = p.xz * 0.24 - windDrift + vec2(p.y * 0.34, -p.y * 0.26);
                float wisp = 0.66 + 0.54 * fbm2(nUv);
                float sigma = extBase * strat * wisp;
                float stepT = exp(-sigma * stepLen);
                float altLit = clamp(0.76 + 0.34 * (hAbove / max(yTop, 0.1)), 0.72, 1.12);
                vec3 stepCol = mix(nightInscatter, baseInscatter * altLit, uDaylight);
                accumLight += trans * (1.0 - stepT) * stepCol;
                trans *= stepT;
              }
              float fadeIn = smoothstep(0.015, 0.15, uSmokeHaze);
              float blendTrans = mix(1.0, max(trans, 0.08), fadeIn);
              col = col * blendTrans + accumLight * fadeIn;
            }
          }

          gl_FragColor = vec4(col, outerFade * uRingAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });

    this.ringMesh = new THREE.Mesh(geo, mat);
    this.ringMesh.frustumCulled = false;
    this.ringMesh.visible = false;
    this.scene.add(this.ringMesh);
  }

  _buildCloudDeck() {
    // REAL MULTI-LOBE 3D VOLUMETRIC MOUNTAIN CLOUDS!
    // 96 sculpted FBM puffs organized into 16 coherent Rocky Mountain cumulus & orographic clusters,
    // with soft DEM terrain-intersection fade (wrapping naturally around peaks!) & golden sunset rim lighting!
    this.cloudGroup = new THREE.Group();
    this.cloudUniforms = {
      uTime: { value: 0.0 },
      uCloudCover: { value: 0.4 },
      uCloudLow: { value: 0.3 },
      uCloudMid: { value: 0.3 },
      uStormIntensity: { value: 0.0 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uSunDir: { value: this._sunDir.clone() },
      uSunPower: { value: 0.5 },
      uDaylight: { value: 0.8 },
      uTwilight: { value: 0.0 },
      uSmoke: { value: 0.2 },
      uExag: { value: this.state.exag },
      uZRangeKm: { value: this.zRangeKm },
      uSizeXZ: { value: new THREE.Vector2(this.sizeX, this.sizeY) },
      uDemTex: { value: this.demTex },
    };

    const CLUSTERS = 16;
    const LOBES_PER = 6;
    const COUNT = CLUSTERS * LOBES_PER; // 96 coherent multi-lobe volumetric cloud puffs
    const quad = new THREE.PlaneGeometry(1, 1, 1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index;
    geo.attributes.position = quad.attributes.position;
    geo.attributes.uv = quad.attributes.uv;

    const aOrigin = new Float32Array(COUNT * 3);
    const aCloudAttr = new Float32Array(COUNT * 4);
    const aSeed = new Float32Array(COUNT * 2);

    for (let c = 0; c < CLUSTERS; c++) {
      const isMid = c >= 8 ? 1.0 : 0.0;
      const idxInLayer = isMid > 0.5 ? (c - 8) : c;
      const layerN = 8;
      const ring = Math.sqrt((idxInLayer + 0.45) / layerN);
      const ang = idxInLayer * 2.3999632 + (isMid * 1.1) + (Math.random() - 0.5) * 0.4;
      const spread = isMid > 0.5 ? 0.68 : 0.54;
      const cx = Math.cos(ang) * ring * this.sizeX * spread;
      const cz = Math.sin(ang) * ring * this.sizeY * spread;
      const cy = isMid > 0.5 ? (3.55 + Math.random() * 0.85) : (0.60 + Math.random() * 0.85);
      const cRank = (idxInLayer + 0.5) / layerN;
      const cDrift = 0.78 + Math.random() * 0.42;

      for (let l = 0; l < LOBES_PER; l++) {
        const i = c * LOBES_PER + l;
        const isCore = l === 0;
        const lAng = (l / (LOBES_PER - 1)) * Math.PI * 2.0 + Math.random() * 0.6;
        const lRad = isCore ? 0.0 : (0.75 + Math.random() * 1.15) * (isMid > 0.5 ? 1.25 : 0.92);
        aOrigin[i * 3 + 0] = cx + Math.cos(lAng) * lRad;
        aOrigin[i * 3 + 1] = cy + (isCore ? 0.28 : (Math.random() - 0.42) * 0.38);
        aOrigin[i * 3 + 2] = cz + Math.sin(lAng) * lRad;

        const wBase = isMid > 0.5 ? (isCore ? 5.2 : 3.4 + Math.random() * 2.2) : (isCore ? 3.8 : 2.3 + Math.random() * 1.7);
        const hBase = isMid > 0.5 ? (isCore ? 2.0 : 1.3 + Math.random() * 0.7) : (isCore ? 1.75 : 1.1 + Math.random() * 0.65);
        aCloudAttr[i * 4 + 0] = wBase;
        aCloudAttr[i * 4 + 1] = hBase;
        aCloudAttr[i * 4 + 2] = Math.max(0.04, Math.min(0.98, cRank + (l - 2.5) * 0.025));
        aCloudAttr[i * 4 + 3] = isMid;

        aSeed[i * 2 + 0] = Math.random() * 53.0;
        aSeed[i * 2 + 1] = cDrift;
      }
    }
    geo.setAttribute("aOrigin", new THREE.InstancedBufferAttribute(aOrigin, 3));
    geo.setAttribute("aCloudAttr", new THREE.InstancedBufferAttribute(aCloudAttr, 4));
    geo.setAttribute("aSeed", new THREE.InstancedBufferAttribute(aSeed, 2));
    geo.instanceCount = COUNT;

    const puffMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.cloudUniforms,
      vertexShader: `
        attribute vec3 aOrigin;
        attribute vec4 aCloudAttr;
        attribute vec2 aSeed;
        uniform float uTime;
        uniform float uCloudLow;
        uniform float uCloudMid;
        uniform float uStormIntensity;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uExag;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vCenter;
        varying float vGroundY;
        varying float vOpacity;
        varying float vSeed;
        varying float vIsMid;

        void main() {
          vUv = uv;
          vSeed = aSeed.x;
          float isMid = aCloudAttr.w;
          vIsMid = isMid;
          float cover = isMid > 0.5 ? max(uCloudMid, uStormIntensity * 0.82) : max(uCloudLow, uStormIntensity * 0.78);
          float rank = aCloudAttr.z;
          float vis = smoothstep(rank - 0.18, rank + 0.14, cover * 1.12);
          if (vis < 0.01) {
            vOpacity = 0.0;
            vGroundY = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float domain = isMid > 0.5 ? 18.0 : 14.5;
          vec2 drift = uWindDir * uTime * (0.09 + 0.03 * uWindSpeed) * aSeed.y * (isMid > 0.5 ? 1.25 : 0.85);
          vec2 cxz = mod(aOrigin.xz + drift + domain * 0.5, domain) - domain * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;

          float exagOff = max(0.0, (uExag - 1.3) * 1.35);
          float cy = isMid > 0.5
            ? (aOrigin.y + 0.35 - uStormIntensity * 0.65 + exagOff)
            : max(groundY + 0.95, groundY + aOrigin.y + 0.58 - uStormIntensity * 0.25);

          vec3 center = vec3(cxz.x, cy, cxz.y);
          vCenter = center;

          vec3 viewDir = normalize(cameraPosition - center);
          vec3 worldUp = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(worldUp, viewDir));
          vec3 up = normalize(mix(worldUp, cross(viewDir, right), 0.55));

          float puffGrow = 0.84 + 0.34 * cover + 0.20 * uStormIntensity;
          vec3 wp = center + right * (position.x * aCloudAttr.x * puffGrow) + up * (position.y * aCloudAttr.y * puffGrow);
          vWorldPos = wp;

          vec2 vDemUv = clamp(wp.xz / uSizeXZ + 0.5, 0.002, 0.998);
          vGroundY = texture2D(uDemTex, vDemUv).r * uZRangeKm * uExag;

          float camDist = length(center - cameraPosition);
          float nearFade = smoothstep(0.65, 2.1, camDist);
          float edgeDom = 1.0 - smoothstep(domain * 0.34, domain * 0.52, max(abs(cxz.x), abs(cxz.y)));
          vOpacity = vis * nearFade * edgeDom * (0.34 + 0.30 * cover);
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform float uTime;
        uniform float uStormIntensity;
        uniform vec3 uSunDir;
        uniform float uSunPower;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSmoke;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vCenter;
        varying float vGroundY;
        varying float vOpacity;
        varying float vSeed;
        varying float vIsMid;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.05 + vec2(3.1, 6.7); a *= 0.5; }
          return v;
        }

        void main() {
          if (vOpacity < 0.008) discard;
          // Soft terrain-proximity fade so low orographic clouds wrap organically around mountain peaks without hard clipping!
          float peakSoft = smoothstep(-0.08, 0.52, vWorldPos.y - vGroundY);
          if (peakSoft < 0.01) discard;

          vec2 p = vUv * 2.0 - 1.0;
          float baseFlat = p.y < 0.0 ? p.y * 1.52 : p.y * 0.90;
          float radial = length(vec2(p.x * 0.94, baseFlat));
          if (radial > 1.05) discard;

          vec2 q = vUv * 3.2 + vec2(vSeed, vSeed * 0.37) + vec2(uTime * 0.022, 0.0);
          float n = fbm(q + 0.48 * vec2(fbm(q + 2.1), fbm(q + 6.4)));
          float shape = (1.0 - smoothstep(0.16, 0.98, radial)) * smoothstep(0.24, 0.78, n + (1.0 - radial) * 0.44);
          float alpha = shape * vOpacity * peakSoft;
          if (alpha < 0.005) discard;

          // Directional sunlighting across cloud lobe + powder-effect backlit silver lining!
          vec3 sDir = normalize(uSunDir);
          vec3 lobeDir = normalize(vWorldPos - vCenter + vec3(0.0, 0.25, 0.0));
          float sunSide = clamp(dot(lobeDir, sDir) * 0.5 + 0.5, 0.0, 1.0);
          float heightShade = clamp(vUv.y * 0.95 + sunSide * 0.32 - 0.15 + (n - 0.5) * 0.30, 0.0, 1.0);
          vec3 rayDir = normalize(vWorldPos - cameraPosition);
          float fwdMie = pow(max(dot(rayDir, sDir), 0.0), 6.0) * (1.0 - shape * 0.50) * uDaylight;

          // Keep water clouds crisp alpine white / silver-blue-slate (NEVER muddy brown) so they separate cleanly from valley wildfire smoke!
          vec3 fairTop = mix(vec3(0.96, 0.98, 1.00), vec3(1.00, 0.74, 0.48), uTwilight * 0.62);
          vec3 fairBot = mix(vec3(0.46, 0.55, 0.68), vec3(0.55, 0.42, 0.48), uTwilight * 0.40);
          vec3 stormTop = vec3(0.70, 0.76, 0.84);
          vec3 stormBot = vec3(0.22, 0.28, 0.38);

          vec3 topCol = mix(fairTop, stormTop, clamp(uStormIntensity * 0.80, 0.0, 1.0));
          vec3 botCol = mix(fairBot, stormBot, clamp(uStormIntensity * 0.85, 0.0, 1.0));
          vec3 dayCol = mix(botCol, topCol, heightShade * (0.40 + 0.60 * uSunPower));
          vec3 silverRim = mix(vec3(0.48, 0.54, 0.62), vec3(0.85, 0.52, 0.22), uTwilight * 0.75);
          dayCol += silverRim * fwdMie * 0.78;

          vec3 nightCol = mix(vec3(0.04, 0.07, 0.13), vec3(0.13, 0.18, 0.28), heightShade);
          vec3 col = mix(nightCol, dayCol, uDaylight);

          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    this.cloudPuffs = new THREE.Mesh(geo, puffMat);
    this.cloudPuffs.frustumCulled = false;
    this.cloudGroup.add(this.cloudPuffs);
    this.scene.add(this.cloudGroup);
  }

  _buildPrecipVolume() {
    // 32 camera-facing (Y-cylindrical billboarded) volumetric virga / rain-shaft & snow-squall curtains!
    // ZERO flat intersecting X-planes: always face the camera smoothly, emerge from the storm cloud deck,
    // and terminate cleanly at the exact DEM terrain surface (uDemTex)!
    const COUNT = 32;
    const baseQuad = new THREE.PlaneGeometry(1, 1, 1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = baseQuad.index;
    geo.attributes.position = baseQuad.attributes.position;
    geo.attributes.uv = baseQuad.attributes.uv;

    const offsets = new Float32Array(COUNT * 3);
    const params = new Float32Array(COUNT * 4); // [width, seed, speed, phase]
    for (let i = 0; i < COUNT; i++) {
      // Stratified organic coverage over the Athabasca massif & glacier valley
      const ring = Math.sqrt((i + 0.5) / COUNT);
      const ang = i * 2.3999632 + (Math.random() - 0.5) * 0.35; // golden-angle spiral
      offsets[i * 3 + 0] = Math.cos(ang) * ring * this.sizeX * 0.44;
      offsets[i * 3 + 1] = 0.0;
      offsets[i * 3 + 2] = Math.sin(ang) * ring * this.sizeY * 0.44;
      params[i * 4 + 0] = 2.6 + Math.random() * 2.2; // wide soft shaft width
      params[i * 4 + 1] = Math.random() * 19.3;
      params[i * 4 + 2] = 0.75 + Math.random() * 0.55;
      params[i * 4 + 3] = Math.random();
    }
    geo.setAttribute("aOffset", new THREE.InstancedBufferAttribute(offsets, 3));
    geo.setAttribute("aParam", new THREE.InstancedBufferAttribute(params, 4));
    geo.instanceCount = COUNT;

    this.virgaUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uSunPower: { value: 0.5 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uZRangeKm: { value: this.zRangeKm },
      uExag: { value: this.state.exag },
      uSizeXZ: { value: new THREE.Vector2(this.sizeX, this.sizeY) },
      uDemTex: { value: this.demTex },
      uCloudTopY: { value: 3.4 },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.virgaUniforms,
      vertexShader: `
        attribute vec3 aOffset;
        attribute vec4 aParam;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uExag;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform float uCloudTopY;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vGroundY;
        varying float vSeed;
        varying float vWindScreenX;

        void main() {
          vUv = uv;
          vSeed = aParam.y;
          // Drift each storm shaft slowly with the wind inside the 11x11 km domain
          vec2 drift = uWindDir * uTime * (0.08 + 0.025 * uWindSpeed) * aParam.z;
          vec2 cxz = mod(aOffset.xz + drift + uSizeXZ * 0.5, uSizeXZ) - uSizeXZ * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float topY = max(groundY + 0.55, uCloudTopY);
          float h = topY - groundY;
          float centerY = groundY + h * 0.5;

          // Cylindrical billboard around Y axis so shafts NEVER show a flat edge when orbiting
          vec3 toCam = vec3(cameraPosition.x - cxz.x, 0.0, cameraPosition.z - cxz.y);
          vec3 fwd = length(toCam) > 0.001 ? normalize(toCam) : vec3(0.0, 0.0, 1.0);
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));

          // Project horizontal wind onto billboard right axis so streaks visibly slant downwind!
          vWindScreenX = dot(vec3(uWindDir.x, 0.0, uWindDir.y), right) * clamp(uWindSpeed / 8.0, 0.15, 1.4);

          vec3 worldPos = vec3(cxz.x, centerY, cxz.y)
            + right * (position.x * aParam.x)
            + vec3(0.0, position.y * h, 0.0);

          // Sample exact terrain under this vertex for clean ground contact
          vec2 vDemUv = clamp(worldPos.xz / uSizeXZ + 0.5, 0.002, 0.998);
          vGroundY = texture2D(uDemTex, vDemUv).r * uZRangeKm * uExag;
          vWorldPos = worldPos;
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uSunPower;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uExag;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vGroundY;
        varying float vSeed;
        varying float vWindScreenX;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.05 + vec2(3.7, 9.1); a *= 0.5; }
          return v;
        }

        void main() {
          if (uIntensity < 0.03) discard;
          // Stop cleanly right at the glacier / mountain terrain surface
          float aboveGround = vWorldPos.y - vGroundY;
          if (aboveGround < -0.02) discard;
          float groundSoft = smoothstep(-0.02, 0.14, aboveGround);

          // Fade close to camera so first-person immersion uses crisp near-field streaks & flakes
          float camDist = length(vWorldPos - cameraPosition);
          float nearFade = smoothstep(0.95, 2.8, camDist);

          // Soft radial horizontal and vertical envelope (zero rectangular edges)
          float envX = pow(sin(clamp(vUv.x, 0.0, 1.0) * 3.14159265), 1.75);
          float envY = smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.72, 1.0, vUv.y));

          float worldElevM = uZMinM + (vWorldPos.y / max(uExag, 0.1)) * 1000.0;
          float isSnowZone = smoothstep(uRainSnowM - 120.0, uRainSnowM + 140.0, worldElevM);

          // Fine slanted rain virga filaments (fast downward motion)
          float slant = vWindScreenX * 0.34;
          vec2 rainP = vec2((vUv.x - vUv.y * slant) * 16.0 + vSeed, vUv.y * 2.0 + uTime * 2.4);
          float rainFilaments = fbm(rainP) * 0.65 + noise(rainP * vec2(2.6, 1.3) + vec2(4.2, uTime * 3.8)) * 0.35;
          float rainMask = smoothstep(0.30, 0.80, rainFilaments);

          // Soft turbulent billowing snow squall curtain above Jennings snowline (slower, cloudier, airy)
          vec2 snowP = vec2((vUv.x - vUv.y * slant * 1.4) * 5.5 + vSeed * 1.3 - uTime * vWindScreenX * 0.35, vUv.y * 3.2 + uTime * 0.65);
          float snowVeil = fbm(snowP + 0.45 * vec2(noise(snowP * 1.7), noise(snowP * 1.7 + 5.2)));
          float snowMask = smoothstep(0.24, 0.78, snowVeil);

          float pattern = mix(rainMask, snowMask, isSnowZone);
          float baseOp = mix(0.16, 0.26, isSnowZone) * clamp(uIntensity * 0.85, 0.0, 1.0);
          float alpha = pattern * envX * envY * groundSoft * nearFade * baseOp;
          if (alpha < 0.003) discard;

          // Rain virga = cool translucent slate-blue veil; snow squall = bright frosty alpine whiteout
          vec3 rainCol = mix(vec3(0.32, 0.40, 0.50), vec3(0.62, 0.70, 0.79), 0.25 + 0.55 * uSunPower);
          vec3 snowCol = mix(vec3(0.58, 0.65, 0.74), vec3(0.90, 0.94, 0.98), 0.30 + 0.65 * uSunPower);
          vec3 col = mix(rainCol, snowCol, isSnowZone);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    this.virgaMesh = new THREE.Mesh(geo, mat);
    this.virgaMesh.frustumCulled = false;
    this.scene.add(this.virgaMesh);
  }

  _buildValleyMistAndSpindrift() {
    // 3 terrain-draped low-altitude atmospheric layers:
    // - Below Jennings line during rain: soft valley rain-mist / low scud clinging to the ice & moraines
    // - Above Jennings line during snow: fast wind-whipped alpine spindrift (poudrerie) over ridges!
    this.mistGroup = new THREE.Group();
    this.mistUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uSunPower: { value: 0.5 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uExag: { value: this.state.exag },
    };

    const S = 64;
    const basePos = new Float32Array(S * S * 3);
    const baseDem = new Float32Array(S * S);
    const uvs = new Float32Array(S * S * 2);
    for (let r = 0; r < S; r++) {
      const v = r / (S - 1), z = (v - 0.5) * this.sizeY * 0.98;
      for (let c = 0; c < S; c++) {
        const u = c / (S - 1), x = (u - 0.5) * this.sizeX * 0.98;
        const idx = r * S + c;
        basePos[idx * 3 + 0] = x; basePos[idx * 3 + 1] = 0; basePos[idx * 3 + 2] = z;
        baseDem[idx] = this._sampleDemXZ(x, z);
        uvs[idx * 2 + 0] = u; uvs[idx * 2 + 1] = v;
      }
    }
    const idxArr = [];
    for (let r = 0; r < S - 1; r++) {
      for (let c = 0; c < S - 1; c++) {
        const a = r * S + c, b = a + 1, cc = a + S, d = cc + 1;
        idxArr.push(a, cc, d, a, d, b);
      }
    }
    const sharedGeo = new THREE.BufferGeometry();
    sharedGeo.setAttribute("position", new THREE.BufferAttribute(basePos, 3));
    sharedGeo.setAttribute("aDemY0", new THREE.BufferAttribute(baseDem, 1));
    sharedGeo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    sharedGeo.setIndex(idxArr);

    const strata = [
      { heightAbove: 0.08, alpha: 0.24, scale: 3.6, speed: 0.28, seed: 2.1 },
      { heightAbove: 0.22, alpha: 0.20, scale: 2.8, speed: 0.36, seed: 6.4 },
      { heightAbove: 0.42, alpha: 0.16, scale: 2.2, speed: 0.44, seed: 11.7 },
    ];

    strata.forEach((cfg) => {
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          ...this.mistUniforms,
          uHeightAbove: { value: cfg.heightAbove },
          uLayerAlpha: { value: cfg.alpha },
          uScale: { value: cfg.scale },
          uSpeed: { value: cfg.speed },
          uSeed: { value: cfg.seed },
        },
        vertexShader: `
          attribute float aDemY0;
          uniform float uExag;
          uniform float uHeightAbove;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevM;
          uniform float uZMinM;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.y = aDemY0 * uExag + uHeightAbove;
            vElevM = uZMinM + aDemY0 * 1000.0;
            vec4 wp = modelMatrix * vec4(pos, 1.0);
            vWorldPos = wp.xyz;
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float uTime;
          uniform float uIntensity;
          uniform float uSunPower;
          uniform vec2 uWindDir;
          uniform float uWindSpeed;
          uniform float uRainSnowM;
          uniform float uLayerAlpha;
          uniform float uScale;
          uniform float uSpeed;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevM;

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
          }
          float fbm(vec2 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(7.1, 3.9); a *= 0.5; }
            return v;
          }
          void main() {
            if (uIntensity < 0.03) discard;
            float camDist = length(vWorldPos - cameraPosition);
            float nearFade = smoothstep(0.35, 1.45, camDist);
            vec2 c = vUv * 2.0 - 1.0;
            float edge = 1.0 - smoothstep(0.45, 0.96, max(abs(c.x), abs(c.y)) * 0.55 + length(c) * 0.55);

            float isSnowZone = smoothstep(uRainSnowM - 100.0, uRainSnowM + 140.0, vElevM);
            // Stretch snow spindrift along wind direction; keep rain mist softly pooled in valley
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);
            vec2 uvWind = vec2(dot(vUv, uWindDir), dot(vUv, wPerp));
            vec2 drift = vec2(uTime * uSpeed * (0.55 + 0.16 * uWindSpeed), 0.0);

            vec2 qRain = vUv * uScale - uWindDir * uTime * uSpeed * 0.45 + vec2(uSeed);
            float rainMist = smoothstep(0.36, 0.80, fbm(qRain));

            vec2 qSpin = vec2(uvWind.x * uScale * 0.85 - drift.x * 1.4, uvWind.y * uScale * 2.4) + vec2(uSeed);
            float spindrift = smoothstep(0.34, 0.78, fbm(qSpin));

            float n = mix(rainMist * 0.78, spindrift * 1.15, isSnowZone);
            float alpha = n * edge * nearFade * clamp(uIntensity * 0.85, 0.0, 1.0) * uLayerAlpha;
            if (alpha < 0.004) discard;

            vec3 mistCol = mix(vec3(0.40, 0.48, 0.57), vec3(0.72, 0.79, 0.86), 0.25 + 0.55 * uSunPower);
            vec3 spinCol = mix(vec3(0.68, 0.74, 0.82), vec3(0.94, 0.97, 1.00), 0.35 + 0.60 * uSunPower);
            gl_FragColor = vec4(mix(mistCol, spinCol, isSnowZone), alpha);
          }
        `,
      });
      this.mistGroup.add(new THREE.Mesh(sharedGeo, mat));
    });
    this.scene.add(this.mistGroup);
  }

  _buildRealisticNearRain() {
    // 6,000 instanced, velocity-aligned, camera-billboarded translucent raindrop streaks!
    // ONLY visible when zoomed close / immersed ("Sur le glacier", uImmersion > 0) — ZERO giant 400 m sticks in Bloc 3D!
    const COUNT = 6000;
    const quad = new THREE.PlaneGeometry(1, 1, 1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index;
    geo.attributes.position = quad.attributes.position;
    geo.attributes.uv = quad.attributes.uv;

    const aBoxPos = new Float32Array(COUNT * 3);
    const aSeed = new Float32Array(COUNT * 4); // [activeThreshold, speed, lengthMul, widthMul]
    for (let i = 0; i < COUNT; i++) {
      aBoxPos[i * 3 + 0] = (Math.random() - 0.5) * 3.4;
      aBoxPos[i * 3 + 1] = Math.random();
      aBoxPos[i * 3 + 2] = (Math.random() - 0.5) * 3.4;
      aSeed[i * 4 + 0] = Math.random();
      aSeed[i * 4 + 1] = 0.78 + Math.random() * 0.62;
      aSeed[i * 4 + 2] = 0.65 + Math.random() * 0.90;
      aSeed[i * 4 + 3] = 0.65 + Math.random() * 0.75;
    }
    geo.setAttribute("aBoxPos", new THREE.InstancedBufferAttribute(aBoxPos, 3));
    geo.setAttribute("aSeed", new THREE.InstancedBufferAttribute(aSeed, 4));
    geo.instanceCount = COUNT;

    this.rainUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uImmersion: { value: 0.0 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uZRangeKm: { value: this.zRangeKm },
      uSizeXZ: { value: new THREE.Vector2(this.sizeX, this.sizeY) },
      uDemTex: { value: this.demTex },
      uCamFocus: { value: new THREE.Vector3(0, 1.0, 0) },
      uSunPower: { value: 0.5 },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.rainUniforms,
      vertexShader: `
        attribute vec3 aBoxPos;
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uImmersion;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform vec3 uCamFocus;
        varying vec2 vUv;
        varying float vAlpha;

        void main() {
          vUv = uv;
          float active = step(aSeed.x, clamp(uIntensity * 0.95, 0.0, 1.0));
          if (active < 0.5 || uImmersion < 0.01 || uIntensity < 0.02) {
            vAlpha = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          // Swift realistic terminal velocity of alpine rain streaks!
          float boxW = 3.4;
          float boxH = 2.0;
          float t = fract(aBoxPos.y + uTime * (2.9 + 1.5 * aSeed.y));
          vec2 drift = uWindDir * uTime * (0.55 + 0.18 * uWindSpeed);
          float wx = mod(aBoxPos.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x;
          float wz = mod(aBoxPos.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z;
          float wy = uCamFocus.y + (0.62 - t) * boxH;
          vec3 center = vec3(wx, wy, wz);

          // Sample exact terrain height -> rain stops strictly at the glacier surface!
          vec2 demUv = clamp(center.xz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float aboveGround = smoothstep(0.0, 0.06, center.y - groundY);

          // Rain strictly below Jennings rain-snow elevation
          float ptElevM = uZMinM + (center.y / max(uExag, 0.1)) * 1000.0;
          float rainZone = 1.0 - smoothstep(uRainSnowM - 70.0, uRainSnowM + 110.0, ptElevM);

          float camDist = length(center - cameraPosition);
          float distFade = smoothstep(0.14, 0.42, camDist) * (1.0 - smoothstep(1.9, 3.0, camDist));
          float fadeV = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.92, 1.0, t));

          // Velocity-aligned rain streak billboarded smoothly toward camera
          vec3 velDir = normalize(vec3(uWindDir.x * (0.045 * uWindSpeed), -1.0, uWindDir.y * (0.045 * uWindSpeed)));
          vec3 viewVec = normalize(cameraPosition - center);
          vec3 side = normalize(cross(velDir, viewVec));

          float streakLen = (0.055 + 0.055 * aSeed.z) * (0.85 + 0.25 * clamp(uIntensity, 0.0, 1.2));
          float streakW = (0.0022 + 0.0018 * aSeed.w) * (0.7 + 0.4 * camDist);

          vec3 worldPos = center + side * (position.x * streakW) - velDir * (position.y * streakLen);

          // Grazing backlight shimmer
          vAlpha = active * aboveGround * rainZone * distFade * fadeV * uImmersion * clamp(uIntensity * 0.48, 0.0, 0.44);
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uSunPower;
        varying vec2 vUv;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.005) discard;
          // Smooth Gaussian cross-section across streak width + crisp droplet head tapering softly up the tail!
          float across = exp(-pow((vUv.x - 0.5) * 3.4, 2.0));
          float along = smoothstep(0.0, 0.18, vUv.y) * (1.0 - smoothstep(0.08, 1.0, vUv.y));
          float headGlint = (1.0 - smoothstep(0.06, 0.35, vUv.y)) * 0.45;
          float a = across * (along + headGlint) * vAlpha;
          if (a < 0.004) discard;
          vec3 col = mix(vec3(0.64, 0.76, 0.88), vec3(0.92, 0.96, 1.0), 0.30 + 0.65 * uSunPower);
          gl_FragColor = vec4(col, a);
        }
      `,
    });

    this.rainLines = new THREE.Mesh(geo, mat);
    this.rainLines.frustumCulled = false;
    this.scene.add(this.rainLines);
  }

  _makeSnowflakeAtlas() {
    // 2x2 atlas of 4 organic snowflake silhouettes (soft powder cluster, fine speck, delicate crystal, soft bokeh flake)
    const c = document.createElement("canvas");
    c.width = 128; c.height = 128;
    const ctx = c.getContext("2d");

    const drawCell = (ox, oy, fn) => {
      ctx.save();
      ctx.translate(ox + 32, oy + 32);
      fn();
      ctx.restore();
    };

    // 0: Soft irregular clumped snow flurry
    drawCell(0, 0, () => {
      const pts = [[0, 0, 14, 0.85], [-6, -4, 11, 0.55], [7, -2, 10, 0.52], [-2, 7, 10, 0.50], [5, 6, 9, 0.45]];
      pts.forEach(([x, y, r, a]) => {
        const g = ctx.createRadialGradient(x, y, 0.5, x, y, r);
        g.addColorStop(0, `rgba(255,255,255,${a})`);
        g.addColorStop(0.55, `rgba(232,242,255,${a * 0.45})`);
        g.addColorStop(1, "rgba(220,236,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      });
    });

    // 1: Crisp tiny fine alpine powder grain
    drawCell(64, 0, () => {
      const g = ctx.createRadialGradient(0, 0, 0.5, 0, 0, 14);
      g.addColorStop(0, "rgba(255,255,255,0.95)");
      g.addColorStop(0.35, "rgba(240,248,255,0.65)");
      g.addColorStop(0.75, "rgba(220,235,250,0.14)");
      g.addColorStop(1, "rgba(210,230,250,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
    });

    // 2: Soft feathery 6-ray snow crystal (subtle, blurred)
    drawCell(0, 64, () => {
      const g = ctx.createRadialGradient(0, 0, 1, 0, 0, 22);
      g.addColorStop(0, "rgba(255,255,255,0.85)");
      g.addColorStop(0.45, "rgba(235,244,255,0.36)");
      g.addColorStop(1, "rgba(220,235,250,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(0, 0, 22, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.42)";
      ctx.lineWidth = 2.0;
      ctx.lineCap = "round";
      for (let i = 0; i < 3; i++) {
        ctx.beginPath(); ctx.moveTo(-14, 0); ctx.lineTo(14, 0); ctx.stroke();
        ctx.rotate(Math.PI / 3);
      }
    });

    // 3: Ultra-soft foreground depth-of-field bokeh flake
    drawCell(64, 64, () => {
      const g = ctx.createRadialGradient(0, 0, 2, 0, 0, 26);
      g.addColorStop(0, "rgba(250,253,255,0.48)");
      g.addColorStop(0.50, "rgba(235,244,255,0.28)");
      g.addColorStop(0.82, "rgba(225,238,252,0.08)");
      g.addColorStop(1, "rgba(220,236,250,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(0, 0, 26, 0, Math.PI * 2); ctx.fill();
    });

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _buildRealisticSnow() {
    // 10,500 organic snowflakes:
    // - 7,000 near-camera fluttering flakes (ONLY visible when immersed / zoomed close, uImmersion > 0!)
    // - 3,500 delicate mid-altitude powder shimmer over upper glacier (tiny realistic size, fades completely in distant Bloc 3D!)
    const NEAR = 7000;
    const MID = 3500;
    const TOTAL = NEAR + MID;
    const pos = new Float32Array(TOTAL * 3);
    const seed = new Float32Array(TOTAL * 4); // [activeThresh, speed, sizeSkew, isNear]
    const variant = new Float32Array(TOTAL);  // 0..3 atlas cell + rotation seed

    for (let i = 0; i < TOTAL; i++) {
      const isNear = i < NEAR ? 1.0 : 0.0;
      pos[i * 3 + 0] = isNear ? (Math.random() - 0.5) * 4.0 : (Math.random() - 0.5) * this.sizeX * 0.90;
      pos[i * 3 + 1] = Math.random();
      pos[i * 3 + 2] = isNear ? (Math.random() - 0.5) * 4.0 : (Math.random() - 0.5) * this.sizeY * 0.90;
      seed[i * 4 + 0] = Math.random();
      seed[i * 4 + 1] = 0.45 + Math.random() * 0.85;
      // Skewed natural flake distribution: mostly delicate small grains, occasional larger close bokeh flake
      seed[i * 4 + 2] = 0.45 + Math.pow(Math.random(), 2.2) * 1.45;
      seed[i * 4 + 3] = isNear;
      variant[i] = Math.floor(Math.random() * 4) + Math.random() * 0.99;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));
    geo.setAttribute("aVariant", new THREE.BufferAttribute(variant, 1));

    const flakeTex = this._makeSnowflakeAtlas();
    this.snowUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uImmersion: { value: 0.0 },
      uMidVisible: { value: 0.0 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uZRangeKm: { value: this.zRangeKm },
      uSizeXZ: { value: new THREE.Vector2(this.sizeX, this.sizeY) },
      uDemTex: { value: this.demTex },
      uCamFocus: { value: new THREE.Vector3(0, 1.2, 0) },
      uSunPower: { value: 0.5 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
      uFlakeTex: { value: flakeTex },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.snowUniforms,
      vertexShader: `
        attribute vec4 aSeed;
        attribute float aVariant;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uImmersion;
        uniform float uMidVisible;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform vec3 uCamFocus;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vVariant;
        varying float vRot;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.96, 0.0, 1.0));
          float isNear = aSeed.w;
          float scaleGate = isNear > 0.5 ? uImmersion : uMidVisible;
          if (active < 0.5 || scaleGate < 0.01 || uIntensity < 0.02) {
            vAlpha = 0.0;
            gl_PointSize = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float t = fract(position.y + uTime * (isNear > 0.5 ? 0.22 : 0.14) * aSeed.y);

          // Multi-frequency turbulent 3D curl flutter (organic swirling snow!)
          float ph1 = aSeed.x * 61.7;
          float ph2 = aSeed.y * 37.3;
          vec2 flutter = vec2(
            sin(uTime * 1.65 + ph1 + t * 7.2) + 0.55 * cos(uTime * 2.9 + ph2),
            cos(uTime * 1.45 + ph2 + t * 6.8) + 0.55 * sin(uTime * 2.6 + ph1)
          ) * (isNear > 0.5 ? 0.095 : 0.18);

          vec3 p;
          if (isNear > 0.5) {
            float boxW = 4.0;
            float boxH = 2.4;
            vec2 drift = uWindDir * uTime * (0.20 + 0.08 * uWindSpeed);
            float wx = mod(position.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x + flutter.x;
            float wz = mod(position.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z + flutter.y;
            float wy = uCamFocus.y + (0.58 - t) * boxH;
            p = vec3(wx, wy, wz);
          } else {
            float topY = 3.25 + max(0.0, (uExag - 1.3) * 1.3);
            float wy = mix(topY, 0.35, t);
            vec2 drift = uWindDir * t * (0.55 + 0.16 * uWindSpeed);
            float wx = mod(position.x + drift.x + flutter.x + 5.5, 11.0) - 5.5;
            float wz = mod(position.z + drift.y + flutter.y + 5.5, 11.0) - 5.5;
            p = vec3(wx, wy, wz);
          }

          // Stop snowflakes cleanly at the glacier / mountain terrain surface!
          vec2 demUv = clamp(p.xz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float aboveGround = smoothstep(0.0, 0.07, p.y - groundY);

          // Snow ONLY exists above the live Jennings rain-snow elevation!
          float ptElevM = uZMinM + (p.y / max(uExag, 0.1)) * 1000.0;
          float snowZone = smoothstep(uRainSnowM - 95.0, uRainSnowM + 100.0, ptElevM);
          float inBlock = step(abs(p.x), 5.6) * step(abs(p.z), 5.6);

          float camDist = length(p - cameraPosition);
          float distFade = isNear > 0.5
            ? smoothstep(0.16, 0.55, camDist) * (1.0 - smoothstep(2.2, 3.4, camDist))
            : smoothstep(1.4, 3.2, camDist) * (1.0 - smoothstep(8.5, 12.0, camDist));

          float fadeV = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.88, 1.0, t));
          float opacity = isNear > 0.5 ? 0.78 : 0.42;
          vAlpha = active * scaleGate * aboveGround * inBlock * snowZone * distFade * fadeV * clamp(uIntensity * 0.95, 0.0, 1.0) * opacity;
          vVariant = floor(aVariant);
          vRot = uTime * (0.7 + fract(aVariant) * 1.4) + ph1;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;

          // Strictly realistic physical scaling — NO giant 22px floating balls from afar!
          float rawSz = isNear > 0.5
            ? (3.2 * aSeed.z * uPixelRatio) * (2.2 / max(-mv.z, 0.45))
            : (2.2 * aSeed.z * uPixelRatio) * (5.5 / max(-mv.z, 1.8));
          float maxPx = isNear > 0.5 ? (10.5 * uPixelRatio) : (3.6 * uPixelRatio);
          gl_PointSize = clamp(rawSz, 1.3 * uPixelRatio, maxPx) * step(0.008, vAlpha);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform sampler2D uFlakeTex;
        uniform float uSunPower;
        varying float vAlpha;
        varying float vVariant;
        varying float vRot;
        void main() {
          if (vAlpha < 0.008) discard;
          // Rotate sprite gently for organic fluttering look
          vec2 p = gl_PointCoord - 0.5;
          float c = cos(vRot), s = sin(vRot);
          vec2 rp = vec2(p.x * c - p.y * s, p.x * s + p.y * c) + 0.5;
          if (rp.x < 0.0 || rp.x > 1.0 || rp.y < 0.0 || rp.y > 1.0) discard;

          float colIdx = mod(vVariant, 2.0);
          float rowIdx = floor(vVariant * 0.5);
          vec2 atlasUv = (rp + vec2(colIdx, rowIdx)) * 0.5;
          vec4 tex = texture2D(uFlakeTex, atlasUv);
          if (tex.a < 0.02) discard;

          vec3 col = mix(vec3(0.68, 0.76, 0.86), vec3(0.95, 0.97, 1.0), 0.30 + 0.65 * uSunPower);
          gl_FragColor = vec4(col, tex.a * vAlpha);
        }
      `,
    });

    this.snowPoints = new THREE.Points(geo, mat);
    this.snowPoints.frustumCulled = false;
    this.scene.add(this.snowPoints);
  }

  _initCameraPresets() {
    // Exact Athabasca Glacier tongue AWS immersion height (~2,180 m -> ~0.31 km above 1,867 m min)
    const awsY0 = this._sampleDemXZ(1.15, -1.45);
    // Exact Skaping Columbia Icefield webcam tripod GPS (52.220252 N, -117.224694 W -> x=+2.55, z=-3.14 km)
    const webY0 = this._sampleDemXZ(2.55, -3.14);
    this.presets = {
      block:     { pos: new THREE.Vector3(9.4, 8.5, -10.3),  target: new THREE.Vector3(0.0, 0.55, 0.15),  fov: 38 },
      webcam:    { pos: new THREE.Vector3(2.55, webY0 * 1.3 + 0.14, -3.14), target: new THREE.Vector3(2.35, webY0 * 1.3 + 0.72, 1.25), fov: 52 },
      onglacier: { pos: new THREE.Vector3(1.15, awsY0 * 1.3 + 0.22, -1.45), target: new THREE.Vector3(-1.35, awsY0 * 1.3 + 0.72, 1.25), fov: 50 },
      flyover:   { pos: new THREE.Vector3(3.6, 2.35, -5.2),  target: new THREE.Vector3(-0.6, 1.05, 0.8),  fov: 44 },
      plateau:   { pos: new THREE.Vector3(-8.2, 7.6, 8.8),   target: new THREE.Vector3(-0.6, 1.05, 0.2),  fov: 38 },
      top:       { pos: new THREE.Vector3(0.05, 17.5, -0.8), target: new THREE.Vector3(0.0, 0.4, 0.0),    fov: 38 },
    };
  }

  setExaggeration(exag) {
    this.state.exag = exag;
    const pos = this.terrainGeo.attributes.position;
    const base = this.terrainGeo.attributes.aBaseElev;
    for (let i = 0; i < pos.count; i++) pos.setY(i, base.getX(i) * exag);
    pos.needsUpdate = true;
    this.terrainGeo.computeVertexNormals();

    const sp = this.skirtGeo.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      const b = this.skirtBaseRim[i];
      if (b >= 0.0) sp.setY(i, b * exag);
    }
    sp.needsUpdate = true;

    this.terrainUniforms.uExag.value = exag;
    this.cloudUniforms.uExag.value = exag;
    this.virgaUniforms.uExag.value = exag;
    this.mistUniforms.uExag.value = exag;
    this.rainUniforms.uExag.value = exag;
    this.snowUniforms.uExag.value = exag;
    if (this.ringGeo) {
      const rp = this.ringGeo.attributes.position;
      const rb = this.ringGeo.attributes.aBaseElev;
      for (let i = 0; i < rp.count; i++) rp.setY(i, rb.getX(i) * exag);
      rp.needsUpdate = true;
      this.ringGeo.computeVertexNormals();
      this.ringUniforms.uExag.value = exag;
    }
    this._syncCloudCeiling();

    // Keep on-glacier & webcam camera preset heights synced with new relief exaggeration
    const awsY0 = this._sampleDemXZ(1.15, -1.45);
    this.presets.onglacier.pos.y = awsY0 * exag + 0.22;
    this.presets.onglacier.target.y = awsY0 * exag + 0.72;
    const webY0 = this._sampleDemXZ(2.55, -3.14);
    this.presets.webcam.pos.y = webY0 * exag + 0.14;
    this.presets.webcam.target.y = webY0 * exag + 0.68;
  }

  _syncCloudCeiling() {
    const storm = Math.min(1.0, this.state.precipMmH / 2.2);
    const exagOff = Math.max(0, (this.state.exag - 1.3) * 1.35);
    this.cloudUniforms.uStormIntensity.value = storm;
    this.virgaUniforms.uCloudTopY.value = 3.55 - storm * 0.72 + exagOff;
  }

  setMode(mode) { this.state.mode = mode; this.terrainUniforms.uMode.value = mode; }
  setContours(on) { this.state.contours = on; this.terrainUniforms.uContours.value = on ? 1.0 : 0.0; }
  setShowSmoke(on) {
    this.state.showSmoke = on;
    this._updateSolarAndAtmosphere();
  }
  setShowClouds(on) {
    this.state.showClouds = on;
    this.cloudGroup.visible = on;
    this.skyUniforms.uShowClouds.value = on ? 1.0 : 0.0;
    this._updateSolarAndAtmosphere();
  }
  setShowSunArc(on) {
    this.state.showSunArc = on;
    this.sunGroup.visible = on;
  }
  setShowHorizon(on) {
    this.state.showHorizon = on;
  }
  setShowPrecip(on) {
    this.state.showPrecip = on;
    this.virgaMesh.visible = on;
    this.mistGroup.visible = on;
    this.rainLines.visible = on;
    this.snowPoints.visible = on;
  }
  setShowIsotherm(on) { this.state.showIsotherm = on; this.terrainUniforms.uShowIsotherm.value = on ? 1.0 : 0.0; }
  setShadows(on) { this.state.shadows = on; this.sunLight.castShadow = on; this.renderer.shadowMap.enabled = on; }
  setBoost(boost) { this.state.boost = boost; this.terrainUniforms.uDepBoost.value = boost; }
  setCompareClean(clean) {
    this.state.compareClean = clean;
    this._syncSurfaceUniforms();
    this._updateSolarAndAtmosphere();
  }

  setMeteorology({
    hour,
    depCumFrac,
    plumeDensity,
    cloudCover,
    cloudLow,
    cloudMid,
    cloudHigh,
    sunTrans,
    precipMmH,
    rainSnowM,
    snowLineM,
    snowPackMm,
    windSpeed,
    windBearingDeg,
    swIn,
    lwIn,
    wetFrac,
    totalDepMgM2,
  }) {
    this.state.hour = hour;
    this.state.depProgress = depCumFrac;
    this.state.plumeDensity = plumeDensity;
    this.state.cloudCover = cloudCover;
    this.state.cloudLow = cloudLow ?? cloudCover;
    this.state.cloudMid = cloudMid ?? cloudCover * 0.85;
    this.state.cloudHigh = cloudHigh ?? cloudCover * 0.6;
    this.state.sunTrans = sunTrans ?? 0.85;
    this.state.precipMmH = precipMmH;
    this.state.rainSnowM = rainSnowM;
    this.state.snowLineM = snowLineM ?? rainSnowM;
    this.state.snowPackMm = snowPackMm;
    this.state.windSpeed = windSpeed;
    this.state.windBearingDeg = windBearingDeg;
    this.state.swIn = swIn;
    this.state.lwIn = lwIn;
    this.state.wetFrac = wetFrac;
    this.state.totalDepMgM2 = totalDepMgM2;

    const towardRad = ((windBearingDeg + 180) * Math.PI) / 180;
    const wx = Math.sin(towardRad), wz = -Math.cos(towardRad);

    this.terrainUniforms.uWindDir.value.set(wx, wz);
    this.skyUniforms.uWindDir.value.set(wx, wz);
    this.cloudUniforms.uWindDir.value.set(wx, wz);
    this.virgaUniforms.uWindDir.value.set(wx, wz);
    this.mistUniforms.uWindDir.value.set(wx, wz);
    this.rainUniforms.uWindDir.value.set(wx, wz);
    this.snowUniforms.uWindDir.value.set(wx, wz);

    this.cloudUniforms.uCloudCover.value = cloudCover;
    this.cloudUniforms.uCloudLow.value = this.state.cloudLow;
    this.cloudUniforms.uCloudMid.value = this.state.cloudMid;
    this.cloudUniforms.uWindSpeed.value = windSpeed;

    const pNorm = Math.min(1.5, precipMmH / 2.0);
    this.virgaUniforms.uIntensity.value = pNorm;
    this.virgaUniforms.uWindSpeed.value = windSpeed;
    this.virgaUniforms.uRainSnowM.value = rainSnowM;

    this.mistUniforms.uIntensity.value = pNorm;
    this.mistUniforms.uWindSpeed.value = windSpeed;
    this.mistUniforms.uRainSnowM.value = rainSnowM;

    this.rainUniforms.uIntensity.value = pNorm;
    this.rainUniforms.uWindSpeed.value = windSpeed;
    this.rainUniforms.uRainSnowM.value = rainSnowM;

    this.snowUniforms.uIntensity.value = pNorm;
    this.snowUniforms.uWindSpeed.value = windSpeed;
    this.snowUniforms.uRainSnowM.value = rainSnowM;

    this._syncCloudCeiling();
    this._syncSurfaceUniforms();
    this._updateSolarAndAtmosphere();
  }

  _syncSurfaceUniforms() {
    this.terrainUniforms.uDepCumFrac.value = this.state.compareClean ? 0.0 : this.state.depProgress;
    this.terrainUniforms.uRainSnowM.value = this.state.rainSnowM;
    this.terrainUniforms.uSnowLineM.value = this.state.compareClean ? 3600.0 : this.state.snowLineM;
    this.terrainUniforms.uSnowPackMm.value = this.state.compareClean ? 0.0 : this.state.snowPackMm;
    this.terrainUniforms.uRainIntensity.value = Math.min(1.5, this.state.precipMmH / 2.0);
    if (this.ringUniforms) {
      this.ringUniforms.uSnowLineM.value = this.terrainUniforms.uSnowLineM.value;
      this.ringUniforms.uSnowPackMm.value = this.terrainUniforms.uSnowPackMm.value;
    }
  }

  _updateSolarAndAtmosphere() {
    // True August solar trajectory at 52.2 deg N (sunrise ~06:25, solar noon ~13:30, sunset ~20:35)
    const h = this.state.hour;
    const dayPhase = Math.max(-1.15, Math.min(1.15, (h - 13.5) / 7.1));
    const azDeg = 180 + dayPhase * 110;
    const rawEl = Math.cos(Math.max(-1, Math.min(1, dayPhase)) * Math.PI * 0.5) * 47.0 - (Math.abs(dayPhase) > 1 ? 8 : 0);
    const lightEl = Math.max(9.0, rawEl);

    const azR = (azDeg * Math.PI) / 180;
    const skyElR = (Math.max(-6, rawEl) * Math.PI) / 180;
    const lightElR = (lightEl * Math.PI) / 180;

    this._sunDir.set(
      Math.cos(skyElR) * Math.sin(azR),
      Math.sin(skyElR),
      -Math.cos(skyElR) * Math.cos(azR)
    ).normalize();

    const dist = 22.0;
    this.sunLight.position.set(
      dist * Math.cos(lightElR) * Math.sin(azR),
      dist * Math.sin(lightElR),
      -dist * Math.cos(lightElR) * Math.cos(azR)
    );
    this.cloudUniforms.uSunDir.value.copy(this._sunDir);
    this.skyUniforms.uSunDir.value.copy(this._sunDir);

    const swNorm = Math.max(0.0, Math.min(1.0, this.state.swIn / 760.0));
    const trans = Math.max(0.05, Math.min(1.0, this.state.sunTrans ?? swNorm));
    const dayFactor = Math.max(0.0, Math.min(1.0, (rawEl + 5.0) / 14.0));
    const twilight = Math.max(0.0, 1.0 - Math.abs(rawEl - 3.0) / 10.0) * dayFactor;
    const smoke = this.state.showSmoke ? this.state.plumeDensity : 0.0;
    const cloud = this.state.showClouds ? this.state.cloudCover : 0.0;

    this.skyUniforms.uDaylight.value = dayFactor;
    this.skyUniforms.uTwilight.value = twilight;
    this.skyUniforms.uSmoke.value = this.state.compareClean ? 0.0 : smoke;
    this.skyUniforms.uCloud.value = cloud;
    this.skyUniforms.uCloudMid.value = this.state.showClouds ? this.state.cloudMid : 0.0;
    this.skyUniforms.uCloudHigh.value = this.state.showClouds ? this.state.cloudHigh : 0.0;
    this.skyUniforms.uSwNorm.value = trans;

    this.cloudUniforms.uDaylight.value = dayFactor;
    this.cloudUniforms.uTwilight.value = twilight;
    this.cloudUniforms.uSmoke.value = smoke;

    const arcR = 7.4;
    const orbEl = (Math.max(1.0, rawEl * 0.82) * Math.PI) / 180;
    this.sunOrb.position.set(
      arcR * Math.cos(orbEl) * Math.sin(azR),
      0.55 + arcR * Math.sin(orbEl) * 0.62,
      -arcR * Math.cos(orbEl) * Math.cos(azR)
    );
    this.sunOrbUniforms.uSunTrans.value = trans;
    this.sunOrbUniforms.uSmoke.value = smoke;
    this.sunOrbUniforms.uCloud.value = cloud;
    this.sunOrbUniforms.uDaylight.value = dayFactor;
    this.sunOrbUniforms.uTwilight.value = twilight;
    this.sunArcMat.opacity = 0.08 + 0.18 * dayFactor * trans;

    // Feed live 3D volumetric smoke, sun vector, twilight, cloud shadows & daylight into terrain + 35 km Rockies!
    const shAmt = this.state.showClouds ? Math.max(this.state.cloudLow, this.state.cloudMid) : 0.0;
    const activeSmoke = this.state.compareClean ? 0.0 : smoke;
    this.terrainUniforms.uSmokeHaze.value = activeSmoke;
    this.terrainUniforms.uDaylight.value = dayFactor;
    this.terrainUniforms.uTwilight.value = twilight;
    this.terrainUniforms.uSunDir.value.copy(this._sunDir);
    this.terrainUniforms.uCloudShadowAmt.value = shAmt;
    if (this.ringUniforms) {
      this.ringUniforms.uSmokeHaze.value = activeSmoke;
      this.ringUniforms.uDaylight.value = dayFactor;
      this.ringUniforms.uTwilight.value = twilight;
      this.ringUniforms.uSunDir.value.copy(this._sunDir);
      this.ringUniforms.uCloudShadowAmt.value = shAmt;
      this.ringUniforms.uWindDir.value.copy(this.terrainUniforms.uWindDir.value);
    }

    // Warm golden daytime sunlight vs unmistakable cool indigo moonlit night!
    const clearSun = new THREE.Color(0xffe08a);
    const twilightSun = new THREE.Color(0xff8e32);
    const smokySun = new THREE.Color(0xff8a2c);
    const overcastSun = new THREE.Color(0xe6dcc8);
    const moonCol = new THREE.Color(0x527ec4);

    const sunCol = clearSun.clone()
      .lerp(overcastSun, cloud * 0.48)
      .lerp(twilightSun, twilight * 0.76)
      .lerp(smokySun, activeSmoke * 0.56)
      .lerp(moonCol, 1.0 - dayFactor);

    this.sunLight.color.copy(sunCol);
    const dayInt = 1.48 + 2.22 * Math.pow(Math.max(swNorm, dayFactor * 0.24), 0.65);
    this.sunLight.intensity = 0.32 + (dayInt - 0.32) * dayFactor;

    const clearSky = new THREE.Color(0x9ed4ff);
    const overcastSky = new THREE.Color(0xc8d4e2);
    const smokeSky = new THREE.Color(0xd9a870);
    const nightSky = new THREE.Color(0x1c325a);
    const dayHemiSky = clearSky.clone().lerp(overcastSky, cloud * 0.58).lerp(smokeSky, activeSmoke * 0.46);
    this.hemiLight.color.copy(nightSky.clone().lerp(dayHemiSky, dayFactor));

    const dayGround = new THREE.Color(0x6b5842).lerp(new THREE.Color(0x4b535e), cloud * 0.5);
    const nightGround = new THREE.Color(0x0a111e);
    this.hemiLight.groundColor.copy(nightGround.clone().lerp(dayGround, dayFactor));
    this.hemiLight.intensity = 0.16 + (0.68 + 0.36 * Math.sqrt(Math.max(swNorm, 0.15)) + 0.16 * cloud) * dayFactor;

    // Subtle cool sky bounce rim light during daytime, dim moon rim at night
    this.rimLight.intensity = 0.10 + 0.36 * dayFactor * (1.0 - cloud * 0.35);

    this.renderer.toneMappingExposure = 0.86 + 0.30 * dayFactor;
    this.floorMesh.material.color.copy(new THREE.Color(0x060b14).lerp(new THREE.Color(0x27364a), dayFactor));

    const sunPower = dayFactor * (0.38 + 0.62 * swNorm);
    this.cloudUniforms.uSunPower.value = Math.max(0.08, sunPower);
    this.virgaUniforms.uSunPower.value = Math.max(0.12, sunPower);
    this.mistUniforms.uSunPower.value = Math.max(0.12, sunPower);
    this.rainUniforms.uSunPower.value = Math.max(0.14, sunPower);
    this.snowUniforms.uSunPower.value = Math.max(0.18, sunPower);
  }

  flyTo(presetName) {
    const p = this.presets[presetName];
    if (!p) return;
    this._camAnim = {
      t: 0,
      dur: 0.85,
      fromPos: this.camera.position.clone(),
      toPos: p.pos.clone(),
      fromTarget: this.controls.target.clone(),
      toTarget: p.target.clone(),
      fromFov: this.camera.fov,
      toFov: p.fov || 38,
    };
  }

  getNorthAngleDeg() {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    return (Math.atan2(dir.x, -dir.z) * 180) / Math.PI;
  }

  projectLandmark(lm) {
    const v = new THREE.Vector3(lm.x, lm.y0 * this.state.exag + 0.05, lm.z);
    v.project(this.camera);
    if (v.z > 1.0 || v.z < -1.0 || v.x < -1.08 || v.x > 1.08 || v.y < -1.08 || v.y > 1.08) return null;
    return { x: (v.x * 0.5 + 0.5) * this.width, y: (-v.y * 0.5 + 0.5) * this.height, depth: v.z };
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / Math.max(this.height, 1);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height, false);
    this.snowUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2);
  }

  capturePNG() {
    this.renderer.render(this.scene, this.camera);
    return this.canvas.toDataURL("image/png");
  }

  update(dt) {
    if (this._camAnim) {
      this._camAnim.t += dt / this._camAnim.dur;
      const s = Math.min(1, this._camAnim.t);
      const ease = 1 - Math.pow(1 - s, 3);
      this.camera.position.lerpVectors(this._camAnim.fromPos, this._camAnim.toPos, ease);
      this.controls.target.lerpVectors(this._camAnim.fromTarget, this._camAnim.toTarget, ease);
      this.camera.fov = this._camAnim.fromFov + (this._camAnim.toFov - this._camAnim.fromFov) * ease;
      this.camera.updateProjectionMatrix();
      if (s >= 1) this._camAnim = null;
    } else if (this.state.spin) {
      const offset = this.camera.position.clone().sub(this.controls.target);
      offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), dt * 0.15);
      this.camera.position.copy(this.controls.target).add(offset);
    }

    this.controls.update();

    // Keep sky dome centered on camera & smoothly compute multi-scale immersion factor!
    // In Bloc 3D (camera far away): uImmersion = 0 -> pure realistic storm clouds, virga curtains, mist & spindrift!
    // Zoomed in / "Sur le glacier": uImmersion -> 1 -> crisp fast near-field rain streaks & organic fluttering snowflakes!
    this.skyDome.position.copy(this.camera.position);
    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);
    const camGroundY = this._sampleDemXZ(this.camera.position.x, this.camera.position.z) * this.state.exag;
    const camAGL = Math.max(0.0, this.camera.position.y - camGroundY);
    const camDistTarget = this.camera.position.distanceTo(this.controls.target);

    const smoothstep = (e0, e1, x) => {
      const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
      return t * t * (3 - 2 * t);
    };
    const immersion = smoothstep(5.4, 1.8, camAGL) * smoothstep(8.2, 3.6, camDistTarget);
    const midVisible = smoothstep(10.5, 5.2, camDistTarget);

    this.rainUniforms.uImmersion.value = immersion;
    this.snowUniforms.uImmersion.value = immersion;
    this.snowUniforms.uMidVisible.value = midVisible;
    // Fade miniature diorama sun orb smoothly as you immerse on the glacier (where full Sky Dome sun takes over!)
    this.sunOrbUniforms.uArcVis.value = 1.0 - smoothstep(0.35, 0.85, immersion);
    this.sunArcLine.visible = this.state.showSunArc && immersion < 0.72;

    const focusPt = this.camera.position.clone().addScaledVector(camDir, Math.min(1.45, camDistTarget * 0.45));
    this.rainUniforms.uCamFocus.value.copy(focusPt);
    this.snowUniforms.uCamFocus.value.copy(focusPt);

    // Seamless 35 km surrounding Rocky Mountains: automatically revealed in Vue Webcam / Sur le glacier / Survol, or when toggled ON!
    if (this.ringMesh) {
      const autoHorizon = smoothstep(10.2, 6.8, camDistTarget);
      const targetAlpha = this.state.showHorizon ? 1.0 : autoHorizon;
      this.ringUniforms.uRingAlpha.value = targetAlpha;
      this.ringMesh.visible = targetAlpha > 0.02;
      this.skirtMesh.visible = targetAlpha < 0.72;
      this.floorMesh.visible = targetAlpha < 0.55;
    }

    const windRate = 0.55 + 0.16 * this.state.windSpeed;
    this.skyUniforms.uTime.value += dt * windRate;
    this.terrainUniforms.uTime.value += dt * windRate;
    if (this.ringUniforms) this.ringUniforms.uTime.value += dt * windRate;
    this.cloudUniforms.uTime.value += dt * (0.45 + 0.12 * this.state.windSpeed);
    this.virgaUniforms.uTime.value += dt;
    this.mistUniforms.uTime.value += dt;
    this.rainUniforms.uTime.value += dt;
    this.snowUniforms.uTime.value += dt;

    this.renderer.render(this.scene, this.camera);
  }
}
