// @ts-check

/**
 * @typedef {import('../../data/regions.js').Region} Region
 * @typedef {import('../../data/colors.js').Color} Color
 */

import { regions } from "../../data/regions.js";
import { colors } from "../../data/colors.js";
import { commonOptions } from './common.js';
import { setInfo } from '../info.js';
import { drawPrefectures } from './prefectures.js';
import { drawCities } from './cities.js';
import { drawClickableArea } from './clickableArea.js';
import { parseData, parseDataForPrefectures, parseDataForCities, isMobile } from "../utils.js";
import { recoverFillmode } from '../fillMode.js';
import { state } from '../state.js';

/**
 * @param {(string|number)[][]} data
 * @param {Color[]} colors
 * @param {() => void=} callback
 */
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

  google.visualization.events.addListener(chart, 'ready', () => {
    callback && callback();
  });

  chart.draw(dataTable, options);
}

/**
 * @param {Region | null} region
 * @param {() => void=} callback
 */
export function setRegion(region, callback) {
  /** @type {HTMLElement | null} */
  const previousRegionItem = document.querySelector('#legend .item.active');

  if (!region || previousRegionItem?.dataset.region === region?.name.en) {
    resetMap();
    clearRegion();
    return;
  }

  setZoom(region);

  activeRegionDraw(region, () => {
    setInfo('region', region);
    recoverFillmode();
    callback && callback();
  });

  state.region.val = region;
}

export function clearRegion() {
  drawRegions(parseData(regions), colors, recoverFillmode);
  drawPrefectures(parseDataForPrefectures(regions));
  drawCities(parseDataForCities(regions));
  drawClickableArea(parseData(regions), colors);
  document.title = '日本の地図 (Map of Japan)';
  document.location.hash = '';
}

export function resetMap() {
  const map = document.getElementById('map');
  if (!map) {
    return;
  }
  state.regionZoom.val = false;
  map.style.width = (isMobile()) ? '200%' : '100%';
}

/**
 * @param {Region} regionData
 */
export function setZoom(regionData) {
  const map = document.getElementById('map');
  if (!map) {
    return;
  }
  state.regionZoom.val = true;
  const { zoom } = regionData;
  const mobile = window.innerWidth <= 768;
  const width = mobile ? zoom.mobile : zoom.desktop;
  map.style.width = width;
};

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
 * @param {() => void} callback
 */
export function activeRegionDraw(regionData, callback) {
  const { name } = regionData;
  const regionIndex = regions.findIndex(record => record.name.en === regionData.name.en);
  const color = colors[regionIndex];
  drawRegions(parseData(regions, name.en), [color], callback);
  drawPrefectures(parseDataForPrefectures(regions, name.en));
  drawCities(parseDataForCities(regions, name.en), () => {
    /** @type {NodeListOf<SVGTextElement>} */
    const cities = document.querySelectorAll('#cities svg g[data-city=true] text:last-of-type');
    centerPosition(cities)
  });
}
