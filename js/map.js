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
    colorAxis: { colors: ['black'] },
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

      const cityData = citiesData.find(city2 => city2.name.ja.join('') === city.innerHTML);

      city.setAttribute('data-type', cityData.types.join(' '));

      city.parentElement?.setAttribute('data-city', 'true');
      city.parentElement?.setAttribute('data-favorite', cityData.types.includes('favorite') ? 'true' : 'false');
      city.parentElement?.setAttribute('data-capital', cityData.types.includes('capital') ? 'true' : 'false');
      city.parentElement?.setAttribute('data-nationalCapital', cityData.types.includes('nationalCapital') ? 'true' : 'false');

      const x = parseInt(city.getAttribute('x') || '0');
      const y = parseInt(city.getAttribute('y') || '0');

      const x2 = index % 2 === 0 ? -4 : city.innerHTML.length * 6;

      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('width', '12');
      icon.setAttribute('height', '12');
      icon.setAttribute('x', `${x + 2}`);
      icon.setAttribute('y', `${y - 12 + 2}`);
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

export function drawClickableArea(data, colors) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'regions',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    colorAxis: { colors: colors.map(item => item.color) },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const prefecturesElm = document.getElementById('clickableArea');
  if (!prefecturesElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(prefecturesElm);

  const dataTable = google.visualization.arrayToDataTable(data);

  google.visualization.events.addListener(chart, 'regionClick', (e) => {
    regions.forEach(region => {
      region.prefectures.forEach(({ code }) => {
        if (`JP-${code}` === e.region) {
          /** @type{HTMLElement | null} */
          const select = document.querySelector(`div[data-region="${region.name.en}"]`);
          select?.click();
        }
      });
    });
  });

  chart.draw(dataTable, options);
}
