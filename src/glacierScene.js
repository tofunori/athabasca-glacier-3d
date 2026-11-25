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
      depProgress: 0.0,
      plumeDensity: 0.4,
      cloudCover: 0.4,
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
    this._buildTerrain(rgbTex, maskTex);
    this._buildVolumetricSmoke();
    this._buildCloudDeck();
    this._buildRainCurtains();
    this._buildNearAndValleyRain();
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
    // Full procedural atmospheric Sky Dome (sunrise/sunset twilight, solar Mie halo, starry night, smoke & storm skies!)
    this.skyUniforms = {
      uSunDir: { value: this._sunDir.clone() },
      uDaylight: { value: 0.8 },
      uTwilight: { value: 0.0 },
      uSmoke: { value: 0.3 },
      uCloud: { value: 0.3 },
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
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSmoke;
        uniform float uCloud;
        uniform float uSwNorm;
        varying vec3 vDir;

        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
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
          vec3 clearZen = vec3(0.075, 0.215, 0.440);
          vec3 clearHor = vec3(0.420, 0.590, 0.770);
          vec3 skyClear = mix(clearZen, clearHor, horiz);

          // Moody overcast storm sky
          vec3 stormZen = vec3(0.145, 0.190, 0.250);
          vec3 stormHor = vec3(0.320, 0.370, 0.430);
          vec3 skyStorm = mix(stormZen, stormHor, horiz);

          // Wildfire smoky bronze-amber sky
          vec3 smokeZen = vec3(0.190, 0.145, 0.115);
          vec3 smokeHor = vec3(0.470, 0.300, 0.175);
          vec3 skySmoke = mix(smokeZen, smokeHor, horiz);

          vec3 daySky = mix(skyClear, skyStorm, clamp(uCloud * 0.78, 0.0, 1.0));
          daySky = mix(daySky, skySmoke, clamp(uSmoke * 0.72, 0.0, 1.0));

          // Golden / rose alpine sunrise & sunset glow along the sun horizon
          float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
          vec3 twilightBand = mix(vec3(0.85, 0.36, 0.16), vec3(0.98, 0.68, 0.36), pow(sunDot, 2.0));
          daySky = mix(daySky, twilightBand, uTwilight * horiz * (0.45 + 0.55 * pow(sunDot, 1.5)) * (1.0 - uCloud * 0.45));

          vec3 col = mix(skyNight, daySky, uDaylight);

          // Subtle below-horizon ground reflection for orbital block view
          if (h < 0.0) {
            col = mix(col, vec3(0.04, 0.06, 0.095), clamp(-h * 5.0, 0.0, 0.85));
          }

          // Visible solar disc & Mie scattering corona (blazing on clear days, eerie red-orange in smoke!)
          if (uDaylight > 0.05 && uSunDir.y > -0.02) {
            float disc = smoothstep(0.9986, 0.9996, sunDot);
            float halo = pow(sunDot, 18.0) * 0.42 + pow(sunDot, 120.0) * 0.65;
            vec3 sunTint = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.44, 0.14), clamp(uSmoke * 0.9 + uTwilight * 0.6, 0.0, 1.0));
            float visPower = (0.25 + 0.85 * uSwNorm) * (1.0 - uCloud * 0.52) * uDaylight;
            col += sunTint * (halo * 0.65 + disc * 1.8) * visPower;
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

          // Slope-aware multi-day fresh snowpack! Steep cliffs shed snow naturally; gentler bowls & ice hold fresh snow!
          float snowDepthNorm = clamp(uSnowPackMm / 18.0, 0.0, 1.0);
          // Snow lingers longer higher up, retreats upward as it melts
          float snowLineEff = mix(2550.0, 2060.0, snowDepthNorm);
          float elevMask = smoothstep(snowLineEff - 120.0, snowLineEff + 180.0, elevM);
          float slopeHold = smoothstep(0.56, 0.86, vSlopeUp + 0.14 * sastrugi);
          float freshSnow = snowDepthNorm * elevMask * slopeHold * (0.72 + 0.35 * sastrugi);
          freshSnow = clamp(freshSnow, 0.0, 0.92);

          // Active rain wets lower bare ice & dark rock below live rain-snow line
          float belowRainLine = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 110.0, elevM);
          float wetSurface = clamp(uRainIntensity * 0.50, 0.0, 0.65) * belowRainLine;

          if (uMode < 0.5) {
            diffuseColor.rgb *= microShade;
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.84, 0.89, 0.95), isSnow * 0.45);

            float sootCover = clamp(localDepNorm * 0.24 * uDepBoost * (0.35 + 0.65 * isCryo), 0.0, 0.82);
            float impurityEnrich = mix(1.0, 1.25, isIce) * (0.78 + 0.44 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.84);
            // Fresh snow buries wildfire soot and resets surface albedo!
            sootCover *= (1.0 - freshSnow * 0.88);

            vec3 sootTint = mix(vec3(0.042, 0.034, 0.026), vec3(0.020, 0.018, 0.017), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.28 + sootTint * 0.72, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.16 * (1.0 - isCryo));

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
    this.cloudUniforms = {
      uTime: { value: 0.0 },
      uCloudCover: { value: 0.4 },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uSunPower: { value: 0.5 },
    };
    const geo = new THREE.PlaneGeometry(34, 34, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.cloudUniforms,
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        precision mediump float;
        uniform float uTime; uniform float uCloudCover; uniform vec2 uWindDir; uniform float uSunPower;
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
          float edge = 1.0 - smoothstep(0.35, 0.98, length(c));
          float n = fbm(vUv * 4.8 - uWindDir * uTime * 0.08);
          float alpha = smoothstep(0.28, 0.76, n) * edge * uCloudCover * 0.42;
          if (alpha < 0.005) discard;
          vec3 col = mix(vec3(0.16, 0.21, 0.28), vec3(0.68, 0.75, 0.82), 0.22 + 0.68 * uSunPower);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });
    this.cloudMesh = new THREE.Mesh(geo, mat);
    this.cloudMesh.position.y = 4.4;
    this.scene.add(this.cloudMesh);
  }

  _buildRainCurtains() {
    // 4 volumetric diagonal storm rain-shaft sheets sweeping across the glacier valley!
    this.rainCurtainGroup = new THREE.Group();
    this.rainCurtainUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uSunPower: { value: 0.5 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
      uExag: { value: this.state.exag },
    };

    const curtainConfigs = [
      { x: 1.2, z: -1.6, rotY: 0.68, w: 6.5, h: 3.6, seed: 1.1 },
      { x: 0.0, z: -0.2, rotY: 0.68, w: 7.2, h: 3.8, seed: 3.4 },
      { x: -1.4, z: 1.2, rotY: 0.68, w: 6.8, h: 3.6, seed: 6.2 },
      { x: 1.8, z: -2.4, rotY: -0.55, w: 5.8, h: 3.4, seed: 8.7 },
    ];

    curtainConfigs.forEach((cfg) => {
      const geo = new THREE.PlaneGeometry(cfg.w, cfg.h, 1, 1);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          ...this.rainCurtainUniforms,
          uSeed: { value: cfg.seed },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vWorldPos;
          void main() {
            vUv = uv;
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vWorldPos = wp.xyz;
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,
        fragmentShader: `
          precision mediump float;
          uniform float uTime;
          uniform float uIntensity;
          uniform float uSunPower;
          uniform float uRainSnowM;
          uniform float uZMinM;
          uniform float uExag;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
          }

          void main() {
            if (uIntensity < 0.04) discard;
            float edgeX = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
            float edgeY = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.78, vUv.y);
            // Vertical rain-shaft anisotropic streaks slanted slightly by wind
            vec2 p = vec2((vUv.x + vUv.y * 0.18) * 14.0 + uTime * 0.35 + uSeed, vUv.y * 2.2 + uTime * 2.8);
            float shaft = noise(p) * 0.65 + noise(p * 2.4 + vec2(3.1, 7.2)) * 0.35;
            // Fade rain curtain smoothly above snowline!
            float worldElevM = uZMinM + (vWorldPos.y / max(uExag, 0.1)) * 1000.0;
            float inRain = 1.0 - smoothstep(uRainSnowM - 180.0, uRainSnowM + 450.0, worldElevM);
            float alpha = smoothstep(0.28, 0.78, shaft) * edgeX * edgeY * clamp(uIntensity * 0.38, 0.0, 0.42) * (0.40 + 0.60 * inRain);
            if (alpha < 0.004) discard;
            vec3 col = mix(vec3(0.55, 0.66, 0.78), vec3(0.84, 0.91, 0.98), 0.30 + 0.55 * uSunPower);
            gl_FragColor = vec4(col, alpha);
          }
        `,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, 1.95, cfg.z);
      mesh.rotation.y = cfg.rotY;
      this.rainCurtainGroup.add(mesh);
    });
    this.scene.add(this.rainCurtainGroup);
  }

  _buildNearAndValleyRain() {
    // 14,000 ultra-realistic rain streaks: 9,000 in a dynamic camera-following near box ("comme si on était là"!)
    // + 5,000 distributed across the full valley so rain looks rich at ANY zoom!
    const NEAR = 9000;
    const FAR = 5000;
    const TOTAL = NEAR + FAR;
    const pos = new Float32Array(TOTAL * 2 * 3);
    const seed = new Float32Array(TOTAL * 2 * 4); // [phase, speed, endFlag, isNear (1=near box, 0=valley)]

    for (let i = 0; i < TOTAL; i++) {
      const isNear = i < NEAR ? 1.0 : 0.0;
      const rx = isNear ? (Math.random() - 0.5) * 4.2 : (Math.random() - 0.5) * this.sizeX * 0.96;
      const ry = Math.random(); // vertical offset seed
      const rz = isNear ? (Math.random() - 0.5) * 4.2 : (Math.random() - 0.5) * this.sizeY * 0.96;
      const ph = Math.random();
      const sp = 0.85 + Math.random() * 0.55;

      for (let end = 0; end < 2; end++) {
        const k = i * 2 + end;
        pos[k * 3 + 0] = rx;
        pos[k * 3 + 1] = ry;
        pos[k * 3 + 2] = rz;
        seed[k * 4 + 0] = ph;
        seed[k * 4 + 1] = sp;
        seed[k * 4 + 2] = end;
        seed[k * 4 + 3] = isNear;
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
      uCamFocus: { value: new THREE.Vector3(0, 1.0, 0) },
      uSunPower: { value: 0.5 },
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
        uniform vec3 uCamFocus;
        varying float vAlpha;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.96, 0.0, 1.0));
          float isNear = aSeed.w;
          float isTail = aSeed.z;
          float t = fract(position.y + uTime * (isNear > 0.5 ? 2.1 : 1.35) * aSeed.y);

          vec3 p;
          float streakH;
          if (isNear > 0.5) {
            // Dynamic 3D rain box wrapped seamlessly around the camera!
            float boxW = 4.2;
            float boxH = 2.6;
            vec2 drift = uWindDir * uTime * (0.45 + 0.14 * uWindSpeed);
            float wx = mod(position.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x;
            float wz = mod(position.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z;
            float wy = uCamFocus.y + (0.55 - t) * boxH;
            streakH = 0.13 + 0.06 * aSeed.y;
            p = vec3(wx, wy, wz);
          } else {
            float topY = 3.6 + max(0.0, (uExag - 1.3) * 1.4);
            float wy = mix(topY, -0.05, t);
            vec2 drift = uWindDir * t * (0.35 + 0.12 * uWindSpeed);
            float wx = mod(position.x + drift.x + 5.5, 11.0) - 5.5;
            float wz = mod(position.z + drift.y + 5.5, 11.0) - 5.5;
            streakH = 0.40 + 0.16 * aSeed.y;
            p = vec3(wx, wy, wz);
          }

          // Realistic wind slant of falling rain streak
          vec2 slant = uWindDir * (0.028 * uWindSpeed) * (isNear > 0.5 ? 0.75 : 1.35);
          p.x -= slant.x * isTail;
          p.z -= slant.y * isTail;
          p.y += streakH * isTail;

          // Rain ONLY exists below the live Jennings rain-snow elevation!
          float ptElevM = uZMinM + (p.y / max(uExag, 0.1)) * 1000.0;
          float rainZone = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 180.0, ptElevM);
          float inBlock = step(abs(p.x), 5.6) * step(abs(p.z), 5.6);
          float camDist = length(p - cameraPosition);
          float distFade = isNear > 0.5
            ? smoothstep(0.12, 0.45, camDist) * (1.0 - smoothstep(2.8, 4.2, camDist))
            : smoothstep(0.8, 2.5, camDist);

          float fadeV = smoothstep(0.0, 0.10, t) * (1.0 - smoothstep(0.90, 1.0, t));
          vAlpha = active * inBlock * rainZone * distFade * fadeV * clamp(uIntensity * 0.85, 0.0, 0.86) * (1.0 - 0.60 * isTail);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uSunPower;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.01) discard;
          vec3 col = mix(vec3(0.68, 0.82, 0.96), vec3(0.92, 0.97, 1.0), 0.35 + 0.55 * uSunPower);
          gl_FragColor = vec4(col, vAlpha);
        }
      `,
    });

    this.rainLines = new THREE.LineSegments(geo, mat);
    this.rainLines.frustumCulled = false;
    this.scene.add(this.rainLines);
  }

  _makeSnowflakeTexture() {
    // Soft feathery translucent snow-crystal bokeh texture (zero harsh circular dots!)
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 1, 32, 32, 30);
    g.addColorStop(0.0, "rgba(255,255,255,0.95)");
    g.addColorStop(0.28, "rgba(236,245,255,0.68)");
    g.addColorStop(0.62, "rgba(215,232,250,0.22)");
    g.addColorStop(1.0, "rgba(200,225,250,0.0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);

    // Subtle delicate 6-point crystalline sheen in the core
    ctx.save();
    ctx.translate(32, 32);
    ctx.strokeStyle = "rgba(255,255,255,0.32)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(-14, 0);
      ctx.lineTo(14, 0);
      ctx.stroke();
      ctx.rotate(Math.PI / 3);
    }
    ctx.restore();
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _buildRealisticSnow() {
    // 12,000 dual-scale soft fluttering snowflakes: 6,500 camera-centered near-field ("comme si on était là"!)
    // + 5,500 high-altitude glacier & peak flurries above the Jennings rain-snow line!
    const NEAR = 6500;
    const FAR = 5500;
    const TOTAL = NEAR + FAR;
    const pos = new Float32Array(TOTAL * 3);
    const seed = new Float32Array(TOTAL * 4); // [phase, speed, size, isNear]

    for (let i = 0; i < TOTAL; i++) {
      const isNear = i < NEAR ? 1.0 : 0.0;
      pos[i * 3 + 0] = isNear ? (Math.random() - 0.5) * 4.8 : (Math.random() - 0.5) * this.sizeX * 0.98;
      pos[i * 3 + 1] = Math.random();
      pos[i * 3 + 2] = isNear ? (Math.random() - 0.5) * 4.8 : (Math.random() - 0.5) * this.sizeY * 0.98;
      seed[i * 4 + 0] = Math.random();
      seed[i * 4 + 1] = 0.55 + Math.random() * 0.85;
      seed[i * 4 + 2] = 0.55 + Math.random() * 1.45;
      seed[i * 4 + 3] = isNear;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 4));

    const flakeTex = this._makeSnowflakeTexture();
    this.snowUniforms = {
      uTime: { value: 0.0 },
      uIntensity: { value: 0.0 },
      uExag: { value: this.state.exag },
      uWindDir: { value: new THREE.Vector2(0.85, -0.52) },
      uWindSpeed: { value: 5.0 },
      uRainSnowM: { value: this.state.rainSnowM },
      uZMinM: { value: this.meta.zMinM },
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
        uniform float uTime;
        uniform float uIntensity;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform vec3 uCamFocus;
        uniform float uPixelRatio;
        varying float vAlpha;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.98, 0.0, 1.0));
          float isNear = aSeed.w;
          float t = fract(position.y + uTime * (isNear > 0.5 ? 0.24 : 0.16) * aSeed.y);

          // Swirling 3D turbulent snowflake flutter!
          vec2 flutter = vec2(
            sin(uTime * 1.9 + aSeed.x * 52.0 + t * 8.0) + 0.5 * cos(uTime * 3.1 + aSeed.y * 27.0),
            cos(uTime * 1.7 + aSeed.y * 44.0 + t * 7.5) + 0.5 * sin(uTime * 2.8 + aSeed.x * 31.0)
          ) * (isNear > 0.5 ? 0.11 : 0.22);

          vec3 p;
          if (isNear > 0.5) {
            float boxW = 4.8;
            float boxH = 3.0;
            vec2 drift = uWindDir * uTime * (0.18 + 0.07 * uWindSpeed);
            float wx = mod(position.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x + flutter.x;
            float wz = mod(position.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z + flutter.y;
            float wy = uCamFocus.y + (0.58 - t) * boxH;
            p = vec3(wx, wy, wz);
          } else {
            float topY = 3.9 + max(0.0, (uExag - 1.3) * 1.5);
            float wy = mix(topY, 0.05, t);
            vec2 drift = uWindDir * t * (0.45 + 0.15 * uWindSpeed);
            float wx = mod(position.x + drift.x + flutter.x + 5.5, 11.0) - 5.5;
            float wz = mod(position.z + drift.y + flutter.y + 5.5, 11.0) - 5.5;
            p = vec3(wx, wy, wz);
          }

          // Snow ONLY exists above the live Jennings rain-snow elevation!
          float ptElevM = uZMinM + (p.y / max(uExag, 0.1)) * 1000.0;
          float snowZone = smoothstep(uRainSnowM - 120.0, uRainSnowM + 110.0, ptElevM);
          float inBlock = step(abs(p.x), 5.8) * step(abs(p.z), 5.8);
          float camDist = length(p - cameraPosition);
          float distFade = isNear > 0.5
            ? smoothstep(0.18, 0.65, camDist) * (1.0 - smoothstep(2.8, 4.2, camDist))
            : smoothstep(1.5, 4.0, camDist);

          float fadeV = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.88, 1.0, t));
          vAlpha = active * inBlock * snowZone * distFade * fadeV * clamp(uIntensity * 1.05, 0.0, 0.95);

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float baseSz = (isNear > 0.5 ? 6.8 : 6.2) * aSeed.z * uPixelRatio;
          gl_PointSize = clamp(baseSz * (13.0 / max(-mv.z, 0.65)), 2.8, 22.0) * step(0.01, vAlpha);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform sampler2D uFlakeTex;
        uniform float uSunPower;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.01) discard;
          vec4 tex = texture2D(uFlakeTex, gl_PointCoord);
          if (tex.a < 0.02) discard;
          vec3 col = mix(vec3(0.64, 0.73, 0.85), vec3(0.96, 0.98, 1.0), 0.35 + 0.65 * uSunPower);
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
    this.rainCurtainUniforms.uExag.value = exag;
    this.rainUniforms.uExag.value = exag;
    this.snowUniforms.uExag.value = exag;
    this.cloudMesh.position.y = 4.4 + Math.max(0, (exag - 1.3) * 1.4);

    // Keep on-glacier camera preset height synced with new relief exaggeration
    const awsY0 = this._sampleDemXZ(1.15, -1.45);
    this.presets.onglacier.pos.y = awsY0 * exag + 0.22;
    this.presets.onglacier.target.y = awsY0 * exag + 0.72;
  }

  setMode(mode) { this.state.mode = mode; this.terrainUniforms.uMode.value = mode; }
  setContours(on) { this.state.contours = on; this.terrainUniforms.uContours.value = on ? 1.0 : 0.0; }
  setShowSmoke(on) { this.state.showSmoke = on; this.smokeGroup.visible = on; }
  setShowPrecip(on) {
    this.state.showPrecip = on;
    this.rainCurtainGroup.visible = on;
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
    this.smokeSharedUniforms.uWindDir.value.set(wx, wz);
    this.cloudUniforms.uWindDir.value.set(wx, wz);
    this.rainUniforms.uWindDir.value.set(wx, wz);
    this.snowUniforms.uWindDir.value.set(wx, wz);

    this.smokeSharedUniforms.uDensity.value = plumeDensity;
    this.smokeSharedUniforms.uWetFrac.value = wetFrac;
    this.cloudUniforms.uCloudCover.value = cloudCover;

    const pNorm = Math.min(1.5, precipMmH / 2.0);
    this.rainCurtainUniforms.uIntensity.value = pNorm;
    this.rainCurtainUniforms.uRainSnowM.value = rainSnowM;
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
    this.skyUniforms.uSunDir.value.copy(this._sunDir);

    const swNorm = Math.max(0.0, Math.min(1.0, this.state.swIn / 760.0));
    const dayFactor = Math.max(0.0, Math.min(1.0, (rawEl + 5.0) / 14.0));
    const twilight = Math.max(0.0, 1.0 - Math.abs(rawEl - 3.0) / 10.0) * dayFactor;
    const smoke = this.state.showSmoke ? this.state.plumeDensity : 0.0;
    const cloud = this.state.cloudCover;

    this.skyUniforms.uDaylight.value = dayFactor;
    this.skyUniforms.uTwilight.value = twilight;
    this.skyUniforms.uSmoke.value = smoke;
    this.skyUniforms.uCloud.value = cloud;
    this.skyUniforms.uSwNorm.value = swNorm;

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
    this.rainCurtainUniforms.uSunPower.value = Math.max(0.12, sunPower);
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

    // Keep sky dome centered on camera & near-field rain/snow wrapped cleanly right around viewer!
    this.skyDome.position.copy(this.camera.position);
    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);
    const focusPt = this.camera.position.clone().addScaledVector(camDir, Math.min(2.2, this.camera.position.distanceTo(this.controls.target) * 0.55));
    this.rainUniforms.uCamFocus.value.copy(focusPt);
    this.snowUniforms.uCamFocus.value.copy(focusPt);

    const windRate = 0.55 + 0.16 * this.state.windSpeed;
    this.smokeSharedUniforms.uTime.value += dt * windRate;
    this.cloudUniforms.uTime.value += dt * (0.4 + 0.1 * this.state.windSpeed);
    this.rainCurtainUniforms.uTime.value += dt;
    this.rainUniforms.uTime.value += dt;
    this.snowUniforms.uTime.value += dt;

    this.renderer.render(this.scene, this.camera);
  }
}
