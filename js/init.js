import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { drawRegions, drawPrefectures, drawCities, drawClickableArea } from './map.js';
import { loadHTML, parseData, parseDataForCities, parseDataForPrefectures, extractCities } from './utils.js';
import { initLayers } from './layers.js';
import { setInfo } from './info.js';

let regionsColors = { ...colors };

const hash = document.location.hash.replace('#', '');
const filters = decodeURI(hash).split(',');

const [region, prefecture, city] = filters;

const regionIndex = regions.findIndex(item => item.name.en === region);
const drawRegionsColors = (hash) ? [colors[regionIndex]] : colors;

const regionsData = parseData(regions, region);
const prefecturesData = parseDataForPrefectures(regions, region);
const citiesData = parseDataForCities(regions, region);

const filterCityCallback = () => {
  if (!city) {
    return;
  }
  const citiesData = extractCities(regions);
  const cityData = citiesData.find(record => record.name.en === city);
  setTimeout(() => {
    const cityGroup = document.querySelector(`[data-name="${cityData.name.en}"]`);
    cityGroup?.classList.add('active');
    setInfo('city', cityData);
  }, 1000);
}

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(() => {
  loadPatterns();
  loadIncludes();
  createInlineSVG();
  drawRegions(regionsData, drawRegionsColors);
  drawPrefectures(prefecturesData);
  drawCities(citiesData, filterCityCallback);
  drawClickableArea(regionsData, colors, region);
});

function loadPatterns() {
  const patterns_source = document.getElementById('patterns_source');
  const patterns_cloned = document.getElementById('patterns_cloned');

  patterns_cloned.innerHTML = patterns_source.contentDocument.querySelector('svg').innerHTML;

  const icons_source = document.getElementById('icons_source');
  const icons_cloned = document.getElementById('icons_cloned');

  icons_cloned.innerHTML = icons_source.contentDocument.querySelector('svg').innerHTML;
}

async function loadIncludes() {
  await loadHTML('legend-placeholder', './includes/legend.html', () => drawLegendItems(regionsColors));
  await loadHTML('fillmode-placeholder', './includes/fillmode.html', () => {
    initFillMode(regionsColors);
    initLayers()
  });
  await loadHTML('shuriken-placeholder', './includes/shuriken.html');
  await loadHTML('info-placeholder', './includes/info.html');
};

function createInlineSVG() {
  const icons = document.querySelectorAll('object.icon');
  icons.forEach(icon => {
    icon.addEventListener('load', () => {
      icon.parentNode.replaceChild(icon.contentDocument.documentElement, icon);
    });
  });
}
