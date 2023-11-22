// @ts-check

import { colors } from './colors.js';
import { parseData, parseDataForCities } from './utils.js';

export function drawRegions(regions) {
  const data = google.visualization.arrayToDataTable(parseData(regions));

  const regionsColors = colors.splice(0, 8);

  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    region: 'JP',
    displayMode: 'regions',
    resolution: 'provinces',
    legend: 'none',
    colorAxis: { colors: regionsColors.map(item => item.color) },
    tooltip: {
      trigger: 'none'
    }
  };

  const regionsElm = document.getElementById('regions');
  if (!regionsElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(regionsElm);
  chart.draw(data, options);
}

export function drawCities(regions) {

  const data = google.visualization.arrayToDataTable(parseDataForCities(regions));

  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    region: 'JP',
    displayMode: 'text',
    resolution: 'provinces',
    legend: 'none',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    colorAxis: { colors: ['brown', 'black'] },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const citiesElm = document.getElementById('cities');
  if (!citiesElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(citiesElm);
  chart.draw(data, options);
}
