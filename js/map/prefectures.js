// @ts-check

/**
 * @typedef {import('../../data/regions.js').Prefecture} Prefecture
 */

import { commonOptions } from './common.js';
import { addStroke } from '../utils.js';
import { setInfo } from '../info.js';
import { findPrefecture } from '../regions.js';

/**
 * @param {(string|number)[][]} data
 * @param {() => void=} callback
 */
export function drawPrefectures(data, callback) {
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

  google.visualization.events.addListener(chart, 'ready', (e) => {
    /** @type {NodeListOf<SVGTextElement>} */
    const prefectures = document.querySelectorAll('#prefectures svg text');
    prefectures.forEach((prefecture) => improvePrefectureElm(prefecture));
    callback && callback();
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

/**
 * @param {SVGTextElement} prefecture
 */
function improvePrefectureElm(prefecture) {
  const prefectureData = findPrefecture(prefecture.innerHTML);

  if (!prefectureData) {
    return;
  }

  if (prefectureData.textAnchor) {
    prefecture.setAttribute('text-anchor', prefectureData.textAnchor);
  }

  const prefectureGroup = prefecture.parentElement;

  prefectureGroup?.addEventListener('click', () => setActivePrefecture(prefectureData));

  addStroke(prefecture);
}

/**
 * @param {Prefecture} prefectureData
 */
export function setActivePrefecture(prefectureData) {
  if (!prefectureData) {
    return;
  }

  const logicalname = `F#feature#1#0#JP-${prefectureData.code}#0`;

  /** @type {NodeListOf<SVGPathElement & { logicalname: string }>} */
  const regionsElmCollection = document.querySelectorAll('#regions svg path');
  regionsElmCollection.forEach(elm => {
    elm.classList.toggle('active', elm.logicalname === logicalname);
    setInfo('prefecture', prefectureData);
  });
}
