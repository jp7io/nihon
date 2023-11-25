// @ts-check

import { colors } from './colors.js';
import { parseData, parseDataForCities, parseDataForPrefectures } from './utils.js';

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

  google.visualization.events.addListener(chart, 'ready', (e) => {
    const cities = document.querySelectorAll('#cities svg text');
    cities.forEach((city, index) => {
      city.setAttribute('text-anchor', index % 2 === 0 ? 'end' : 'start');
      const types = [];

      if (city.innerHTML.includes('★')) {
        types.push('regionCapital');
      };
      if (city.innerHTML.includes('◼️')) {
        types.push('major');
      };
      if (city.getAttribute('fill') === '#a52a2a') {
        types.push('favorite');
      }

      city.setAttribute('data-type', types.join(' '));
    })
    const citiesDiv = document.getElementById('cities');
    if (citiesDiv) {
      citiesDiv.style.visibility = 'visible';
    }
  });

  chart.draw(data, options);
}

export function drawPrefectures(regions) {
  const data = google.visualization.arrayToDataTable(parseDataForPrefectures(regions));

  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    region: 'JP',
    displayMode: 'text',
    resolution: 'provinces',
    legend: 'none',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    colorAxis: { colors: ['black', 'black'] },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const prefecturesElm = document.getElementById('prefectures');
  if (!prefecturesElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(prefecturesElm);

  chart.draw(data, options);
}
