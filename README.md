# Athabasca 3D — Dépôt de carbone de feux sur glacier

Plateforme web 3D interactive (Three.js + WebGL) pour explorer le **glacier Athabasca** (`RGI2000-v7.0-G-02-12982`, champ de glace Columbia, Rocheuses canadiennes) et simuler une journée complète de dépôt atmosphérique issu de feux de forêt (**RAQDPS / GEM-MACH FireWork − noFire**, `EC + POM + SOM`).

## Données
- **Relief (MNE)** : Copernicus GLO-30 (30 m), emprise 11 × 11 km (UTM 11N), 1 867 – 3 493 m.
- **Imagerie optique** : Sentinel-2 L2A sans nuages (`S2B_11UMT_20240905_0_L2A`, 5 septembre 2024), équilibrée en haute dynamique pour préserver le contraste neige / névé / glace vive et la rugosité de surface (NDSI / NDWI).
- **Épisodes de feux** :
  - **26 août 2018** : météo horaire observée à la station AWS sur le glacier Athabasca (rafales jusqu'à 8,2 m s⁻¹, atténuation solaire `SW↓ max = 194 W m⁻²`, lessivage humide en soirée) combinée au signal FireWork − noFire (Rocheuses `02-03`).
  - **31 août 2023** : épisode sec extrême de l'été 2023 (panel canonique Athabasca : 159–167 mg m⁻², albédo d'ablation `0,415`, anomalie journalière `Δα = −0,060`).

## Développement local
```bash
npm install
npm run dev
```
