// @ts-check

import { commonOptions } from './common.js';

export function drawRegions(data, colors, callback) {
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
    regionsElm.style.visibility = 'visible';
    callback && callback();
  });

  chart.draw(dataTable, options);
}
