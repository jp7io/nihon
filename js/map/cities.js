// @ts-check

/**
 * @typedef {import('../../data/regions.js').City} City
 */

import { commonOptions } from './common.js';
import { addStroke, setElmAttributes } from '../utils.js';
import { setInfo } from '../info.js';
import { setPrefecture } from './prefectures.js';
import { findCity } from '../regions.js';
import { state } from '../state.js';

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
  const city = findCity(cityName);

  const cityGroup = cityTextElm.closest('g');

  if (!city || !cityGroup) {
    return;
  }

  setElmAttributes(cityGroup, {
    'data-city': 'true',
    'data-favorite': Boolean(city.types.includes('favorite')),
    'data-capital': Boolean(city.types.includes('capital')),
    'data-nationalCapital': Boolean(city.types.includes('nationalCapital')),
    'data-name': city.name.en,
  });
  cityGroup?.addEventListener('click', () => setCity(city));

  const textBoundingBox = cityTextElm.getBoundingClientRect();

  const geometry = {
    x: Number(cityTextElm.getAttribute('x')),
    y: Number(cityTextElm.getAttribute('y')),
    height: textBoundingBox.height,
  }

  addIcon(cityGroup, geometry);
  adjustPosition(cityTextElm, city, geometry);
  addStroke(cityTextElm, city.bottom);
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
 * @param {City} city
 */
function adjustPosition(cityTextElm, city, { y, height }) {
  if (city.bottom) {
    cityTextElm.setAttribute('y', String(y + height * 1.25));
  } else {
    cityTextElm.setAttribute('y', String(y - height * 0.7));
  }
}

/**
 * @param {City=} city
 */
export function setCity(city) {
  const cities = document.querySelectorAll('#cities svg g[data-city=true]');
  cities.forEach(elm => elm.classList.remove('active'));

  if (!city) {
    setInfo();
    return;
  }

  const cityElm = document.querySelector(`#cities svg g[data-name="${city.name.en}"]`);
  cityElm?.classList.add('active');

  city.prefecture && setPrefecture(city.prefecture);

  state.city.val = city;

  setInfo('city', city);
}
