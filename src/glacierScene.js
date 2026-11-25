import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Three.js 3D Glacier Atmospheric & Cryospheric Simulator:
 * - Real 320x320 Copernicus GLO-30 DEM watertight cutaway block
 * - Custom PBR terrain shader with real PCFSoftShadowMap shadows, snow micro-relief,
 *   progressive FireWork soot darkening, wet-ice specular sheen during rain, fresh snow accumulation
 *   above the live Jennings rain-snow line, and toggleable isotherm & 100 m contours
 * - 5 terrain-draped volumetric 3D wildfire smoke sheets pouring down the valley (ZERO falling dot particles!)
 * - High alpine stratus cloud canopy driven by real hourly LWin (W m-2)
 * - Glowing atmospheric solar disc driven by real hourly SWin (W m-2) and solar trajectory
 * - 7,000 wind-slanted 3D rain streaks (below Jennings rain-snow line)
 * - 8,000 softly fluttering 3D snowflakes (above Jennings rain-snow line)
 */
export class GlacierScene {
  constructor(canvas, meta, demU16, rgbTex, maskTex) {
    this.canvas = canvas;
    this.meta = meta;
    this.G = meta.grid;
    this.sizeX = meta.sizeX;
    this.sizeY = meta.sizeY;
    this.zRangeKm = (meta.zMaxM - meta.zMinM) / 1000.0;
    this.skirtDepth = 0.78;

    this.demZ = new Float32Array(this.G * this.G);
    for (let i = 0; i < this.demZ.length; i++) {
      this.demZ[i] = (demU16[i] / 65535.0) * this.zRangeKm;
    }

    this.state = {
      exag: 1.3,
      mode: 0,
      contours: false,
      showSmoke: true,
      showPrecip: true,
      showIsotherm: true,
      shadows: true,
      spin: false,
      boost: 2.2,
      compareClean: false,
      hour: 13.0,
      autoSun: true,
      depProgress: 0.0,
      plumeDensity: 0.5,
      cloudCover: 0.5,
      precipMmH: 0.0,
      rainSnowM: 2600.0,
      snowCumMm: 0.0,
      windSpeed: 5.0,
      windBearingDeg: 245,
      swIn: 350.0,
      lwIn: 315.0,
      wetFrac: 0.0,
      dailyDepMgM2: 22.4,
    };

    this._sunDir = new THREE.Vector3(0.3, 0.7, 0.6).normalize();

    this._initRenderer();
    this._initLightingAndSunDisc();
    this._buildTerrain(rgbTex, maskTex);
    this._buildVolumetricSmoke();
    this._buildCloudDeck();
    this._buildRainStreaks();
    this._buildSnowFlurries();
    this._initCameraPresets();
    this.resize();
  }

  _sampleDemNormalized(u, v) {
    const col = Math.max(0, Math.min(this.G - 1, Math.round(u * (this.G - 1))));
    const row = Math.max(0, Math.min(this.G - 1, Math.round(v * (this.G - 1))));
    return this.demZ[row * this.G + col];
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
    this.renderer.toneMappingExposure = 1.04;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b1422);
    this.scene.fog = new THREE.FogExp2(0x0d1726, 0.013);

