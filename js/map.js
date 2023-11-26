// @ts-check

import { regions } from './regions.js';
import { extractCities } from './utils.js';

/** @type {google.visualization.GeoChartOptions} */
const commonOptions = {
  region: 'JP',
  resolution: 'provinces',
  legend: 'none',
  tooltip: {
    trigger: 'none'
  }
}

export function drawRegions(data, colors) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'regions',
    colorAxis: { colors: colors.map(item => item.color) },
  };

  const regionsElm = document.getElementById('regions');
  if (!regionsElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(regionsElm);

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

export function drawCities(data) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'text',
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

  const citiesData = extractCities(regions);

  google.visualization.events.addListener(chart, 'ready', (e) => {
    const cities = document.querySelectorAll('#cities svg text');
    cities.forEach((city, index) => {
      city.setAttribute('text-anchor', index % 2 === 0 ? 'end' : 'start');
      const types = [];

      const cityData = citiesData.find(city => city.name.jp === city.innerHTML);

      city.setAttribute('data-type', cityData.types.join(' '));

      const x = parseInt(city.getAttribute('x') || '0');
      const y = parseInt(city.getAttribute('y') || '0');

      const x2 = index % 2 === 0 ? -4 : city.innerHTML.length * 6;

      const icon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon2.setAttribute('width', '16');
      icon2.setAttribute('height', '16');
      icon2.setAttribute('x', `${x}`);
      icon2.setAttribute('y', `${y - 12}`);
      icon2.setAttribute('fill', 'white');
      icon2.innerHTML = `<use xlink:href="./img/icons/layers.svg#capital" />`;
      city.parentElement?.appendChild(icon2);

      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('width', '12');
      icon.setAttribute('height', '12');
      icon.setAttribute('x', `${x + 2}`);
      icon.setAttribute('y', `${y - 12 + 2}`);
      icon.setAttribute('fill', 'black');
      icon.innerHTML = `<use xlink:href="./img/icons/layers.svg#capital" />`;
      city.parentElement?.appendChild(icon);

      city.setAttribute('x', `${x + x2}`);

    })
    const citiesDiv = document.getElementById('cities');
    if (citiesDiv) {
      citiesDiv.style.visibility = 'visible';
    }
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

export function drawPrefectures(data) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'text',
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

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}
