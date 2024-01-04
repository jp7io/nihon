// @ts-check

/**
 * @typedef {import('../../data/regions.js').Prefecture} Prefecture
 */

import { commonOptions } from './common.js';
import { addStroke } from '../utils.js';
import { findPrefecture } from '../regions.js';
import { state } from '../state.js';

/**
 * @param {(string|number)[][]} data
 */
export function drawPrefectures(data) {
  state.mapPrefecturesReady.val = false;

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
    state.mapPrefecturesReady.val = true;
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

  prefectureGroup?.addEventListener('click', () => setPrefecture(prefectureData));

  addStroke(prefecture);
}

/**
 * @param {Prefecture | null} prefecture
 */
export function setPrefecture(prefecture) {
  state.prefecture.val = prefecture;
}
