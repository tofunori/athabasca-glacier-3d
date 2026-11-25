import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Three.js 3D Glacier Observatory engine:
 * - Real 320x320 Copernicus GLO-30 DEM watertight cutaway block
 * - Custom PBR terrain shader with real PCFSoftShadowMap cast shadows, cool alpine sky-blue snow shading,
 *   micro-relief bump (fixing "too flat white" snow!), progressive FireWork soot/BC+OM darkening, and 100 m contours
 * - Multi-layered volumetric wildfire smoke plume drifting along real wind direction
 * - 18,000 GPU-animated falling carbonaceous aerosol particles responding live to hourly deposition rate & RH washout
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

    // Decode normalized elevations in km (0..zRangeKm)
    this.demZ = new Float32Array(this.G * this.G);
    for (let i = 0; i < this.demZ.length; i++) {
      this.demZ[i] = (demU16[i] / 65535.0) * this.zRangeKm;
    }

    this.state = {
      exag: 1.3,
      mode: 0, // 0: satellite+dep, 1: dep heatmap, 2: ice/snow, 3: maquette
      contours: false,
      showPlume: true,
      shadows: true,
      spin: false,
      boost: 2.2,
      compareClean: false,
      depProgress: 0.0, // 0..1 cumulative fraction of episode day
      depRateNorm: 0.0, // 0..1 normalized hourly deposition flux
      plumeDensity: 0.3, // 0..1 overhead smoke density
      wetFrac: 0.0, // 0..1 wet scavenging ratio
      windSpeed: 4.5, // m/s
      windBearingDeg: 245,
      hour: 15.0,
      autoSun: true,
      manualSunEl: 32,
      dailyDepMgM2: 22.4,
    };

    this._initRenderer();
    this._initLightingAndSky();
    this._buildTerrain(rgbTex, maskTex);
    this._buildPlumeCanopy();
    this._buildDepositionParticles();
    this._initCameraPresets();
    this.resize();
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
    this.scene.background = new THREE.Color(0x09111c);
    this.scene.fog = new THREE.FogExp2(0x0b1523, 0.014);

    this.camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 180);
    this.camera.position.set(9.4, 8.6, -10.4); // NE looking SW straight up Athabasca Glacier!

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.065;
    this.controls.minDistance = 3.2;
    this.controls.maxDistance = 30.0;
    this.controls.maxPolarAngle = Math.PI * 0.485;
    this.controls.target.set(0.0, 0.55, 0.15);
    this.controls.update();

    this._camAnim = null;
  }

  _initLightingAndSky() {
    // Cool alpine glacier-blue sky + warm dark mountain ground bounce -> makes snow shadows rich blue, never flat white!
    this.hemiLight = new THREE.HemisphereLight(0x8bc5ff, 0x2a211b, 0.72);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff1dc, 2.35);
    this.sunLight.position.set(8, 12, 10);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 2.0;
    this.sunLight.shadow.camera.far = 42.0;
    const d = 9.5;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0006;
    this.sunLight.shadow.normalBias = 0.035;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Subtle cool rim fill from opposite sky quadrant to separate cutaway walls and ridges
    this.rimLight = new THREE.DirectionalLight(0x6da8e8, 0.38);
    this.rimLight.position.set(-10, 6, -12);
    this.scene.add(this.rimLight);

    // Subtle dark architectural shadow-catching plinth floor beneath the cutaway block
    const floorGeo = new THREE.PlaneGeometry(90, 90);
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

    // 1) Top Terrain BufferGeometry (320x320)
    const nTop = G * G;
    const positions = new Float32Array(nTop * 3);
    const uvs = new Float32Array(nTop * 2);
    const baseElev = new Float32Array(nTop);

    for (let r = 0; r < G; r++) {
      const vFrac = r / (G - 1);
      const z = (vFrac - 0.5) * sizeY; // row 0 = North (-Z)
      const uvV = 1.0 - vFrac;         // flipY=true -> row 0 is top of image (v=1)
      for (let c = 0; c < G; c++) {
        const uFrac = c / (G - 1);
        const x = (uFrac - 0.5) * sizeX; // col 0 = West (-X)
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
        indices[ptr++] = i00;
        indices[ptr++] = i10;
        indices[ptr++] = i11;
        indices[ptr++] = i00;
        indices[ptr++] = i11;
        indices[ptr++] = i01;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geo.setAttribute("aBaseElev", new THREE.BufferAttribute(baseElev, 1));
    geo.setIndex(new THREE.BufferAttribute(indices, 1));
    geo.computeVertexNormals();
    this.terrainGeo = geo;

    // Custom uniforms injected into MeshStandardMaterial so we keep FULL Three.js PBR + PCFSoftShadowMap!
    this.terrainUniforms = {
      uMaskTex: { value: maskTex },
      uMode: { value: 0.0 },
      uContours: { value: 0.0 },
      uDepCumFrac: { value: 0.0 },
      uDepBoost: { value: this.state.boost },
      uDailyDep: { value: this.state.dailyDepMgM2 },
      uZMinM: { value: this.meta.zMinM },
      uZRangeKm: { value: this.zRangeKm },
      uExag: { value: this.state.exag },
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
          uniform float uDepCumFrac;
          uniform float uDepBoost;
          uniform float uDailyDep;
          uniform float uZMinM;
          uniform float uZRangeKm;
          uniform float uExag;
          uniform vec2 uWindDir;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;

          // Compact value noise for snow sastrugi micro-detail & spatial carbonaceous deposition variation
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
            // True linear-space perceptual inferno/amber palette for Three.js PBR pipeline
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

          // Tactile snow sastrugi & rocky micro-variation in linear space so snow has depth, never chalky flat white
          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.84 + 0.24 * sastrugi, isSnow) * (0.90 + 0.16 * grain);

          // Orographic + valley-channel spatial pattern of wildfire soot deposition across the glacier
          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          if (uMode < 0.5) {
            // Mode 0: True-color Sentinel-2 + micro-relief + progressive FireWork carbonaceous soot darkening
            diffuseColor.rgb *= microShade;
            // Gentle cool tint on bright snow in linear space to keep alpine nuance
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.84, 0.89, 0.95), isSnow * 0.45);

            // Carbonaceous soot (EC + POM + SOM) in linear space: dark charcoal-brown absorption on snow & ice
            float sootCover = clamp(localDepNorm * 0.24 * uDepBoost * (0.35 + 0.65 * isCryo), 0.0, 0.82);
            float impurityEnrich = mix(1.0, 1.25, isIce) * (0.78 + 0.44 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.84);

            vec3 sootTint = mix(vec3(0.042, 0.034, 0.026), vec3(0.020, 0.018, 0.017), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.28 + sootTint * 0.72, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.16 * (1.0 - isCryo));
          } else if (uMode < 1.5) {
            // Mode 1: FireWork cumulative deposition heatmap (mg m-2)
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 2.5) {
            // Mode 2: Physical surface classification (NDSI + albedo) in linear space
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            // Mode 3: Sculptural clay / gypsum maquette in linear space
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade;
          }

          // Optional crisp 100 m & 500 m contour lines
          if (uContours > 0.5) {
            float c100 = abs(fract(elevM / 100.0 + 0.5) - 0.5);
            float c500 = abs(fract(elevM / 500.0 + 0.5) - 0.5);
            float fw100 = fwidth(elevM / 100.0) * 1.2;
            float fw500 = fwidth(elevM / 500.0) * 1.7;
            float l100 = 1.0 - smoothstep(0.0, max(fw100, 0.014), c100);
            float l500 = 1.0 - smoothstep(0.0, max(fw500, 0.010), c500);
            vec3 lc = uMode > 2.5 ? vec3(0.14, 0.20, 0.28) : vec3(0.05, 0.09, 0.14);
            diffuseColor.rgb = mix(diffuseColor.rgb, lc, clamp(l100 * 0.34 + l500 * 0.50, 0.0, 0.75));
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
          float rVal = 0.90;
          rVal = mix(rVal, 0.68, isSnowR);
          rVal = mix(rVal, 0.34, isIceR);
          rVal = mix(rVal, 0.10, smoothstep(0.25, 0.65, mskR.b));
          // Deposited soot increases surface roughness slightly on snow/ice
          rVal = mix(rVal, 0.85, clamp(uDepCumFrac * 0.35 * isCryoR, 0.0, 0.5));
          roughnessFactor = rVal;`
        );
    };

    this.terrainMesh = new THREE.Mesh(geo, mat);
    this.terrainMesh.castShadow = true;
    this.terrainMesh.receiveShadow = true;
    this.scene.add(this.terrainMesh);

    // 2) Cutaway Dark Basalt Pedestal Walls (4 crisp flat-shaded sides + bottom)
    this._buildCutawaySkirt();
  }

  _buildCutawaySkirt() {
    const G = this.G;
    const sizeX = this.sizeX;
    const sizeY = this.sizeY;
    const yb = -this.skirtDepth;

    const pos = [];
    const nrm = [];
    const baseRim = []; // >=0 if top rim vertex (tracks exag), -1 if bottom fixed
    const idx = [];
    let vOff = 0;

    const addSide = (sampleFn, nx, ny, nz) => {
      const start = vOff;
      for (let i = 0; i < G; i++) {
        const p = sampleFn(i);
        pos.push(p.x, p.y0 * this.state.exag, p.z);
        nrm.push(nx, ny, nz);
        baseRim.push(p.y0);

        pos.push(p.x, yb, p.z);
        nrm.push(nx, ny, nz);
        baseRim.push(-1.0);
        vOff += 2;
      }
      for (let i = 0; i < G - 1; i++) {
        const t0 = start + i * 2;
        const b0 = t0 + 1;
        const t1 = t0 + 2;
        const b1 = t0 + 3;
        idx.push(t0, b0, b1, t0, b1, t1);
      }
    };

    // North (-Z), East (+X), South (+Z), West (-X)
    addSide((i) => ({ x: (i / (G - 1) - 0.5) * sizeX, z: -sizeY * 0.5, y0: this.demZ[i] }), 0, 0, -1);
    addSide((i) => ({ x: sizeX * 0.5, z: (i / (G - 1) - 0.5) * sizeY, y0: this.demZ[i * G + (G - 1)] }), 1, 0, 0);
    addSide((i) => { const c = G - 1 - i; return { x: (c / (G - 1) - 0.5) * sizeX, z: sizeY * 0.5, y0: this.demZ[(G - 1) * G + c] }; }, 0, 0, 1);
    addSide((i) => { const r = G - 1 - i; return { x: -sizeX * 0.5, z: (r / (G - 1) - 0.5) * sizeY, y0: this.demZ[r * G] }; }, -1, 0, 0);

    // Bottom cap
    const cb = vOff;
    const hx = sizeX * 0.5, hz = sizeY * 0.5;
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

  _buildPlumeCanopy() {
    // 3 soft translucent volumetric smoke layers hovering above the glacier & drifting with the wind
    this.plumeGroup = new THREE.Group();
    this.plumeUniforms = {
      uTime: { value: 0.0 },
      uDensity: { value: 0.35 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWetFrac: { value: 0.0 },
    };

    const layerHeights = [2.65, 3.25, 3.85];
    layerHeights.forEach((h, idx) => {
      const geo = new THREE.PlaneGeometry(14.5, 14.5, 1, 1);
      geo.rotateX(-Math.PI / 2);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          ...this.plumeUniforms,
          uLayerSeed: { value: idx * 3.7 + 1.1 },
          uLayerAlpha: { value: idx === 0 ? 0.44 : idx === 1 ? 0.34 : 0.24 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float uTime;
          uniform float uDensity;
          uniform vec2 uWindDir;
          uniform float uWetFrac;
          uniform float uLayerSeed;
          uniform float uLayerAlpha;
          varying vec2 vUv;

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
              p = p * 2.03 + vec2(9.2, 5.4);
              a *= 0.5;
            }
            return v;
          }

          void main() {
            vec2 centered = vUv * 2.0 - 1.0;
            float edge = 1.0 - smoothstep(0.45, 0.98, length(centered));
            vec2 drift = uWindDir * uTime * 0.14;
            vec2 p = vUv * 3.6 - drift + vec2(uLayerSeed);
            float n = fbm(p + 0.45 * vec2(fbm(p + 2.3), fbm(p - 1.7)));
            float wispy = smoothstep(0.28, 0.78, n);
            float alpha = wispy * edge * uDensity * uLayerAlpha;
            if (alpha < 0.004) discard;
            // Warm wildfire smoke amber-brown shifting cooler slate during wet frontal washout
            vec3 drySmoke = mix(vec3(0.36, 0.28, 0.22), vec3(0.66, 0.46, 0.28), wispy);
            vec3 wetSmoke = mix(vec3(0.32, 0.36, 0.42), vec3(0.56, 0.60, 0.66), wispy);
            vec3 col = mix(drySmoke, wetSmoke, uWetFrac * 0.72);
            gl_FragColor = vec4(col, alpha);
          }
        `,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = h;
      this.plumeGroup.add(mesh);
    });
    this.scene.add(this.plumeGroup);
  }

  _buildDepositionParticles() {
    // 16,000 GPU-driven carbonaceous soot particles descending from the plume onto the exact DEM surface!
    const COUNT = 16000;
    const baseXZ = new Float32Array(COUNT * 3);
    const seedAttr = new Float32Array(COUNT * 4); // [phase, fallSpeed, size, surfaceY0]

    for (let i = 0; i < COUNT; i++) {
      // Sample across the 11 x 11 km block
      const u = Math.random();
      const v = Math.random();
      const x = (u - 0.5) * this.sizeX * 0.98;
      const z = (v - 0.5) * this.sizeY * 0.98;
      const col = Math.min(this.G - 1, Math.floor(u * (this.G - 1)));
      const row = Math.min(this.G - 1, Math.floor(v * (this.G - 1)));
      const surfY0 = this.demZ[row * this.G + col];

      baseXZ[i * 3 + 0] = x;
      baseXZ[i * 3 + 1] = 0.0;
      baseXZ[i * 3 + 2] = z;

      seedAttr[i * 4 + 0] = Math.random();                // cycle phase 0..1
      seedAttr[i * 4 + 1] = 0.55 + Math.random() * 0.9;   // fall speed factor
      seedAttr[i * 4 + 2] = 0.6 + Math.random() * 1.4;    // particle size factor
      seedAttr[i * 4 + 3] = surfY0;                       // local ground elevation (km)
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(baseXZ, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seedAttr, 4));

    this.particleUniforms = {
      uTime: { value: 0.0 },
      uFlux: { value: 0.4 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 4.5 },
      uWetFrac: { value: 0.0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: this.particleUniforms,
      vertexShader: `
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uFlux;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uWetFrac;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vWet;

        void main() {
          // Activate fraction of particles proportional to hourly deposition flux
          float activeCut = smoothstep(0.0, 0.06, uFlux - aSeed.x * 0.92 + 0.08);
          float speed = (0.14 + 0.16 * uWetFrac) * aSeed.y;
          float t = fract(aSeed.x + uTime * speed);

          float ceilingY = 3.45 + max(0.0, (uExag - 1.3) * 1.65) + 0.75 * sin(aSeed.x * 31.4);
          float floorY = aSeed.w * uExag + 0.03;
          float y = mix(ceilingY, floorY, t);

          // Wind advection + gentle alpine turbulence as particles descend
          float windPush = t * (0.28 + 0.14 * uWindSpeed);
          vec2 swirl = vec2(
            sin(uTime * 1.3 + aSeed.x * 40.0 + t * 5.0),
            cos(uTime * 1.1 + aSeed.y * 35.0 + t * 4.5)
          ) * 0.14;

          vec3 pos = vec3(
            position.x + (uWindDir.x * windPush + swirl.x),
            y,
            position.z + (uWindDir.y * windPush + swirl.y)
          );
          // Wrap neatly inside block bounds
          pos.x = mod(pos.x + 5.5, 11.0) - 5.5;
          pos.z = mod(pos.z + 5.5, 11.0) - 5.5;

          float fadeIn = smoothstep(0.0, 0.14, t);
          float fadeOut = 1.0 - smoothstep(0.88, 1.0, t);
          vAlpha = activeCut * fadeIn * fadeOut * clamp(0.22 + 0.72 * uFlux, 0.0, 0.92);
          vWet = uWetFrac;

          vec4 mv = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mv;
          float basePt = mix(4.2, 5.4, uWetFrac) * aSeed.z * uPixelRatio;
          gl_PointSize = clamp(basePt * (14.0 / max(-mv.z, 1.5)), 1.5, 9.0) * step(0.01, vAlpha);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying float vAlpha;
        varying float vWet;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5 || vAlpha < 0.01) discard;
          float soft = 1.0 - smoothstep(0.15, 0.5, d);
          // Dry soot = warm charcoal-amber speck; wet scavenging = darker slate-blue laden droplet
          vec3 dryCol = vec3(0.86, 0.54, 0.24);
          vec3 wetCol = vec3(0.58, 0.68, 0.80);
          vec3 col = mix(dryCol, wetCol, vWet * 0.8);
          gl_FragColor = vec4(col, soft * vAlpha);
        }
      `,
    });

    this.particles = new THREE.Points(geo, mat);
    this.particles.frustumCulled = false;
    this.scene.add(this.particles);
  }

  _initCameraPresets() {
    this.presets = {
      block:   { pos: new THREE.Vector3(9.4, 8.6, -10.4),  target: new THREE.Vector3(0.0, 0.55, 0.15) },
      flyover: { pos: new THREE.Vector3(3.6, 2.35, -5.2),  target: new THREE.Vector3(-0.6, 1.05, 0.8) },
      plateau: { pos: new THREE.Vector3(-8.2, 7.6, 8.8),   target: new THREE.Vector3(-0.6, 1.05, 0.2) },
      top:     { pos: new THREE.Vector3(0.05, 17.5, -0.8), target: new THREE.Vector3(0.0, 0.4, 0.0) },
    };
  }

  setExaggeration(exag) {
    this.state.exag = exag;
    const pos = this.terrainGeo.attributes.position;
    const base = this.terrainGeo.attributes.aBaseElev;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, base.getX(i) * exag);
    }
    pos.needsUpdate = true;
    this.terrainGeo.computeVertexNormals();

    const sp = this.skirtGeo.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      const b = this.skirtBaseRim[i];
      if (b >= 0.0) sp.setY(i, b * exag);
    }
    sp.needsUpdate = true;

    this.terrainUniforms.uExag.value = exag;
    this.particleUniforms.uExag.value = exag;
    this.plumeGroup.position.y = Math.max(0.0, (exag - 1.3) * 1.65);
  }

  setMode(mode) {
    this.state.mode = mode;
    this.terrainUniforms.uMode.value = mode;
  }

  setContours(enabled) {
    this.state.contours = enabled;
    this.terrainUniforms.uContours.value = enabled ? 1.0 : 0.0;
  }

  setShowPlume(enabled) {
    this.state.showPlume = enabled;
    this.plumeGroup.visible = enabled;
    this.particles.visible = enabled;
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
    this._syncDepositionUniforms();
  }

  setEpisodeState({ hour, depCumFrac, depRateNorm, plumeDensity, wetFrac, windSpeed, windBearingDeg, dailyDepMgM2 }) {
    this.state.hour = hour;
    this.state.depProgress = depCumFrac;
    this.state.depRateNorm = depRateNorm;
    this.state.plumeDensity = plumeDensity;
    this.state.wetFrac = wetFrac;
    this.state.windSpeed = windSpeed;
    this.state.windBearingDeg = windBearingDeg;
    this.state.dailyDepMgM2 = dailyDepMgM2;

    // Wind vector in Three.js XZ (bearing FROM -> vector TOWARD downwind)
    const towardRad = ((windBearingDeg + 180) * Math.PI) / 180;
    const wx = Math.sin(towardRad);
    const wz = -Math.cos(towardRad); // North = -Z
    this.terrainUniforms.uWindDir.value.set(wx, wz);
    this.plumeUniforms.uWindDir.value.set(wx, wz);
    this.particleUniforms.uWindDir.value.set(wx, wz);

    this.plumeUniforms.uDensity.value = plumeDensity;
    this.plumeUniforms.uWetFrac.value = wetFrac;
    this.particleUniforms.uFlux.value = depRateNorm;
    this.particleUniforms.uWindSpeed.value = windSpeed;
    this.particleUniforms.uWetFrac.value = wetFrac;
    this.terrainUniforms.uDailyDep.value = dailyDepMgM2;

    this._syncDepositionUniforms();
    this._updateSunAndAtmosphere();
  }

  _syncDepositionUniforms() {
    this.terrainUniforms.uDepCumFrac.value = this.state.compareClean ? 0.0 : this.state.depProgress;
  }

  _updateSunAndAtmosphere() {
    // Realistic August solar arc at 52.2 deg N (sunrise ~06:30, solar noon ~13:30, sunset ~20:30)
    let azDeg, elDeg;
    if (this.state.autoSun) {
      const h = this.state.hour;
      const dayPhase = Math.max(-1, Math.min(1, (h - 13.5) / 7.2));
      azDeg = 180 + dayPhase * 105; // E-SE -> S -> W-NW
      const rawEl = Math.cos(dayPhase * Math.PI * 0.5) * 46.0;
      elDeg = Math.max(11.0, rawEl); // keep subtle moonlight/twilight relief visible at night!
    } else {
      azDeg = 152;
      elDeg = this.state.manualSunEl;
    }

    const azR = (azDeg * Math.PI) / 180;
    const elR = (elDeg * Math.PI) / 180;
    const dist = 20.0;
    this.sunLight.position.set(
      dist * Math.cos(elR) * Math.sin(azR),
      dist * Math.sin(elR),
      -dist * Math.cos(elR) * Math.cos(azR)
    );

    // Night vs day intensity + smoky amber dimming when plume is thick!
    const daylight = this.state.autoSun
      ? Math.max(0.0, Math.sin(Math.max(0, Math.min(1, (this.state.hour - 5.5) / 15.5)) * Math.PI))
      : 1.0;
    const smoke = this.state.showPlume ? this.state.plumeDensity : 0.0;

    // Sun color shifts from crisp alpine warm white -> deep wildfire smoke amber during heavy plume!
    const clearSun = new THREE.Color(0xfff1dc);
    const smokySun = new THREE.Color(0xffa44a);
    const nightMoon = new THREE.Color(0x6ea0dc);
    const sunCol = clearSun.clone().lerp(smokySun, smoke * 0.72);
    if (daylight < 0.25) {
      sunCol.lerp(nightMoon, 1.0 - daylight / 0.25);
    }
    this.sunLight.color.copy(sunCol);
    this.sunLight.intensity = (0.85 + 1.65 * Math.pow(daylight, 0.55)) * (1.0 - smoke * 0.28);

    // Hemisphere ambient sky: crisp glacial blue on clear days -> smoky bronze-slate during heavy plume
    const clearSky = new THREE.Color(0x88c4ff);
    const smokySky = new THREE.Color(0xb88b62);
    this.hemiLight.color.copy(clearSky).lerp(smokySky, smoke * 0.55);
    this.hemiLight.intensity = 0.50 + 0.32 * daylight;

    // Backdrop & exponential haze shift subtly with time of day and smoke density
    const clearBg = new THREE.Color(0x0a1320);
    const dayBg = new THREE.Color(0x132236);
    const smokeBg = new THREE.Color(0x211914);
    const bg = clearBg.clone().lerp(dayBg, daylight * 0.85).lerp(smokeBg, smoke * 0.65);
    this.scene.background.copy(bg);
    this.scene.fog.color.copy(bg);
    this.scene.fog.density = 0.010 + smoke * 0.012;
  }

  flyTo(presetName) {
    const p = this.presets[presetName];
    if (!p) return;
    this._camAnim = {
      t: 0,
      dur: 0.75,
      fromPos: this.camera.position.clone(),
      toPos: p.pos.clone(),
      fromTarget: this.controls.target.clone(),
      toTarget: p.target.clone(),
    };
  }

  getNorthAngleDeg() {
    // Camera horizontal azimuth relative to North (-Z)
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    // Angle of North (-Z) on screen: atan2(dir.x, -dir.z)
    return (Math.atan2(dir.x, -dir.z) * 180) / Math.PI;
  }

  projectLandmark(lm) {
    const v = new THREE.Vector3(lm.x, lm.y0 * this.state.exag + 0.05, lm.z);
    v.project(this.camera);
    if (v.z > 1.0 || v.z < -1.0 || v.x < -1.08 || v.x > 1.08 || v.y < -1.08 || v.y > 1.08) {
      return null;
    }
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
    this.particleUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2);
  }

  capturePNG() {
    this.renderer.render(this.scene, this.camera);
    return this.canvas.toDataURL("image/png");
  }

  update(dt) {
    // Smooth camera preset animation
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

    // Advance plume & particle clocks
    this.plumeUniforms.uTime.value += dt * (0.6 + 0.15 * this.state.windSpeed);
    this.particleUniforms.uTime.value += dt;

    this.renderer.render(this.scene, this.camera);
  }
}
