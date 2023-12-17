// @ts-check

import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { setActiveRegion, setActivePrefecture, setActiveCity } from './map/index.js';
import { extractCities, extractPrefectures, loadHTML, parseHash } from './utils.js';
import { initLayers } from './layers.js';
import { createInlineSVG, loadPatterns } from './svg.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  loadPatterns();
  await loadIncludes();
  createInlineSVG();
  setActiveData();
});

async function loadIncludes() {
  await loadHTML('legend-placeholder', './includes/legend.html', () => drawLegendItems());
  await loadHTML('fillmode-placeholder', './includes/fillmode.html', () => {
    initFillMode(colors);
    initLayers()
  });
  await loadHTML('shuriken-placeholder', './includes/shuriken.html');
  await loadHTML('info-placeholder', './includes/info.html');
};

function setActiveData() {
  const { region, prefecture, city } = parseHash();

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
