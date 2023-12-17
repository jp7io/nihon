// @ts-check

import { commonOptions } from './common.js';
import { regions } from '../regions.js';
import { addStroke, extractCities } from '../utils.js';
import { setInfo } from '../info.js';

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

  google.visualization.events.addListener(chart, 'ready', () => {
    const cities = document.querySelectorAll('#cities svg text');
    cities.forEach(city => improveCityElm(city));
    callback && callback();
    citiesElm.style.visibility = 'visible';
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

function improveCityElm(city) {
  const cityName = city.innerHTML;
  const citiesData = extractCities(regions);
  const cityData = citiesData.find(record => record.name.ja.join('') === cityName);

  city.setAttribute('data-type', cityData.types.join(' '));

  const cityGroup = city.parentElement;

  cityGroup?.setAttribute('data-city', 'true');
  cityGroup?.setAttribute('data-favorite', cityData.types.includes('favorite') ? 'true' : 'false');
  cityGroup?.setAttribute('data-capital', cityData.types.includes('capital') ? 'true' : 'false');
  cityGroup?.setAttribute('data-nationalCapital', cityData.types.includes('nationalCapital') ? 'true' : 'false');
  cityGroup?.setAttribute('data-name', cityData.name.en);
  cityGroup?.addEventListener('click', () => setActiveCity(cityData));

  const textBoundingBox = city.getBoundingClientRect();

  const geometry = {
    x: parseInt(city.getAttribute('x') || '0'),
    y: parseInt(city.getAttribute('y') || '0'),
    textHeight: textBoundingBox.height,
  }

  addIcon(cityGroup, geometry);
  adjustPosition(city, cityData, geometry);
  addStroke(city, cityData.bottom);
}

function addIcon(cityGroup, { x, y, textHeight }) {
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('width', `${textHeight * 0.8}`);
  icon.setAttribute('height', `${textHeight * 0.8}`);
  icon.setAttribute('x', `${x - textHeight / 2}`);
  icon.setAttribute('y', `${y - textHeight / 2}`);
  icon.innerHTML = `<use xlink:href="./img/icons/layers.svg#capital" />`;
  cityGroup?.appendChild(icon);
}

function adjustPosition(city, cityData, { y, textHeight }) {
  if (cityData.bottom) {
    city.setAttribute('y', `${y + textHeight * 1.25}`);
  } else {
    city.setAttribute('y', `${y - textHeight * 0.7}`);
  }
}

export function setActiveCity(city) {
  const cities = document.querySelectorAll('#cities svg g[data-city=true]');
  cities.forEach(city => city.classList.remove('active'));

  if (!city) {
    setInfo();
    return;
  }

  const cityElm = document.querySelector(`#cities svg g[data-name="${city.name.en}"]`);
  cityElm?.classList.add('active');

  setInfo('city', city);
}
