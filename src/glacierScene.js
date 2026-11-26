import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Three.js 3D Immersive Glacier & Multi-Day Weather Simulator:
 * - Procedural atmospheric Sky Dome (sunrise/sunset twilight, solar Mie glow, alpine stars at night, smoke & storm skies)
 * - 320x320 real Copernicus GLO-30 DEM with slope-aware multi-day fresh snowpack accumulation & meltback,
 *   wet rain specular sheen, progressive FireWork soot darkening, and live Jennings rain-snow isotherm
 * - 5 terrain-draped 3D volumetric smoke strata pouring down the valley
 * - Dual-scale realistic RAIN: diagonal valley rain shafts + 14,000 camera-centered near-field slanted rain streaks
 * - Dual-scale realistic SNOW: soft feathery bokeh snowflake texture + 12,000 turbulent fluttering flakes + ridge spindrift
 * - Immersive "Sur le glacier (AWS)" first-person camera right on the ice at 2,180 m!
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

    this.state = {
      exag: 1.3,
      mode: 0,
      contours: false,
      showSmoke: true,
      showClouds: true,
      showPrecip: true,
      showIsotherm: true,
      showSunArc: true,
      shadows: true,
      spin: false,
      boost: 2.2,
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
    this._buildVolumetricSmoke();
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
    this.scene.fog = new THREE.FogExp2(0x101c2c, 0.012);

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
    // Full procedural atmospheric Sky Dome (sunrise/sunset twilight, solar Mie halo, starry night, real high cirrus & mid clouds, smoke & storm skies!)
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

    const skyGeo = new THREE.SphereGeometry(145, 48, 32);
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
          float horiz = pow(1.0 - max(h, 0.0), 3.2);

          // Night alpine sky
          vec3 nightZen = vec3(0.015, 0.028, 0.058);
          vec3 nightHor = vec3(0.045, 0.072, 0.125);
          vec3 skyNight = mix(nightZen, nightHor, horiz);

          // Clear high-altitude Rocky Mountain blue sky
          vec3 clearZen = vec3(0.070, 0.210, 0.445);
          vec3 clearHor = vec3(0.415, 0.590, 0.775);
          vec3 skyClear = mix(clearZen, clearHor, horiz);

          // Moody overcast storm sky
          vec3 stormZen = vec3(0.140, 0.185, 0.245);
          vec3 stormHor = vec3(0.315, 0.365, 0.425);
          vec3 skyStorm = mix(stormZen, stormHor, horiz);

          // Wildfire smoky bronze-amber sky
          vec3 smokeZen = vec3(0.190, 0.145, 0.115);
          vec3 smokeHor = vec3(0.470, 0.300, 0.175);
          vec3 skySmoke = mix(smokeZen, smokeHor, horiz);

          vec3 daySky = mix(skyClear, skyStorm, clamp(uCloud * 0.76, 0.0, 1.0));
          daySky = mix(daySky, skySmoke, clamp(uSmoke * 0.72, 0.0, 1.0));

          // Golden / rose alpine sunrise & sunset glow along the sun horizon
          float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
          vec3 twilightBand = mix(vec3(0.85, 0.36, 0.16), vec3(0.98, 0.68, 0.36), pow(sunDot, 2.0));
          daySky = mix(daySky, twilightBand, uTwilight * horiz * (0.45 + 0.55 * pow(sunDot, 1.5)) * (1.0 - uCloud * 0.45));

          vec3 col = mix(skyNight, daySky, uDaylight);

          // Real projected hemispherical HIGH CIRRUS (uCloudHigh) & upper ALTOSTRATUS (uCloudMid) across the sky dome!
          if (uShowClouds > 0.5 && h > 0.025 && (uCloudHigh > 0.05 || uCloudMid > 0.05)) {
            vec2 skyPlane = d.xz / (h + 0.14);
            float horizonFade = smoothstep(0.025, 0.22, h);
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);

            // Feathery wind-streaked alpine cirrus (>8 km)
            if (uCloudHigh > 0.05) {
              vec2 cUv = vec2(dot(skyPlane, uWindDir) * 0.38 - uTime * 0.012, dot(skyPlane, wPerp) * 1.15);
              float w1 = sfbm(cUv * 1.4 + vec2(2.3, 7.1));
              float cirrus = smoothstep(0.68 - uCloudHigh * 0.36, 0.88, sfbm(cUv + 0.65 * w1));
              float cAlpha = cirrus * horizonFade * clamp(uCloudHigh * 0.78, 0.0, 0.68);
              vec3 cDay = mix(vec3(0.86, 0.90, 0.96), vec3(1.0, 0.68, 0.44), uTwilight * 0.75);
              cDay = mix(cDay, vec3(0.80, 0.60, 0.44), uSmoke * 0.55);
              vec3 cNight = vec3(0.10, 0.14, 0.22);
              vec3 cCol = mix(cNight, cDay, uDaylight) + vec3(0.28, 0.22, 0.14) * pow(sunDot, 8.0) * uDaylight;
              col = mix(col, cCol, cAlpha);
            }

            // Distant mid-level stratocumulus / altostratus (3-8 km) filling out real overcast & partly cloudy skies
            if (uCloudMid > 0.06) {
              vec2 mUv = skyPlane * 0.48 - uWindDir * uTime * 0.018 + vec2(4.7, 9.2);
              float warp = sfbm(mUv * 1.2 + vec2(1.4, 3.8));
              float midN = sfbm(mUv + 0.55 * warp);
              float midMask = smoothstep(0.66 - uCloudMid * 0.44, 0.86, midN);
              float mAlpha = midMask * horizonFade * clamp(uCloudMid * 0.85, 0.0, 0.82);
              vec3 mDark = mix(vec3(0.20, 0.25, 0.32), vec3(0.13, 0.16, 0.22), uCloud * 0.6);
              vec3 mLit = mix(vec3(0.82, 0.87, 0.93), vec3(0.96, 0.64, 0.38), uTwilight * 0.65);
              vec3 mDay = mix(mDark, mLit, clamp(0.25 + 0.55 * (1.0 - midMask) + 0.35 * pow(sunDot, 3.0), 0.0, 1.0));
              mDay = mix(mDay, vec3(0.55, 0.42, 0.30), uSmoke * 0.45);
              vec3 mCol = mix(vec3(0.06, 0.09, 0.15), mDay, uDaylight);
              col = mix(col, mCol, mAlpha);
            }
          }

          // Subtle below-horizon ground reflection for orbital block view
          if (h < 0.0) {
            col = mix(col, vec3(0.04, 0.06, 0.095), clamp(-h * 5.0, 0.0, 0.85));
          }

          // Visible solar disc & Mie scattering corona — clearly reflects live cloud & wildfire smoke masking!
          if (uDaylight > 0.04 && uSunDir.y > -0.02) {
            float maskKeep = clamp(uSwNorm, 0.04, 1.0);
            float disc = smoothstep(0.9978, 0.9994, sunDot);
            float innerHalo = pow(sunDot, 48.0) * 0.95;
            float wideHalo = pow(sunDot, 9.0) * 0.36;
            vec3 clearCol = vec3(1.0, 0.96, 0.84);
            vec3 smokeOrb = vec3(1.0, 0.30, 0.08);
            vec3 cloudVeil = vec3(0.74, 0.80, 0.88);
            vec3 sunTint = mix(clearCol, cloudVeil, clamp(uCloud * 0.85, 0.0, 1.0));
            sunTint = mix(sunTint, smokeOrb, clamp(uSmoke * 0.92 + uTwilight * 0.45, 0.0, 1.0));
            // Sharp blazing disc when clear, smoky red orb in smoke, diffused pale patch behind heavy clouds
            float discPower = disc * (2.6 * pow(maskKeep, 0.85) * (1.0 - uCloud * 0.72) + 0.45 * uSmoke * (1.0 - uCloud * 0.65));
            float haloPower = (innerHalo * (0.25 + 0.95 * maskKeep) + wideHalo * (0.35 + 0.65 * maskKeep));
            col += sunTint * (discPower + haloPower) * uDaylight;
          }

          // Crisp alpine stars at night (when clear sky & dark)
          float nightClear = (1.0 - uDaylight) * (1.0 - uCloud * 0.85) * (1.0 - uSmoke * 0.7) * smoothstep(0.08, 0.35, h);
          if (nightClear > 0.05) {
            vec3 cell = floor(d * 240.0);
            float rnd = hash31(cell);
            float star = smoothstep(0.9965, 0.9998, rnd);
            col += vec3(0.85, 0.92, 1.0) * star * nightClear * 0.9;
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);

    // Lighting
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

    const floorGeo = new THREE.PlaneGeometry(130, 130);
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

  _buildSolarOrbAndArc() {
    // Physical 3D Solar Disc + subtle solar trajectory arc hovering over the Athabasca massif!
    // Clearly visible in Bloc 3D / Survol so you always SEE the sun AND how strongly clouds or wildfire smoke mask it!
    // Smoothly yields to the full-scale Sky Dome sun when immersed ("Sur le glacier").
    this.sunGroup = new THREE.Group();
    const arcR = 8.8;
    const arcPts = [];
    for (let h = 6.2; h <= 20.8; h += 0.2) {
      const dp = Math.max(-1.0, Math.min(1.0, (h - 13.5) / 7.1));
      const az = ((180 + dp * 110) * Math.PI) / 180;
      const el = (Math.max(1.5, Math.cos(dp * Math.PI * 0.5) * 44.0) * Math.PI) / 180;
      arcPts.push(new THREE.Vector3(
        arcR * Math.cos(el) * Math.sin(az),
        0.5 + arcR * Math.sin(el) * 0.72,
        -arcR * Math.cos(el) * Math.cos(az)
      ));
    }
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
    this.sunArcMat = new THREE.LineDashedMaterial({
      color: 0xfde68a,
      transparent: true,
      opacity: 0.24,
      dashSize: 0.24,
      gapSize: 0.22,
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
    const orbGeo = new THREE.PlaneGeometry(3.4, 3.4);
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
          float core = smoothstep(coreSharp + 0.10, coreSharp * 0.35, r) * (0.28 + 0.95 * trans);
          float corona = exp(-r * mix(3.4, 5.2, uCloud)) * (0.20 + 0.75 * trans);
          float veilRing = smoothstep(0.55, 0.18, abs(r - 0.24)) * (uCloud * 0.25 + uSmoke * 0.22);

          vec3 clearSun = vec3(1.0, 0.96, 0.80);
          vec3 smokeSun = vec3(1.0, 0.32, 0.08);
          vec3 cloudSun = vec3(0.72, 0.80, 0.90);
          vec3 col = mix(clearSun, cloudSun, clamp(uCloud * 0.82, 0.0, 1.0));
          col = mix(col, smokeSun, clamp(uSmoke * 0.92 + uTwilight * 0.45, 0.0, 1.0));

          float alpha = clamp((core + corona + veilRing) * uDaylight * uArcVis, 0.0, 1.0);
          if (alpha < 0.005) discard;
          gl_FragColor = vec4(col * (0.55 + 0.85 * trans), alpha);
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
      uMode: { value: 0.0 },
      uContours: { value: 0.0 },
      uShowIsotherm: { value: 1.0 },
      uDepCumFrac: { value: 0.0 },
      uDepBoost: { value: this.state.boost },
      uRainSnowM: { value: this.state.rainSnowM },
      uSnowPackMm: { value: 0.0 },
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
          uniform float uMode;
          uniform float uContours;
          uniform float uShowIsotherm;
          uniform float uDepCumFrac;
          uniform float uDepBoost;
          uniform float uRainSnowM;
          uniform float uSnowPackMm;
          uniform float uRainIntensity;
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

          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.84 + 0.24 * sastrugi, isSnow) * (0.90 + 0.16 * grain);

          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          // Slope-aware multi-day fresh snowpack + live active snowfall dusting above Jennings line!
          float activeSnowDust = clamp(uRainIntensity * 0.28, 0.0, 0.32) * smoothstep(uRainSnowM - 60.0, uRainSnowM + 140.0, elevM);
          float snowDepthNorm = clamp(uSnowPackMm / 18.0 + activeSnowDust * 0.65, 0.0, 1.0);
          // Snow lingers longer higher up, retreats upward as it melts
          float snowLineEff = min(mix(2580.0, 2040.0, snowDepthNorm), mix(3500.0, uRainSnowM - 40.0, smoothstep(0.05, 0.25, activeSnowDust)));
          float elevMask = smoothstep(snowLineEff - 110.0, snowLineEff + 170.0, elevM);
          float slopeHold = smoothstep(0.54, 0.86, vSlopeUp + 0.14 * sastrugi);
          float freshSnow = snowDepthNorm * elevMask * slopeHold * (0.72 + 0.35 * sastrugi);
          freshSnow = clamp(freshSnow, 0.0, 0.92);

          // Active rain wets lower bare ice & dark rock below live rain-snow line
          float belowRainLine = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 110.0, elevM);
          float wetSurface = clamp(uRainIntensity * 0.62, 0.0, 0.78) * belowRainLine;

          if (uMode < 0.5) {
            diffuseColor.rgb *= microShade;
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.84, 0.89, 0.95), isSnow * 0.45);

            float depVis = pow(clamp(localDepNorm, 0.0, 1.35), 0.72);
            float sootCover = clamp(depVis * 0.34 * uDepBoost * (0.35 + 0.65 * isCryo), 0.0, 0.88);
            float impurityEnrich = mix(1.0, 1.28, isIce) * (0.78 + 0.44 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.90);
            // Fresh snow buries wildfire soot and resets surface albedo!
            sootCover *= (1.0 - freshSnow * 0.88);

            vec3 sootTint = mix(vec3(0.048, 0.036, 0.025), vec3(0.022, 0.019, 0.017), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.22 + sootTint * 0.78, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.18 * (1.0 - isCryo));

            // Rain wets rock & moraines darker
            diffuseColor.rgb *= (1.0 - wetSurface * 0.28 * (1.0 - isSnow));

            // Crisp fresh alpine snow blanket (realistic cool luminance, never blown-out flat white)
            vec3 freshSnowCol = vec3(0.64, 0.71, 0.81) * (0.88 + 0.20 * sastrugi);
            diffuseColor.rgb = mix(diffuseColor.rgb, freshSnowCol, freshSnow * 0.86);
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
          rVal = mix(rVal, 0.15, clamp(uRainIntensity * 0.38, 0.0, 0.62) * belowR);
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

  _buildVolumetricSmoke() {
    this.smokeGroup = new THREE.Group();
    this.smokeSharedUniforms = {
      uTime: { value: 0.0 },
      uDensity: { value: 0.45 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uSunDir: { value: this._sunDir.clone() },
      uSunPower: { value: 0.6 },
      uWetFrac: { value: 0.0 },
      uExag: { value: this.state.exag },
    };

    const S = 72;
    const basePos = new Float32Array(S * S * 3);
    const baseDem = new Float32Array(S * S);
    const uvs = new Float32Array(S * S * 2);
    for (let r = 0; r < S; r++) {
      const v = r / (S - 1), z = (v - 0.5) * this.sizeY * 1.12;
      for (let c = 0; c < S; c++) {
        const u = c / (S - 1), x = (u - 0.5) * this.sizeX * 1.12;
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

    const layers = [
      { heightAbove: 0.22, follow: 0.85, alpha: 0.30, scale: 2.7, speed: 0.72, seed: 1.3 },
      { heightAbove: 0.52, follow: 0.70, alpha: 0.29, scale: 2.2, speed: 0.90, seed: 4.1 },
      { heightAbove: 0.90, follow: 0.52, alpha: 0.26, scale: 1.9, speed: 1.08, seed: 7.9 },
      { heightAbove: 1.38, follow: 0.30, alpha: 0.22, scale: 1.6, speed: 1.24, seed: 11.4 },
      { heightAbove: 1.98, follow: 0.12, alpha: 0.19, scale: 1.4, speed: 1.42, seed: 15.8 },
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
            float baseY = mix(0.75 * uExag, aDemY0 * uExag, uFollow) + uHeightAbove;
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

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
          }
          float fbm(vec2 p) {
            float v=0.0, a=0.5;
            for (int i=0; i<5; i++) { v += a*noise(p); p = p*2.04+vec2(7.3,11.9); a*=0.5; }
            return v;
          }
          void main() {
            if (uDensity < 0.02) discard;
            // Fade smoke very close to camera so first-person glacier view stays breathable!
            float camDist = length(vWorldPos - cameraPosition);
            float nearFade = smoothstep(0.35, 1.6, camDist);

            vec2 c = vUv * 2.0 - 1.0;
            float edge = 1.0 - smoothstep(0.42, 0.96, max(abs(c.x), abs(c.y)) * 0.55 + length(c) * 0.55);
            vec2 drift = uWindDir * uTime * 0.16 * uSpeedMul;
            vec2 q = vUv * uNoiseScale - drift + vec2(uSeed);
            vec2 warp = vec2(fbm(q + vec2(1.7, 9.2)), fbm(q + vec2(8.3, 2.8)));
            float n = fbm(q + 0.65 * warp - drift * 0.35);

            float valleyPool = 1.15 - 0.38 * vElevNorm;
            float cloud = smoothstep(0.30, 0.78, n * valleyPool);
            float alpha = cloud * edge * nearFade * uDensity * uLayerAlpha;
            if (alpha < 0.004) discard;

            vec3 viewDir = normalize(vWorldPos - cameraPosition);
            float fwd = pow(max(dot(viewDir, normalize(uSunDir)), 0.0), 4.0) * uSunPower;
            vec3 baseDark = mix(vec3(0.20, 0.17, 0.15), vec3(0.24, 0.28, 0.33), uWetFrac * 0.72);
            vec3 baseLit  = mix(vec3(0.72, 0.50, 0.30), vec3(0.58, 0.63, 0.69), uWetFrac * 0.72);
            vec3 col = mix(baseDark, baseLit, clamp(0.22 + 0.65 * uSunPower + 0.35 * cloud, 0.0, 1.0));
            col += vec3(0.55, 0.32, 0.12) * fwd * (1.0 - uWetFrac * 0.6);
            gl_FragColor = vec4(col, alpha);
          }
        `,
      });
      this.smokeGroup.add(new THREE.Mesh(sharedGeo, mat));
    });
    this.scene.add(this.smokeGroup);
  }

  _buildCloudDeck() {
    // REAL 3D VOLUMETRIC MOUNTAIN CLOUDS!
    // 64 instanced 3D camera-facing sculpted FBM cumulus/nimbus puffs with analytical sun-direction shading,
    // shaded storm undersides, and Mie silver-lining glow — driven directly by real hourly ERA5 cloudLow & cloudMid!
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

    const COUNT = 64;
    const quad = new THREE.PlaneGeometry(1, 1, 1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index;
    geo.attributes.position = quad.attributes.position;
    geo.attributes.uv = quad.attributes.uv;

    const aOrigin = new Float32Array(COUNT * 3); // [x, altOffset, z]
    const aCloudAttr = new Float32Array(COUNT * 4); // [width, height, threshold (0..1), layerType (0=low orographic, 1=mid deck)]
    const aSeed = new Float32Array(COUNT * 2); // [noiseSeed, driftMul]

    for (let i = 0; i < COUNT; i++) {
      const isMid = i >= 34 ? 1.0 : 0.0;
      const idxInLayer = isMid > 0.5 ? (i - 34) : i;
      const layerN = isMid > 0.5 ? (COUNT - 34) : 34;
      const ring = Math.sqrt((idxInLayer + 0.45) / layerN);
      const ang = idxInLayer * 2.3999632 + (Math.random() - 0.5) * 0.45;
      const spread = isMid > 0.5 ? 0.68 : 0.54;
      aOrigin[i * 3 + 0] = Math.cos(ang) * ring * this.sizeX * spread;
      aOrigin[i * 3 + 1] = isMid > 0.5 ? (3.45 + Math.random() * 0.85) : (0.55 + Math.random() * 0.95);
      aOrigin[i * 3 + 2] = Math.sin(ang) * ring * this.sizeY * spread;

      aCloudAttr[i * 4 + 0] = isMid > 0.5 ? (4.6 + Math.random() * 3.8) : (3.0 + Math.random() * 2.8);
      aCloudAttr[i * 4 + 1] = isMid > 0.5 ? (1.6 + Math.random() * 1.1) : (1.35 + Math.random() * 1.05);
      // Deterministic rank threshold so clouds populate naturally from sparse cumulus (20%) to full overcast (100%)
      aCloudAttr[i * 4 + 2] = (idxInLayer + 0.5) / layerN;
      aCloudAttr[i * 4 + 3] = isMid;

      aSeed[i * 2 + 0] = Math.random() * 47.0;
      aSeed[i * 2 + 1] = 0.72 + Math.random() * 0.55;
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
          // Smoothly bring cloud clusters into existence as real ERA5 cover increases!
          float vis = smoothstep(rank - 0.18, rank + 0.14, cover * 1.12);
          if (vis < 0.01) {
            vOpacity = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float domain = isMid > 0.5 ? 16.0 : 13.0;
          vec2 drift = uWindDir * uTime * (0.09 + 0.03 * uWindSpeed) * aSeed.y * (isMid > 0.5 ? 1.25 : 0.85);
          vec2 cxz = mod(aOrigin.xz + drift + domain * 0.5, domain) - domain * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;

          float exagOff = max(0.0, (uExag - 1.3) * 1.35);
          float cy = isMid > 0.5
            ? (aOrigin.y - uStormIntensity * 0.75 + exagOff)
            : max(groundY + 0.42, groundY + aOrigin.y - uStormIntensity * 0.28);

          vec3 center = vec3(cxz.x, cy, cxz.y);
          vCenter = center;

          // Soft spherical/cylindrical camera billboard so 3D puffs look voluminous from EVERY angle (Bloc 3D & Sur le glacier!)
          vec3 viewDir = normalize(cameraPosition - center);
          vec3 worldUp = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(worldUp, viewDir));
          vec3 up = normalize(mix(worldUp, cross(viewDir, right), 0.55));

          float puffGrow = 0.82 + 0.36 * cover + 0.22 * uStormIntensity;
          vec3 wp = center + right * (position.x * aCloudAttr.x * puffGrow) + up * (position.y * aCloudAttr.y * puffGrow);
          vWorldPos = wp;

          // Keep puffs from popping harshly right inside the viewer lens
          float camDist = length(center - cameraPosition);
          float nearFade = smoothstep(0.65, 2.1, camDist);
          float edgeDom = 1.0 - smoothstep(domain * 0.34, domain * 0.52, max(abs(cxz.x), abs(cxz.y)));
          vOpacity = vis * nearFade * edgeDom * (0.44 + 0.34 * cover);
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
          // Sculpted cumulus silhouette: flatter condensation base at bottom, billowy cauliflower crown at top!
          vec2 p = vUv * 2.0 - 1.0;
          float baseFlat = p.y < 0.0 ? p.y * 1.48 : p.y * 0.92;
          float radial = length(vec2(p.x * 0.95, baseFlat));
          if (radial > 1.05) discard;

          vec2 q = vUv * 3.1 + vec2(vSeed, vSeed * 0.37) + vec2(uTime * 0.025, 0.0);
          float n = fbm(q + 0.45 * vec2(fbm(q + 2.1), fbm(q + 6.4)));
          float shape = (1.0 - smoothstep(0.18, 0.98, radial)) * smoothstep(0.24, 0.78, n + (1.0 - radial) * 0.42);
          float alpha = shape * vOpacity;
          if (alpha < 0.005) discard;

          // Analytical 3D directional lighting (bright sunlit crowns, cool blue-slate shaded cloud bases, Mie silver lining!)
          float heightShade = clamp(vUv.y * 1.15 - 0.10 + (n - 0.5) * 0.35, 0.0, 1.0);
          vec3 rayDir = normalize(vWorldPos - cameraPosition);
          float fwdMie = pow(max(dot(rayDir, normalize(uSunDir)), 0.0), 5.0) * (1.0 - shape * 0.55) * uDaylight;

          // Fair-weather sunlit Rocky Mountain cumulus vs heavy dark-base alpine storm nimbus
          vec3 fairTop = mix(vec3(0.88, 0.92, 0.97), vec3(1.0, 0.72, 0.45), uTwilight * 0.72);
          vec3 fairBot = vec3(0.38, 0.45, 0.56);
          vec3 stormTop = vec3(0.54, 0.60, 0.68);
          vec3 stormBot = vec3(0.13, 0.17, 0.23);

          vec3 topCol = mix(fairTop, stormTop, clamp(uStormIntensity * 0.82, 0.0, 1.0));
          vec3 botCol = mix(fairBot, stormBot, clamp(uStormIntensity * 0.88, 0.0, 1.0));
          vec3 dayCol = mix(botCol, topCol, heightShade * (0.35 + 0.65 * uSunPower));
          dayCol = mix(dayCol, vec3(0.62, 0.44, 0.30), uSmoke * 0.42);
          dayCol += mix(vec3(0.42, 0.46, 0.52), vec3(0.68, 0.46, 0.24), uTwilight + uSmoke * 0.5) * fwdMie * 0.75;

          vec3 nightCol = mix(vec3(0.05, 0.07, 0.12), vec3(0.12, 0.16, 0.24), heightShade);
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
          float envY = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.72, vUv.y);

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
          float along = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.08, vUv.y);
          float headGlint = smoothstep(0.35, 0.06, vUv.y) * 0.45;
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
    this.presets = {
      block:     { pos: new THREE.Vector3(9.4, 8.5, -10.3),  target: new THREE.Vector3(0.0, 0.55, 0.15),  fov: 38 },
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

    this.smokeSharedUniforms.uExag.value = exag;
    this.cloudUniforms.uExag.value = exag;
    this.virgaUniforms.uExag.value = exag;
    this.mistUniforms.uExag.value = exag;
    this.rainUniforms.uExag.value = exag;
    this.snowUniforms.uExag.value = exag;
    this._syncCloudCeiling();

    // Keep on-glacier camera preset height synced with new relief exaggeration
    const awsY0 = this._sampleDemXZ(1.15, -1.45);
    this.presets.onglacier.pos.y = awsY0 * exag + 0.22;
    this.presets.onglacier.target.y = awsY0 * exag + 0.72;
  }

  _syncCloudCeiling() {
    const storm = Math.min(1.0, this.state.precipMmH / 2.2);
    const exagOff = Math.max(0, (this.state.exag - 1.3) * 1.35);
    this.cloudUniforms.uStormIntensity.value = storm;
    this.virgaUniforms.uCloudTopY.value = 3.55 - storm * 0.72 + exagOff;
  }

  setMode(mode) { this.state.mode = mode; this.terrainUniforms.uMode.value = mode; }
  setContours(on) { this.state.contours = on; this.terrainUniforms.uContours.value = on ? 1.0 : 0.0; }
  setShowSmoke(on) { this.state.showSmoke = on; this.smokeGroup.visible = on; }
  setShowClouds(on) {
    this.state.showClouds = on;
    this.cloudGroup.visible = on;
    this.skyUniforms.uShowClouds.value = on ? 1.0 : 0.0;
  }
  setShowSunArc(on) {
    this.state.showSunArc = on;
    this.sunGroup.visible = on;
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
  setCompareClean(clean) { this.state.compareClean = clean; this._syncSurfaceUniforms(); }

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
    this.smokeSharedUniforms.uWindDir.value.set(wx, wz);
    this.cloudUniforms.uWindDir.value.set(wx, wz);
    this.virgaUniforms.uWindDir.value.set(wx, wz);
    this.mistUniforms.uWindDir.value.set(wx, wz);
    this.rainUniforms.uWindDir.value.set(wx, wz);
    this.snowUniforms.uWindDir.value.set(wx, wz);

    this.smokeSharedUniforms.uDensity.value = plumeDensity;
    this.smokeSharedUniforms.uWetFrac.value = wetFrac;
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
    this.terrainUniforms.uSnowPackMm.value = this.state.compareClean ? 0.0 : this.state.snowPackMm;
    this.terrainUniforms.uRainIntensity.value = Math.min(1.5, this.state.precipMmH / 2.0);
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

    // Sky sun direction (can dip below horizon cleanly for sunrise/sunset twilight!)
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
    this.smokeSharedUniforms.uSunDir.value.copy(this._sunDir);
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
    this.skyUniforms.uSmoke.value = smoke;
    this.skyUniforms.uCloud.value = cloud;
    this.skyUniforms.uCloudMid.value = this.state.showClouds ? this.state.cloudMid : 0.0;
    this.skyUniforms.uCloudHigh.value = this.state.showClouds ? this.state.cloudHigh : 0.0;
    this.skyUniforms.uSwNorm.value = trans;

    this.cloudUniforms.uDaylight.value = dayFactor;
    this.cloudUniforms.uTwilight.value = twilight;
    this.cloudUniforms.uSmoke.value = smoke;

    // Update physical 3D Sun orb along the visible solar arc over Athabasca
    const arcR = 8.8;
    const orbEl = (Math.max(1.0, rawEl) * Math.PI) / 180;
    this.sunOrb.position.set(
      arcR * Math.cos(orbEl) * Math.sin(azR),
      0.5 + arcR * Math.sin(orbEl) * 0.72,
      -arcR * Math.cos(orbEl) * Math.cos(azR)
    );
    this.sunOrbUniforms.uSunTrans.value = trans;
    this.sunOrbUniforms.uSmoke.value = smoke;
    this.sunOrbUniforms.uCloud.value = cloud;
    this.sunOrbUniforms.uDaylight.value = dayFactor;
    this.sunOrbUniforms.uTwilight.value = twilight;
    this.sunArcMat.opacity = 0.08 + 0.18 * dayFactor * trans;

    const clearSun = new THREE.Color(0xfff3e0);
    const twilightSun = new THREE.Color(0xff9b54);
    const smokySun = new THREE.Color(0xff963c);
    const overcastSun = new THREE.Color(0xc5d6ea);
    const moonCol = new THREE.Color(0x6d9cd4);

    const sunCol = clearSun.clone()
      .lerp(overcastSun, cloud * 0.45)
      .lerp(twilightSun, twilight * 0.72)
      .lerp(smokySun, smoke * 0.62)
      .lerp(moonCol, 1.0 - dayFactor);

    this.sunLight.color.copy(sunCol);
    const dayInt = 0.62 + 2.45 * Math.pow(Math.max(swNorm, dayFactor * 0.14), 0.72);
    this.sunLight.intensity = dayFactor > 0.05 ? dayInt : 0.72;

    const clearSky = new THREE.Color(0x7fc0ff);
    const overcastSky = new THREE.Color(0x8899ad);
    const smokeSky = new THREE.Color(0xb48458);
    const skyCol = clearSky.clone().lerp(overcastSky, cloud * 0.58).lerp(smokeSky, smoke * 0.50);
    this.hemiLight.color.copy(skyCol);
    this.hemiLight.intensity = 0.34 + (0.48 * Math.sqrt(Math.max(swNorm, 0.08)) + 0.18 * cloud) * dayFactor;

    const sunPower = dayFactor * (0.25 + 0.75 * swNorm);
    this.smokeSharedUniforms.uSunPower.value = Math.max(0.08, sunPower);
    this.cloudUniforms.uSunPower.value = Math.max(0.08, sunPower);
    this.virgaUniforms.uSunPower.value = Math.max(0.12, sunPower);
    this.mistUniforms.uSunPower.value = Math.max(0.12, sunPower);
    this.rainUniforms.uSunPower.value = Math.max(0.14, sunPower);
    this.snowUniforms.uSunPower.value = Math.max(0.18, sunPower);

    // Distance fog harmonizes seamlessly with sky dome horizon & valley moisture
    const nightFog = new THREE.Color(0x070e18);
    const clearFog = new THREE.Color(0x284364);
    const stormFog = new THREE.Color(0x2d3744);
    const smokeFog = new THREE.Color(0x3a281d);
    const dayFog = clearFog.clone().lerp(stormFog, cloud * 0.72).lerp(smokeFog, smoke * 0.68);
    this.scene.fog.color.copy(nightFog.clone().lerp(dayFog, dayFactor));
    const rainMist = Math.min(0.018, this.state.precipMmH * 0.0045);
    this.scene.fog.density = 0.0065 + smoke * 0.010 + cloud * 0.0035 + rainMist;
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

    const windRate = 0.55 + 0.16 * this.state.windSpeed;
    this.skyUniforms.uTime.value += dt * windRate;
    this.smokeSharedUniforms.uTime.value += dt * windRate;
    this.cloudUniforms.uTime.value += dt * (0.45 + 0.12 * this.state.windSpeed);
    this.virgaUniforms.uTime.value += dt;
    this.mistUniforms.uTime.value += dt;
    this.rainUniforms.uTime.value += dt;
    this.snowUniforms.uTime.value += dt;

    this.renderer.render(this.scene, this.camera);
  }
}
