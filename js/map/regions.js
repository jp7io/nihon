// @ts-check

/**
 * @typedef {import('../../data/regions.js').Region} Region
 * @typedef {import('../../data/colors.js').Color} Color
 */

import { regions } from "../../data/regions.js";
import { colors } from "../../data/colors.js";
import { commonOptions } from './common.js';
import { drawPrefectures } from './prefectures.js';
import { drawCities } from './cities.js';
import { drawClickableArea } from './clickableArea.js';
import { parseData, parseDataForPrefectures, parseDataForCities } from "../utils.js";
import { state } from '../state.js';

/**
 * @param {(string|number)[][]} data
 * @param {Color[]} colors
 */
export function drawRegions(data, colors) {
  state.mapRegionsReady.val = false;

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

  google.visualization.events.addListener(chart, 'ready', () => {
    state.mapRegionsReady.val = true;
  });

  chart.draw(dataTable, options);
}

/**
 * @param {Region | null} region
 */
export function setRegion(region) {
  if (!region || state.region.oldVal === region) {
    state.region.val = null;
    state.regionZoom.val = false;
    clearRegion();
    return;
  }

  state.region.val = region;
}

export function clearRegion() {
  state.municipality.val = null;
  drawRegions(parseData(regions), colors);
  drawPrefectures(parseDataForPrefectures(regions));
  drawCities(parseDataForCities(regions));
  drawClickableArea(parseData(regions), colors);
}

/**
 * @param {NodeListOf<SVGElement>} elmList
 */
export function centerPosition(elmList, factor = 1) {
  const box = {
    xMin: 100_000,
    yMin: 100_000,
    xMax: 0,
    yMax: 0,
  }

  elmList.forEach(elm => {
    const elmX = parseInt(elm.getAttribute('x') || '0') * factor;
    const elmY = parseInt(elm.getAttribute('y') || '0') * factor;

    if (elmX < box.xMin) {
      box.xMin = elmX;
    }
    if (elmY < box.yMin) {
      box.yMin = elmY;
    }
    if (elmX > box.xMax) {
      box.xMax = elmX;
    }
    if (elmY > box.yMax) {
      box.yMax = elmY;
    }
  });

  const windowCenterX = window.innerWidth / 2;
  const windowCenterY = window.innerHeight / 2;

  const elmListCenterX = box.xMin + (box.xMax - box.xMin) / 2;
  const elmListCenterY = box.yMin + (box.yMax - box.yMin) / 2;

  const scrollX = (windowCenterX - elmListCenterX) * -1;
  const scrollY = (windowCenterY - elmListCenterY) * -1;

  window.scrollTo(scrollX, scrollY)
}

/**
 * @param {Region} regionData
 */
export function activeRegionDraw(regionData) {
  const { name } = regionData;
  const regionIndex = regions.findIndex(record => record.name.en === regionData.name.en);
  const color = colors[regionIndex];
  drawRegions(parseData(regions, name.en), [color]);
  drawPrefectures(parseDataForPrefectures(regions, name.en));
  drawCities(parseDataForCities(regions, name.en));
}
