import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { drawRegions, drawPrefectures, drawCities, drawClickableArea } from './map.js';
import { loadHTML, parseData, parseDataForCities, parseDataForPrefectures } from './utils.js';
import { initLayers } from './layers.js';

let regionsColors = { ...colors };

const hash = document.location.hash.replace('#', '');
const filter = decodeURI(hash);

const regionIndex = regions.findIndex(region => region.name.en === filter);
const drawRegionsColors = (hash) ? [colors[regionIndex]] : colors;

const regionsData = parseData(regions, filter);
const prefecturesData = parseDataForPrefectures(regions, filter);
const citiesData = parseDataForCities(regions, filter);

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(loadPatterns);
google.charts.setOnLoadCallback(loadIncludes);
//google.charts.setOnLoadCallback(populateLegend);
google.charts.setOnLoadCallback(() => drawRegions(regionsData, drawRegionsColors));
google.charts.setOnLoadCallback(() => drawCities(citiesData));
google.charts.setOnLoadCallback(() => drawPrefectures(prefecturesData));
google.charts.setOnLoadCallback(() => drawClickableArea(regionsData, colors, filter));

document.body.onload = () => {
  // loadPatterns()
  // loadIncludes()
}

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
  drawLegendItems(regionsColors);
  initFillMode(regionsColors);
  initLayers();
  //handleFillmode('pattern', regionsColors);
};
