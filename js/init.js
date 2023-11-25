import { colors } from './colors.js';
import { regions } from './regions.js';
import { drawLegendItems } from "./legend.js";
import { initFillMode } from './fillMode.js';
import { drawRegions, drawPrefectures, drawCities } from './map.js';
import { loadHTML, parseData, parseDataForCities, parseDataForPrefectures } from './utils.js';
import { initLayers } from './layers.js';

let regionsColors = { ...colors };

const regionsData = parseData(regions);
const prefecturesData = parseDataForPrefectures(regions);
const citiesData = parseDataForCities(regions);

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(loadPatterns);
google.charts.setOnLoadCallback(loadIncludes);
//google.charts.setOnLoadCallback(populateLegend);
google.charts.setOnLoadCallback(() => drawRegions(regionsData, colors));
google.charts.setOnLoadCallback(() => drawCities(citiesData));
google.charts.setOnLoadCallback(() => drawPrefectures(prefecturesData));

document.body.onload = () => {
  // loadPatterns()
  // loadIncludes()
}

function loadPatterns() {

  const patterns_source = document.getElementById('patterns_source');
  const patterns_cloned = document.getElementById('patterns_cloned');

  patterns_cloned.innerHTML = patterns_source.contentDocument.querySelector('svg').innerHTML;
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
