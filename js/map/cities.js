// @ts-check

/**
 * @typedef {import('../../data/regions.js').City} City
 */

import { commonOptions } from './common.js';
import { regions } from '../../data/regions.js';
import { addStroke, extractCities, setElmAttributes } from '../utils.js';
import { setInfo } from '../info.js';
import { setActivePrefecture } from './prefectures.js';

/**
 * @param {(string|number)[][]} data
 * @param {() => void=} callback
 */
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
    /** @type {NodeListOf<SVGTextElement>} */
    const cities = document.querySelectorAll('#cities svg text');
    cities.forEach(city => improveCityElm(city));
    callback && callback();
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

/**
 * @param {SVGTextElement} cityTextElm
 */
function improveCityElm(cityTextElm) {
  const cityName = cityTextElm.innerHTML;
  const citiesData = extractCities(regions);
  const cityData = citiesData.find(record => record.name.ja.join('') === cityName);

  const cityGroup = cityTextElm.closest('g');

  if (!cityGroup) {
    return;
  }

  setElmAttributes(cityGroup, {
    'data-city': 'true',
    'data-favorite': Boolean(cityData.types.includes('favorite')),
    'data-capital': Boolean(cityData.types.includes('capital')),
    'data-nationalCapital': Boolean(cityData.types.includes('nationalCapital')),
    'data-name': cityData.name.en,
  });
  cityGroup?.addEventListener('click', () => setActiveCity(cityData));

  const textBoundingBox = cityTextElm.getBoundingClientRect();

  const geometry = {
    x: Number(cityTextElm.getAttribute('x')),
    y: Number(cityTextElm.getAttribute('y')),
    height: textBoundingBox.height,
  }

  addIcon(cityGroup, geometry);
  adjustPosition(cityTextElm, cityData, geometry);
  addStroke(cityTextElm, cityData.bottom);
}

/**
 * @param {SVGGElement} cityGroup
 */
function addIcon(cityGroup, { x, y, height }) {
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  setElmAttributes(icon, {
    width: height * 0.8,
    height: height * 0.8,
    x: x - height / 2,
    y: y - height / 2,
  });
  icon.innerHTML = `<use xlink:href="#capital" />`;
  cityGroup?.appendChild(icon);
}

/**
 * @param {SVGTextElement} cityTextElm
 * @param {City} cityData
 */
function adjustPosition(cityTextElm, cityData, { y, height }) {
  if (cityData.bottom) {
    cityTextElm.setAttribute('y', String(y + height * 1.25));
  } else {
    cityTextElm.setAttribute('y', String(y - height * 0.7));
  }
}

/**
 * @param {City=} cityData
 */
export function setActiveCity(cityData) {
  const cities = document.querySelectorAll('#cities svg g[data-city=true]');
  cities.forEach(city => city.classList.remove('active'));

  if (!cityData) {
    setInfo();
    return;
  }

  const cityElm = document.querySelector(`#cities svg g[data-name="${cityData.name.en}"]`);
  cityElm?.classList.add('active');

  cityData.prefecture && setActivePrefecture(cityData.prefecture);

  setInfo('city', cityData);
}
