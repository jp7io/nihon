// @ts-check

import { commonOptions } from './common.js';
import { regions } from '../regions.js';
import { addStroke, extractPrefectures } from '../utils.js';
import { setInfo } from '../info.js';

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
    const prefectures = document.querySelectorAll('#prefectures svg text');
    prefectures.forEach((prefecture) => improvePrefectureElm(prefecture));
    callback && callback();
    prefecturesElm.style.visibility = 'visible';
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

function improvePrefectureElm(prefecture) {
  const prefecturesData = extractPrefectures(regions);

  const prefectureData = prefecturesData.find(record => record.name.ja.join('') === prefecture.innerHTML);
  if (prefectureData.textAnchor) {
    prefecture.setAttribute('text-anchor', prefectureData.textAnchor);
  }

  const prefectureGroup = prefecture.parentElement;

  const logicalname = `F#feature#1#0#JP-${prefectureData.code}#0`;

  /** @type {NodeListOf<SVGPathElement & { logicalname: string }>} */
  const regionsElmCollection = document.querySelectorAll('#regions svg path');

  prefectureGroup?.addEventListener('click', () => {
    regionsElmCollection.forEach(elm => {
      if (elm.logicalname === logicalname) {
        elm.classList.add('active');
      } else {
        elm.classList.remove('active');
      }
      setInfo('prefecture', prefectureData);
    });
  });

  addStroke(prefecture);
}
