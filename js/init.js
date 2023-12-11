import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { drawRegions, drawPrefectures, drawCities, drawClickableArea, setInfo } from './map.js';
import { loadHTML, parseData, parseDataForCities, parseDataForPrefectures, extractCities } from './utils.js';
import { initLayers } from './layers.js';

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
    setInfo('city', cityData);
  }, 100);
}

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(loadPatterns);
google.charts.setOnLoadCallback(loadIncludes);
//google.charts.setOnLoadCallback(populateLegend);
google.charts.setOnLoadCallback(() => drawRegions(regionsData, drawRegionsColors));
google.charts.setOnLoadCallback(() => drawCities(citiesData, filterCityCallback));
google.charts.setOnLoadCallback(() => drawPrefectures(prefecturesData));
google.charts.setOnLoadCallback(() => drawClickableArea(regionsData, colors, region));

function loadPatterns() {
  const patterns_source = document.getElementById('patterns_source');
  const patterns_cloned = document.getElementById('patterns_cloned');

  patterns_cloned.innerHTML = patterns_source.contentDocument.querySelector('svg').innerHTML;

  const icons_source = document.getElementById('icons_source');
  const icons_cloned = document.getElementById('icons_cloned');

  icons_cloned.innerHTML = icons_source.contentDocument.querySelector('svg').innerHTML;
}

async function loadIncludes() {
  await loadHTML('legend-placeholder', './includes/legend.html');
  await loadHTML('fillmode-placeholder', './includes/fillmode.html');
  await loadHTML('shuriken-placeholder', './includes/shuriken.html');
  await loadHTML('info-placeholder', './includes/info.html');
  drawLegendItems(regionsColors);
  initFillMode(regionsColors);
  initLayers();
  //handleFillmode('pattern', regionsColors);
  const icons = document.querySelectorAll('object.icon');
  icons.forEach(icon => {
    icon.addEventListener('load', () => {
      icon.parentNode.replaceChild(icon.contentDocument.documentElement, icon);
    });
  });
};
