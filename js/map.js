// @ts-check

import { regions } from './regions.js';
import { addStroke, extractCities, extractPrefectures } from './utils.js';

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

  google.visualization.events.addListener(chart, 'ready', (e) => {
    setTimeout(() => {
      regionsElm.style.visibility = 'visible';
    }, 100);
  });

  chart.draw(dataTable, options);
}

export function drawCities(data, callback) {
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
    cities.forEach((city) => {
      const cityName = city.innerHTML;
      const cityData = citiesData.find(record => record.name.ja.join('') === cityName);

      city.setAttribute('data-type', cityData.types.join(' '));

      city.parentElement?.setAttribute('data-city', 'true');
      city.parentElement?.setAttribute('data-favorite', cityData.types.includes('favorite') ? 'true' : 'false');
      city.parentElement?.setAttribute('data-capital', cityData.types.includes('capital') ? 'true' : 'false');
      city.parentElement?.setAttribute('data-nationalCapital', cityData.types.includes('nationalCapital') ? 'true' : 'false');
      city.parentElement?.setAttribute('data-name', cityData.name.en);

      const x = parseInt(city.getAttribute('x') || '0');
      const y = parseInt(city.getAttribute('y') || '0');

      const textBoundingBox = city.getBoundingClientRect();
      const textHeight = textBoundingBox.height;

      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('width', `${textHeight * 0.8}`);
      icon.setAttribute('height', `${textHeight * 0.8}`);
      icon.setAttribute('x', `${x - textHeight / 2}`);
      icon.setAttribute('y', `${y - textHeight / 2}`);
      icon.innerHTML = `<use xlink:href="./img/icons/layers.svg#capital" />`;
      city.parentElement?.appendChild(icon);

      if (cityData.bottom) {
        city.setAttribute('y', `${y + textHeight * 1.25}`);
      } else {
        city.setAttribute('y', `${y - textHeight * 0.7}`);
      }

      addStroke(city);
    })

    if (callback) {
      callback();
    }

    citiesElm.style.visibility = 'visible';
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

  const prefecturesData = extractPrefectures(regions);

  google.visualization.events.addListener(chart, 'ready', (e) => {
    const prefectures = document.querySelectorAll('#prefectures svg text');
    prefectures.forEach((prefecture) => {
      const prefectureData = prefecturesData.find(record => record.name.ja.join('') === prefecture.innerHTML);
      if (prefectureData.textAnchor) {
        prefecture.setAttribute('text-anchor', prefectureData.textAnchor);
      }

      addStroke(prefecture);
    });

    prefecturesElm.style.visibility = 'visible';
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

export function drawClickableArea(data, colors, filter) {
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

  google.visualization.events.addListener(chart, 'ready', (e) => {
    setTimeout(() => {
      /** @type{HTMLElement | null} */
      const select = document.querySelector(`div[data-region="${filter}"]`);
      select?.click()
    }, 100);
  })

  chart.draw(dataTable, options);
}
