// @ts-check

import { colors } from './colors.js';
import { regions } from '../data/regions.js';
import { drawLegendItems, setActiveMunicipalityType } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { setActiveRegion, setActivePrefecture, setActiveCity } from './map/index.js';
import { extractCities, extractPrefectures, loadHTML, parseHash } from './utils.js';
import { initLayers, setLayer } from './layers.js';
import { createInlineSVG, loadPatterns } from './svg.js';
import { initTokyo, setMunicipality } from './tokyo.js';
import { municipalityType, tokyo } from '../data/tokyo.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  loadPatterns();
  await loadIncludes();
  createInlineSVG();
  setActiveData();
  initTokyo();
});

async function loadIncludes() {
  await loadHTML('legend-placeholder', './includes/legend.html', () => drawLegendItems());
  await loadHTML('fillmode-placeholder', './includes/fillmode.html', () => {
    initFillMode(colors);
    initLayers();
  });
  await loadHTML('shuriken-placeholder', './includes/shuriken.html');
  await loadHTML('info-placeholder', './includes/info.html');
};

function setActiveData() {
  const { region, prefecture, city, municipality } = parseHash();

  if (region === 'Tōkyō') {
    setLayer('tokyo');
    if (municipality) {
      const municipalityData = tokyo.find(item => item.name.en === municipality);
      if (municipalityData) {
        setActiveMunicipalityType(municipalityData.type);
        setMunicipality(municipalityData);
        return;
      }
    }
    setActiveMunicipalityType(municipalityType.ku);
    return;
  }

  const regionData = regions.find(record => record.name.en === region);
  const prefectureData = extractPrefectures(regions, region).find(record => record.name.en === prefecture);
  const cityData = extractCities(regions, region).find(record => record.name.en === city);

  setActiveRegion(regionData, () => {
    setTimeout(() => {
      if (cityData) {
        setActiveCity(cityData);
      } else {
        setActivePrefecture(prefectureData);
      }
    }, 100);
  });
}