    this.camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 220);
    this.camera.position.set(9.4, 8.5, -10.3);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.065;
    this.controls.minDistance = 3.0;
    this.controls.maxDistance = 30.0;
    this.controls.maxPolarAngle = Math.PI * 0.485;
    this.controls.target.set(0.0, 0.55, 0.15);
    this.controls.update();

    this._camAnim = null;
  }

  _initLightingAndSunDisc() {
    this.hemiLight = new THREE.HemisphereLight(0x88c4ff, 0x2a211b, 0.72);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff1dc, 2.3);
    this.sunLight.position.set(8, 12, 10);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 2.0;
    this.sunLight.shadow.camera.far = 45.0;
    const d = 9.5;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0006;
    this.sunLight.shadow.normalBias = 0.035;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.rimLight = new THREE.DirectionalLight(0x6ba6e6, 0.35);
    this.rimLight.position.set(-10, 6, -12);
    this.scene.add(this.rimLight);

    // Subtle dark architectural shadow floor under the cutaway block
    const floorGeo = new THREE.PlaneGeometry(110, 110);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x091019,
      roughness: 0.96,
      metalness: 0.0,
    });
    this.floorMesh = new THREE.Mesh(floorGeo, floorMat);
    this.floorMesh.position.y = -this.skirtDepth - 0.015;
    this.floorMesh.receiveShadow = true;
    this.scene.add(this.floorMesh);

    // Visible atmospheric solar disc / corona driven by real hourly SWin & smoke dimming
    const sunCanvas = document.createElement("canvas");
    sunCanvas.width = 128;
    sunCanvas.height = 128;
    const sctx = sunCanvas.getContext("2d");
    const grad = sctx.createRadialGradient(64, 64, 2, 64, 64, 62);
    grad.addColorStop(0.0, "rgba(255, 255, 245, 1.0)");
    grad.addColorStop(0.18, "rgba(255, 242, 200, 0.85)");
    grad.addColorStop(0.45, "rgba(255, 200, 120, 0.28)");
    grad.addColorStop(1.0, "rgba(255, 160, 70, 0.0)");
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 128, 128);
    const sunTex = new THREE.CanvasTexture(sunCanvas);
    sunTex.colorSpace = THREE.SRGBColorSpace;

    this.sunMat = new THREE.SpriteMaterial({
      map: sunTex,
      color: 0xfff3d6,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    this.sunSprite = new THREE.Sprite(this.sunMat);
    this.sunSprite.scale.set(5.5, 5.5, 1);
    this.scene.add(this.sunSprite);
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
        const i00 = r * G + c;
        const i01 = i00 + 1;
        const i10 = i00 + G;
        const i11 = i10 + 1;
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
      uMode: { value: 0.0 },
      uContours: { value: 0.0 },
      uShowIsotherm: { value: 1.0 },
      uDepCumFrac: { value: 0.0 },
      uDepBoost: { value: this.state.boost },
      uRainSnowM: { value: this.state.rainSnowM },
      uSnowCumMm: { value: 0.0 },
      uRainIntensity: { value: 0.0 },
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
          varying vec2 vTerrainUv;`
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
          vBaseElev = aBaseElev;
          vObjPos = position;
          vTerrainUv = uv;`
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
          uniform sampler2D uMaskTex;
          uniform float uMode;
          uniform float uContours;
          uniform float uShowIsotherm;
          uniform float uDepCumFrac;
          uniform float uDepBoost;
          uniform float uRainSnowM;
          uniform float uSnowCumMm;
          uniform float uRainIntensity;
          uniform float uZMinM;
          uniform float uZRangeKm;
          uniform vec2 uWindDir;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;

          float hash21(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }
          float vnoise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            float a = hash21(i);
            float b = hash21(i + vec2(1.0, 0.0));
            float c = hash21(i + vec2(0.0, 1.0));
            float d = hash21(i + vec2(1.0, 1.0));
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
          }
          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 4; i++) {
              v += a * vnoise(p);
              p = p * 2.07 + vec2(13.1, 7.7);
              a *= 0.5;
            }
            return v;
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
          }`
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
          vec3 msk = texture2D(uMaskTex, vTerrainUv).rgb;
          float visAlb = msk.r;
          float ndsi = msk.g * 2.0 - 1.0;
          float water = msk.b;
          float elevT = clamp(vBaseElev / max(uZRangeKm, 0.001), 0.0, 1.0);
          float elevM = uZMinM + vBaseElev * 1000.0;

          float isCryo = smoothstep(0.30, 0.46, ndsi);
          float isSnow = isCryo * smoothstep(0.38, 0.58, visAlb);
          float isIce = isCryo * (1.0 - smoothstep(0.38, 0.58, visAlb));

          // Tactile snow sastrugi & grain micro-shading
          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.84 + 0.24 * sastrugi, isSnow) * (0.90 + 0.16 * grain);

          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          // Fresh snow dusting above the live Jennings rain-snow elevation (albedo reset!)
          float aboveSnowLine = smoothstep(uRainSnowM - 90.0, uRainSnowM + 140.0, elevM);
          float slopeMask = clamp(0.45 + 0.55 * sastrugi, 0.0, 1.0);
          float freshSnow = clamp(uSnowCumMm / 12.0, 0.0, 1.0) * aboveSnowLine * mix(0.65, 1.0, slopeMask);

          // Wet surface darkening below rain-snow line when raining
          float belowSnowLine = 1.0 - aboveSnowLine;
          float wetSurface = clamp(uRainIntensity * 0.45, 0.0, 0.6) * belowSnowLine;

          if (uMode < 0.5) {
            // Mode 0: True-color Sentinel-2 + micro-relief + FireWork soot darkening + fresh snow reset + rain wetting
            diffuseColor.rgb *= microShade;
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.84, 0.89, 0.95), isSnow * 0.45);

            float sootCover = clamp(localDepNorm * 0.24 * uDepBoost * (0.35 + 0.65 * isCryo), 0.0, 0.82);
            float impurityEnrich = mix(1.0, 1.25, isIce) * (0.78 + 0.44 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.84);
            // Fresh snowfall buries deposited wildfire soot above the rain-snow line!
            sootCover *= (1.0 - freshSnow * 0.82);

            vec3 sootTint = mix(vec3(0.042, 0.034, 0.026), vec3(0.020, 0.018, 0.017), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.28 + sootTint * 0.72, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.16 * (1.0 - isCryo));

            // Rain wets rock & moraines slightly darker
            diffuseColor.rgb *= (1.0 - wetSurface * 0.24 * (1.0 - isSnow));

            // Fresh snow coat whitens upper rocks & re-brightens high glacier zones cleanly
            vec3 freshSnowCol = vec3(0.66, 0.73, 0.82) * (0.90 + 0.16 * sastrugi);
            diffuseColor.rgb = mix(diffuseColor.rgb, freshSnowCol, freshSnow * 0.72);
          } else if (uMode < 1.5) {
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 2.5) {
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade;
          }

          // Optional crisp 100 m / 500 m contour lines
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

          // Live glowing Jennings rain-snow elevation line (when within domain 1870..3490 m)
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
          vec3 mskR = texture2D(uMaskTex, vTerrainUv).rgb;
          float ndsiR = mskR.g * 2.0 - 1.0;
          float isCryoR = smoothstep(0.30, 0.46, ndsiR);
          float isSnowR = isCryoR * smoothstep(0.38, 0.58, mskR.r);
          float isIceR = isCryoR * (1.0 - smoothstep(0.38, 0.58, mskR.r));
          float elevMR = uZMinM + vBaseElev * 1000.0;
          float belowR = 1.0 - smoothstep(uRainSnowM - 80.0, uRainSnowM + 100.0, elevMR);
          float rVal = 0.90;
          rVal = mix(rVal, 0.68, isSnowR);
          rVal = mix(rVal, 0.34, isIceR);
          rVal = mix(rVal, 0.10, smoothstep(0.25, 0.65, mskR.b));
          rVal = mix(rVal, 0.85, clamp(uDepCumFrac * 0.32 * isCryoR, 0.0, 0.5));
          // Active rain lowers roughness on lower tongue & wet rock -> authentic wet specular reflection!
          rVal = mix(rVal, 0.18, clamp(uRainIntensity * 0.32, 0.0, 0.55) * belowR);
          roughnessFactor = rVal;`
        );
    };

    this.terrainMesh = new THREE.Mesh(geo, mat);
    this.terrainMesh.castShadow = true;
    this.terrainMesh.receiveShadow = true;
    this.scene.add(this.terrainMesh);

    this._buildCutawaySkirt();
  }

  _buildCutawaySkirt() {
    const G = this.G;
    const sizeX = this.sizeX;
    const sizeY = this.sizeY;
    const yb = -this.skirtDepth;

    const pos = [], nrm = [], baseRim = [], idx = [];
    let vOff = 0;
    const addSide = (sampleFn, nx, ny, nz) => {
      const start = vOff;
      for (let i = 0; i < G; i++) {
        const p = sampleFn(i);
        pos.push(p.x, p.y0 * this.state.exag, p.z);
        nrm.push(nx, ny, nz); baseRim.push(p.y0);
        pos.push(p.x, yb, p.z);
        nrm.push(nx, ny, nz); baseRim.push(-1.0);
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

    const skirtMat = new THREE.MeshStandardMaterial({
      color: 0x121924,
      roughness: 0.88,
      metalness: 0.08,
      side: THREE.DoubleSide,
    });
    this.skirtMesh = new THREE.Mesh(skirtGeo, skirtMat);
    this.skirtMesh.castShadow = true;
    this.skirtMesh.receiveShadow = true;
    this.scene.add(this.skirtMesh);
  }

  _buildVolumetricSmoke() {
    // 5 terrain-draped undulating 3D smoke volumes hugging the glacier valley & rolling over ridges (NO dots!)
    this.smokeGroup = new THREE.Group();
    this.smokeSharedUniforms = {
      uTime: { value: 0.0 },
      uDensity: { value: 0.5 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uSunDir: { value: this._sunDir.clone() },
      uSunPower: { value: 0.6 },
      uWetFrac: { value: 0.0 },
      uExag: { value: this.state.exag },
    };

    const S = 76; // smooth contoured grid following exact glacier topography
    const basePos = new Float32Array(S * S * 3);
    const baseDem = new Float32Array(S * S);
    const uvs = new Float32Array(S * S * 2);
    for (let r = 0; r < S; r++) {
      const v = r / (S - 1);
      const z = (v - 0.5) * this.sizeY * 1.12;
      for (let c = 0; c < S; c++) {
        const u = c / (S - 1);
        const x = (u - 0.5) * this.sizeX * 1.12;
        const idx = r * S + c;
        const y0 = this._sampleDemNormalized(
          Math.max(0, Math.min(1, (x / this.sizeX) + 0.5)),
          Math.max(0, Math.min(1, (z / this.sizeY) + 0.5))
        );
        basePos[idx * 3 + 0] = x;
        basePos[idx * 3 + 1] = 0;
        basePos[idx * 3 + 2] = z;
        baseDem[idx] = y0;
        uvs[idx * 2 + 0] = u;
        uvs[idx * 2 + 1] = v;
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

    // Lower strata hug the glacier valley floor tightly; upper strata smooth out into drifting wildfire plumes
    const layers = [
      { heightAbove: 0.16, follow: 0.88, alpha: 0.34, scale: 2.8, speed: 0.72, seed: 1.3 },
      { heightAbove: 0.44, follow: 0.72, alpha: 0.32, scale: 2.3, speed: 0.90, seed: 4.1 },
      { heightAbove: 0.82, follow: 0.54, alpha: 0.28, scale: 1.9, speed: 1.08, seed: 7.9 },
      { heightAbove: 1.30, follow: 0.32, alpha: 0.24, scale: 1.6, speed: 1.24, seed: 11.4 },
      { heightAbove: 1.90, follow: 0.12, alpha: 0.20, scale: 1.4, speed: 1.42, seed: 15.8 },
    ];

    layers.forEach((cfg) => {
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          ...this.smokeSharedUniforms,
          uHeightAbove: { value: cfg.heightAbove },
          uFollow: { value: cfg.follow },
          uLayerAlpha: { value: cfg.alpha },
          uNoiseScale: { value: cfg.scale },
          uSpeedMul: { value: cfg.speed },
          uSeed: { value: cfg.seed },
        },
        vertexShader: `
          attribute float aDemY0;
          uniform float uTime;
          uniform vec2 uWindDir;
          uniform float uExag;
          uniform float uHeightAbove;
          uniform float uFollow;
          uniform float uSpeedMul;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevNorm;

          void main() {
            vUv = uv;
            float terrainY = aDemY0 * uExag;
            float flatY = 0.75 * uExag;
            float baseY = mix(flatY, terrainY, uFollow) + uHeightAbove;
            // Gentle rolling billowing waves advecting downwind
            float phase = dot(position.xz, uWindDir) * 0.65 - uTime * 0.45 * uSpeedMul + uSeed;
            float billow = sin(phase) * 0.08 + cos(position.x * 0.55 - position.z * 0.45 + uTime * 0.3) * 0.06;
            vec3 pos = vec3(position.x, baseY + billow, position.z);
            vec4 wp = modelMatrix * vec4(pos, 1.0);
            vWorldPos = wp.xyz;
            vElevNorm = clamp(aDemY0 / 1.65, 0.0, 1.0);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float uTime;
          uniform float uDensity;
          uniform vec2 uWindDir;
          uniform vec3 uSunDir;
          uniform float uSunPower;
          uniform float uWetFrac;
          uniform float uLayerAlpha;
          uniform float uNoiseScale;
          uniform float uSpeedMul;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevNorm;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
              mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
              f.y
            );
          }
          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 5; i++) {
              v += a * noise(p);
              p = p * 2.04 + vec2(7.3, 11.9);
              a *= 0.5;
            }
            return v;
          }

          void main() {
            if (uDensity < 0.02) discard;
            vec2 c = vUv * 2.0 - 1.0;
            // Soft radial vignette so smoke dissolves naturally beyond the 11x11 km block
            float edge = 1.0 - smoothstep(0.42, 0.96, max(abs(c.x), abs(c.y)) * 0.55 + length(c) * 0.55);

            // Domain-warped curling smoke tendrils drifting with real wind
            vec2 drift = uWindDir * uTime * 0.16 * uSpeedMul;
            vec2 q = vUv * uNoiseScale - drift + vec2(uSeed);
            vec2 warp = vec2(fbm(q + vec2(1.7, 9.2)), fbm(q + vec2(8.3, 2.8)));
            float n = fbm(q + 0.65 * warp - drift * 0.35);

            // Smoke pools richer in the glacial valley trough
            float valleyPool = 1.15 - 0.38 * vElevNorm;
            float cloud = smoothstep(0.30, 0.78, n * valleyPool);
            float alpha = cloud * edge * uDensity * uLayerAlpha;
            if (alpha < 0.004) discard;

            // Mie forward-scattering glow when backlit by sunlight through wildfire smoke
            vec3 viewDir = normalize(vWorldPos - cameraPosition);
            float fwd = pow(max(dot(viewDir, normalize(uSunDir)), 0.0), 4.0) * uSunPower;

            vec3 dryDark = vec3(0.20, 0.17, 0.15);
            vec3 dryLit = vec3(0.72, 0.50, 0.30);
            vec3 wetDark = vec3(0.24, 0.28, 0.33);
            vec3 wetLit = vec3(0.58, 0.63, 0.69);

            vec3 baseDark = mix(dryDark, wetDark, uWetFrac * 0.75);
            vec3 baseLit = mix(dryLit, wetLit, uWetFrac * 0.75);
            vec3 col = mix(baseDark, baseLit, clamp(0.22 + 0.65 * uSunPower + 0.35 * cloud, 0.0, 1.0));
            col += vec3(0.55, 0.32, 0.12) * fwd * (1.0 - uWetFrac * 0.6);

            gl_FragColor = vec4(col, alpha);
          }
        `,
      });
      const mesh = new THREE.Mesh(sharedGeo, mat);
      this.smokeGroup.add(mesh);
    });
    this.scene.add(this.smokeGroup);
  }

  _buildCloudDeck() {
    // High alpine stratus overcast deck driven by real hourly LWin (W m-2)
    this.cloudUniforms = {
      uTime: { value: 0.0 },
      uCloudCover: { value: 0.4 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uSunPower: { value: 0.5 },
    };
    const geo = new THREE.PlaneGeometry(24, 24, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.cloudUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uTime;
        uniform float uCloudCover;
        uniform vec2 uWindDir;
        uniform float uSunPower;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v=0.0, a=0.5;
          for (int i=0; i<4; i++) { v += a*noise(p); p = p*2.02+vec2(4.1,8.7); a*=0.5; }
          return v;
        }
        void main() {
          if (uCloudCover < 0.08) discard;
          vec2 c = vUv * 2.0 - 1.0;
          float edge = 1.0 - smoothstep(0.40, 0.98, length(c));
          vec2 p = vUv * 4.2 - uWindDir * uTime * 0.08;
          float n = fbm(p);
          float alpha = smoothstep(0.32, 0.76, n) * edge * uCloudCover * 0.34;
          if (alpha < 0.005) discard;
          vec3 col = mix(vec3(0.18, 0.23, 0.30), vec3(0.68, 0.74, 0.80), 0.25 + 0.65 * uSunPower);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });
    this.cloudMesh = new THREE.Mesh(geo, mat);
    this.cloudMesh.position.y = 4.35;
    this.scene.add(this.cloudMesh);
  }

  _buildRainStreaks() {
    // 7,000 sleek wind-slanted 3D rain streaks falling ONLY below the live Jennings rain-snow elevation!
    const COUNT = 7000;
    const pos = new Float32Array(COUNT * 2 * 3);
    const seed = new Float32Array(COUNT * 2 * 4); // [phase, speed, endFlag (0=head,1=tail), surfY0]

    for (let i = 0; i < COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const x = (u - 0.5) * this.sizeX * 0.98;
      const z = (v - 0.5) * this.sizeY * 0.98;
      const surfY0 = this._sampleDemNormalized(u, v);
      const ph = Math.random();
      const sp = 0.85 + Math.random() * 0.45;

      for (let end = 0; end < 2; end++) {
        const k = i * 2 + end;
        pos[k * 3 + 0] = x;
        pos[k * 3 + 1] = 0;
        pos[k * 3 + 2] = z;
        seed[k * 4 + 0] = ph;
        seed[k * 4 + 1] = sp;
        seed[k * 4 + 2] = end;
        seed[k * 4 + 3] = surfY0;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));

    this.rainUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.rainUniforms,
      vertexShader: `
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        varying float vAlpha;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.95, 0.0, 1.0));
          float t = fract(aSeed.x + uTime * 1.15 * aSeed.y);
          float topY = 3.55 + max(0.0, (uExag - 1.3) * 1.4);
          float groundY = aSeed.w * uExag;
          float headY = mix(topY, groundY, t);

          // Streak length & realistic wind slant
          float streakH = 0.24 + 0.10 * clamp(uIntensity, 0.0, 1.5);
          vec2 slant = uWindDir * (0.045 * uWindSpeed);
          float isTail = aSeed.z; // 1 = upper tail behind head

          vec3 p = vec3(
            position.x - slant.x * isTail + uWindDir.x * t * 0.45 * (uWindSpeed * 0.15),
            headY + streakH * isTail,
            position.z - slant.y * isTail + uWindDir.y * t * 0.45 * (uWindSpeed * 0.15)
          );
          p.x = mod(p.x + 5.5, 11.0) - 5.5;
          p.z = mod(p.z + 5.5, 11.0) - 5.5;

          // Rain ONLY exists below the live Jennings rain-snow elevation!
          float surfElevM = uZMinM + aSeed.w * 1000.0;
          float rainZone = 1.0 - smoothstep(uRainSnowM - 100.0, uRainSnowM + 100.0, surfElevM);
          float fade = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.92, 1.0, t));
          vAlpha = active * rainZone * fade * clamp(uIntensity * 0.55, 0.0, 0.58) * (1.0 - 0.65 * isTail);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(0.68, 0.82, 0.96, vAlpha);
        }
      `,
    });

    this.rainLines = new THREE.LineSegments(geo, mat);
    this.rainLines.frustumCulled = false;
    this.scene.add(this.rainLines);
  }

  _buildSnowFlurries() {
    // 8,000 gently fluttering translucent snowflakes falling ONLY above the live Jennings rain-snow elevation!
    const COUNT = 8000;
    const pos = new Float32Array(COUNT * 3);
    const seed = new Float32Array(COUNT * 4); // [phase, speed, size, surfY0]

    for (let i = 0; i < COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const x = (u - 0.5) * this.sizeX * 0.98;
      const z = (v - 0.5) * this.sizeY * 0.98;
      const surfY0 = this._sampleDemNormalized(u, v);
      pos[i * 3 + 0] = x;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = z;
      seed[i * 4 + 0] = Math.random();
      seed[i * 4 + 1] = 0.65 + Math.random() * 0.7;
      seed[i * 4 + 2] = 0.7 + Math.random() * 1.1;
      seed[i * 4 + 3] = surfY0;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));

    this.snowUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.snowUniforms,
      vertexShader: `
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uPixelRatio;
        varying float vAlpha;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.98, 0.0, 1.0));
          float t = fract(aSeed.x + uTime * 0.19 * aSeed.y);
          float topY = 3.75 + max(0.0, (uExag - 1.3) * 1.5) + 0.5 * sin(aSeed.x * 23.0);
          float groundY = aSeed.w * uExag + 0.02;
          float y = mix(topY, groundY, t);

          // Gentle 3D snowflake flutter + wind drift
          vec2 flutter = vec2(
            sin(uTime * 1.6 + aSeed.x * 45.0 + t * 7.0),
            cos(uTime * 1.4 + aSeed.y * 39.0 + t * 6.5)
          ) * 0.18;
          vec2 drift = uWindDir * t * (0.28 + 0.14 * uWindSpeed);

          vec3 p = vec3(
            mod(position.x + drift.x + flutter.x + 5.5, 11.0) - 5.5,
            y,
            mod(position.z + drift.y + flutter.y + 5.5, 11.0) - 5.5
          );

          // Snow ONLY exists above the live Jennings rain-snow line!
          float surfElevM = uZMinM + aSeed.w * 1000.0;
          float snowZone = smoothstep(uRainSnowM - 100.0, uRainSnowM + 100.0, surfElevM);
          float fade = smoothstep(0.0, 0.14, t) * (1.0 - smoothstep(0.88, 1.0, t));
          vAlpha = active * snowZone * fade * clamp(uIntensity * 0.85, 0.0, 0.82);

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float pt = 3.6 * aSeed.z * uPixelRatio * (13.0 / max(-mv.z, 1.5));
          gl_PointSize = clamp(pt, 1.4, 7.5) * step(0.01, vAlpha);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5 || vAlpha < 0.01) discard;
          float soft = pow(1.0 - smoothstep(0.05, 0.5, d), 1.4);
          gl_FragColor = vec4(0.92, 0.96, 1.0, soft * vAlpha);
        }
      `,
    });

    this.snowPoints = new THREE.Points(geo, mat);
    this.snowPoints.frustumCulled = false;
    this.scene.add(this.snowPoints);
  }

  _initCameraPresets() {
    this.presets = {
      block:   { pos: new THREE.Vector3(9.4, 8.5, -10.3),  target: new THREE.Vector3(0.0, 0.55, 0.15) },
      flyover: { pos: new THREE.Vector3(3.6, 2.35, -5.2),  target: new THREE.Vector3(-0.6, 1.05, 0.8) },
      plateau: { pos: new THREE.Vector3(-8.2, 7.6, 8.8),   target: new THREE.Vector3(-0.6, 1.05, 0.2) },
      top:     { pos: new THREE.Vector3(0.05, 17.5, -0.8), target: new THREE.Vector3(0.0, 0.4, 0.0) },
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

    this.smokeSharedUniforms.uExag.value = exag;
    this.rainUniforms.uExag.value = exag;
    this.snowUniforms.uExag.value = exag;
    this.cloudMesh.position.y = 4.35 + Math.max(0, (exag - 1.3) * 1.4);
  }

  setMode(mode) {
    this.state.mode = mode;
    this.terrainUniforms.uMode.value = mode;
  }

  setContours(enabled) {
    this.state.contours = enabled;
    this.terrainUniforms.uContours.value = enabled ? 1.0 : 0.0;
  }

  setShowSmoke(enabled) {
    this.state.showSmoke = enabled;
    this.smokeGroup.visible = enabled;
  }

  setShowPrecip(enabled) {
    this.state.showPrecip = enabled;
    this.rainLines.visible = enabled;
    this.snowPoints.visible = enabled;
  }

  setShowIsotherm(enabled) {
    this.state.showIsotherm = enabled;
    this.terrainUniforms.uShowIsotherm.value = enabled ? 1.0 : 0.0;
  }

  setShadows(enabled) {
    this.state.shadows = enabled;
    this.sunLight.castShadow = enabled;
    this.renderer.shadowMap.enabled = enabled;
  }

  setBoost(boost) {
    this.state.boost = boost;
    this.terrainUniforms.uDepBoost.value = boost;
  }

  setCompareClean(clean) {
    this.state.compareClean = clean;
    this._syncSurfaceUniforms();
  }

  setMeteorology({
    hour,
    depCumFrac,
    plumeDensity,
    cloudCover,
    precipMmH,
    rainSnowM,
    snowCumMm,
    windSpeed,
    windBearingDeg,
    swIn,
    lwIn,
    wetFrac,
    dailyDepMgM2,
  }) {
    this.state.hour = hour;
    this.state.depProgress = depCumFrac;
    this.state.plumeDensity = plumeDensity;
    this.state.cloudCover = cloudCover;
    this.state.precipMmH = precipMmH;
    this.state.rainSnowM = rainSnowM;
    this.state.snowCumMm = snowCumMm;
    this.state.windSpeed = windSpeed;
    this.state.windBearingDeg = windBearingDeg;
    this.state.swIn = swIn;
    this.state.lwIn = lwIn;
    this.state.wetFrac = wetFrac;
    this.state.dailyDepMgM2 = dailyDepMgM2;

    const towardRad = ((windBearingDeg + 180) * Math.PI) / 180;
    const wx = Math.sin(towardRad);
    const wz = -Math.cos(towardRad);

    this.terrainUniforms.uWindDir.value.set(wx, wz);
    this.smokeSharedUniforms.uWindDir.value.set(wx, wz);
    this.cloudUniforms.uWindDir.value.set(wx, wz);
    this.rainUniforms.uWindDir.value.set(wx, wz);
    this.snowUniforms.uWindDir.value.set(wx, wz);

    // Volumetric smoke & high LWin cloud canopy
    this.smokeSharedUniforms.uDensity.value = plumeDensity;
    this.smokeSharedUniforms.uWetFrac.value = wetFrac;
    this.cloudUniforms.uCloudCover.value = cloudCover;

    // 3D Rain streaks (below rainSnowM) & Snow flurries (above rainSnowM)
    const pNorm = Math.min(1.5, precipMmH / 2.2);
    this.rainUniforms.uIntensity.value = pNorm;
    this.rainUniforms.uWindSpeed.value = windSpeed;
    this.rainUniforms.uRainSnowM.value = rainSnowM;

    this.snowUniforms.uIntensity.value = pNorm;
    this.snowUniforms.uWindSpeed.value = windSpeed;
    this.snowUniforms.uRainSnowM.value = rainSnowM;

    this._syncSurfaceUniforms();
    this._updateSolarAndAtmosphere();
  }

  _syncSurfaceUniforms() {
    this.terrainUniforms.uDepCumFrac.value = this.state.compareClean ? 0.0 : this.state.depProgress;
    this.terrainUniforms.uRainSnowM.value = this.state.rainSnowM;
    this.terrainUniforms.uSnowCumMm.value = this.state.compareClean ? 0.0 : this.state.snowCumMm;
    this.terrainUniforms.uRainIntensity.value = Math.min(1.5, this.state.precipMmH / 2.2);
  }

  _updateSolarAndAtmosphere() {
    // True August solar arc at 52.2 deg N (sunrise ~06:30, solar noon ~13:30, sunset ~20:30)
    const h = this.state.hour;
    const dayPhase = Math.max(-1, Math.min(1, (h - 13.5) / 7.2));
    const azDeg = 180 + dayPhase * 106;
    const rawEl = Math.cos(dayPhase * Math.PI * 0.5) * 47.0;
    const elDeg = Math.max(10.0, rawEl);

    const azR = (azDeg * Math.PI) / 180;
    const elR = (elDeg * Math.PI) / 180;
    const dist = 22.0;
    const sx = dist * Math.cos(elR) * Math.sin(azR);
    const sy = dist * Math.sin(elR);
    const sz = -dist * Math.cos(elR) * Math.cos(azR);
    this.sunLight.position.set(sx, sy, sz);
    this._sunDir.set(sx, sy, sz).normalize();
    this.smokeSharedUniforms.uSunDir.value.copy(this._sunDir);

    // Real solar forcing factor directly from hourly SWin (0..780 W m-2)!
    const swNorm = Math.max(0.0, Math.min(1.0, this.state.swIn / 760.0));
    const isDay = h >= 6.2 && h <= 21.2 && this.state.swIn > 3.0;
    const smoke = this.state.showSmoke ? this.state.plumeDensity : 0.0;
    const cloud = this.state.cloudCover;

    // Visible solar disc scales cleanly with SWin & dims red-orange behind smoke
    this.sunSprite.position.copy(this._sunDir).multiplyScalar(38.0);
    this.sunSprite.visible = isDay && rawEl > 2.0;
    const sunDiscColor = new THREE.Color(0xfff7e6).lerp(new THREE.Color(0xff7d2b), Math.min(1, smoke * 0.92));
    this.sunMat.color.copy(sunDiscColor);
    this.sunMat.opacity = Math.max(0.15, Math.min(0.95, (0.28 + 0.72 * swNorm) * (1.0 - cloud * 0.45)));
    const discScale = 3.8 + 4.2 * swNorm;
    this.sunSprite.scale.set(discScale, discScale, 1);

    // Direct sun intensity & shadow contrast scale directly with real SWin!
    const clearSun = new THREE.Color(0xfff3e0);
    const smokySun = new THREE.Color(0xff9c42);
    const overcastSun = new THREE.Color(0xc5d6ea);
    const moonCol = new THREE.Color(0x6c9bd2);

    const sunCol = clearSun.clone().lerp(overcastSun, cloud * 0.45).lerp(smokySun, smoke * 0.65);
    if (!isDay) sunCol.copy(moonCol);
    this.sunLight.color.copy(sunCol);
    this.sunLight.intensity = isDay ? (0.65 + 2.35 * Math.pow(swNorm, 0.72)) : 0.78;

    // Hemisphere diffuse sky reflects SWin + LWin overcast + smoke amber scatter
    const clearSky = new THREE.Color(0x7fc0ff);
    const overcastSky = new THREE.Color(0x8899ad);
    const smokeSky = new THREE.Color(0xb48458);
    const skyCol = clearSky.clone().lerp(overcastSky, cloud * 0.55).lerp(smokeSky, smoke * 0.52);
    this.hemiLight.color.copy(skyCol);
    this.hemiLight.intensity = isDay ? (0.48 + 0.42 * Math.sqrt(swNorm) + 0.16 * cloud) : 0.34;

    this.smokeSharedUniforms.uSunPower.value = isDay ? (0.25 + 0.75 * swNorm) : 0.08;
    this.cloudUniforms.uSunPower.value = isDay ? (0.20 + 0.80 * swNorm) : 0.08;

    // Backdrop & atmospheric fog respond to day/night, clear sky, overcast LWin, and wildfire smoke
    const nightBg = new THREE.Color(0x070d17);
    const clearDayBg = new THREE.Color(0x162b46);
    const overcastBg = new THREE.Color(0x1d2633);
    const smokyBg = new THREE.Color(0x281c14);
    const dayBlend = isDay ? Math.min(1, 0.35 + 0.65 * Math.sqrt(swNorm)) : 0.0;
    const dayTarget = clearDayBg.clone().lerp(overcastBg, cloud * 0.65).lerp(smokyBg, smoke * 0.68);
    const bg = nightBg.clone().lerp(dayTarget, dayBlend);
    this.scene.background.copy(bg);
    this.scene.fog.color.copy(bg);
    this.scene.fog.density = 0.0085 + smoke * 0.011 + cloud * 0.004;
  }

  flyTo(presetName) {
    const p = this.presets[presetName];
    if (!p) return;
    this._camAnim = {
      t: 0,
      dur: 0.72,
      fromPos: this.camera.position.clone(),
      toPos: p.pos.clone(),
      fromTarget: this.controls.target.clone(),
      toTarget: p.target.clone(),
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
    return {
      x: (v.x * 0.5 + 0.5) * this.width,
      y: (-v.y * 0.5 + 0.5) * this.height,
      depth: v.z,
    };
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
      if (s >= 1) this._camAnim = null;
    } else if (this.state.spin) {
      const offset = this.camera.position.clone().sub(this.controls.target);
      offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), dt * 0.16);
      this.camera.position.copy(this.controls.target).add(offset);
    }

    this.controls.update();

    const windRate = 0.55 + 0.16 * this.state.windSpeed;
    this.smokeSharedUniforms.uTime.value += dt * windRate;
    this.cloudUniforms.uTime.value += dt * (0.4 + 0.1 * this.state.windSpeed);
    this.rainUniforms.uTime.value += dt;
    this.snowUniforms.uTime.value += dt;

    this.renderer.render(this.scene, this.camera);
  }
}
