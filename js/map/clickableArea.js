// @ts-check

import { commonOptions } from './common.js';
import { regions } from '../../data/regions.js';

/**
 * @param {(string|number)[][]} data
 * @param {Object[]} colors
 */
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

  const clickableAreaElm = document.getElementById('clickableArea');
  if (!clickableAreaElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(clickableAreaElm);

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
