// @ts-check

import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { setActiveCity } from './maps/index.js';
import { setActiveRegion } from './legend.js';
import { extractCities, loadHTML } from './utils.js';
import { initLayers } from './layers.js';

let regionsColors = { ...colors };

const hash = document.location.hash.replace('#', '');
const filters = decodeURI(hash).split(',');

const [region, prefecture, city] = filters;

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  loadPatterns();
  await loadIncludes();
  createInlineSVG();
  const regionData = regions.find(record => record.name.en === region);
  const cityData = extractCities(regions, region).find(record => record.name.en === city);
  setActiveRegion(regionData, () => {
    setTimeout(() => {
      setActiveCity(cityData);
    }, 100);
  });
});

function loadPatterns() {
  /** @type {any} */
  const patterns_source = document.getElementById('patterns_source');
  const patterns_cloned = document.getElementById('patterns_cloned');

  patterns_cloned && (patterns_cloned.innerHTML = patterns_source?.contentDocument.querySelector('svg').innerHTML);

  /** @type {any} */
  const icons_source = document.getElementById('icons_source');
  const icons_cloned = document.getElementById('icons_cloned');

  icons_cloned && (icons_cloned.innerHTML = icons_source?.contentDocument.querySelector('svg').innerHTML);
}

async function loadIncludes() {
  await loadHTML('legend-placeholder', './includes/legend.html', () => drawLegendItems());
  await loadHTML('fillmode-placeholder', './includes/fillmode.html', () => {
    initFillMode(regionsColors);
    initLayers()
  });
  await loadHTML('shuriken-placeholder', './includes/shuriken.html');
  await loadHTML('info-placeholder', './includes/info.html');
};

function createInlineSVG() {
  /** @type {NodeListOf<any>} */
  const icons = document.querySelectorAll('object.icon');
  icons.forEach(icon => {
    icon.addEventListener('load', () => {
      icon.parentNode?.replaceChild(icon.contentDocument.documentElement, icon);
    });
  });
}
