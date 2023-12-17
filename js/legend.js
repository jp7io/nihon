// @ts-check

import { regions } from "./regions.js";
import { parseData, parseDataForPrefectures, parseDataForCities, isMobile } from './utils.js';
import { colors } from './colors.js';
import { drawRegions, drawPrefectures, drawCities, drawClickableArea } from './maps/index.js';
import { setInfo } from './info.js';

export function drawLegendItems() {
  const legendItems = document.getElementById('legend-items');

  regions.forEach((region, index) => {
    const { name, zoom } = region;
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.dataset.region = name.en;

    item.innerHTML = (`
      <div class="legend-color" style="background: ${colors[index].color}"></div>
      <div class="legend-pattern">
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect fill="${colors[index].pattern}" />
        </svg>
      </div>
      <div class="legend-name">
        <ruby class="furigana">
          <div class="ja">
            <rtc>${name.furigana.map(char => `<rt>${char}</rt>`).join('')}</rtc>
            <rbc>${name.ja.map(char => `<rb>${char}</rb>`).join('')}</rbc>
          </div>
          <rtc class="annotation"><rt>${name.en}</rt></rtc>
        </ruby>
      </div>
    `);

    item.onclick = () => setActiveRegion(region);

    legendItems?.appendChild(item);
  });

  const legendH1 = document.querySelector('#title h1');
  legendH1?.addEventListener('click', () => setActiveRegion());
}

export function setActiveRegion(region, callback) {
  /** @type {HTMLElement | null} */
  const previousRegionItem = document.querySelector('.legend-item-active');

  const items = document.querySelectorAll('.legend-item');
  items.forEach(item => item.classList.remove('legend-item-active'));

  if (!region || previousRegionItem?.dataset.region === region?.name.en) {
    resetMap();
    clearRegion();
    return;
  }

  const item = document.querySelector(`.legend-item[data-region="${region.name.en}"]`);

  item?.classList.add('legend-item-active');

  setZoom(region);

  activeRegionDraw(region, () => {
    setInfo();
    /** @type {HTMLElement | null} */
    const fillmode = document.querySelector('#fillmodeSet .item.active');
    fillmode && fillmode.click();
    callback && callback();
  });

}

export function clearRegion() {
  drawRegions(parseData(regions), colors);
  drawPrefectures(parseDataForPrefectures(regions));
  drawCities(parseDataForCities(regions));
  drawClickableArea(parseData(regions), colors);
  document.location.hash = '';
}

function resetMap() {
  const maps = document.getElementById('maps');
  if (!maps) {
    return;
  }
  maps.classList.remove('regionZoom');
  maps.style.width = (isMobile()) ? '200%' : '100%';
}

export function setZoom(region) {
  const maps = document.getElementById('maps');
  if (!maps) {
    return;
  }
  maps.classList.add('regionZoom');
  const { name, zoom } = region;
  const mobile = window.innerWidth <= 768;
  const width = mobile ? zoom.mobile : zoom.desktop;
  maps.style.width = width;
  document.location.hash = name.en;
};

function centerPosition() {
  const cities = document.querySelectorAll('#cities svg g[data-city=true] text:last-of-type');

  const box = {
    xMin: 100_000,
    yMin: 100_000,
    xMax: 0,
    yMax: 0,
  }

  cities.forEach(city => {
    const cityX = parseInt(city.getAttribute('x') || '0')
    const cityY = parseInt(city.getAttribute('y') || '0')
    if (cityX < box.xMin) {
      box.xMin = cityX;
    }
    if (cityY < box.yMin) {
      box.yMin = cityY;
    }
    if (cityX > box.xMax) {
      box.xMax = cityX;
    }
    if (cityY > box.yMax) {
      box.yMax = cityY;
    }
  });

  const windowCenterX = window.innerWidth / 2;
  const windowCenterY = window.innerHeight / 2;

  const citiesCenterX = box.xMin + (box.xMax - box.xMin) / 2;
  const citiesCenterY = box.yMin + (box.yMax - box.yMin) / 2;

  const scrollX = (windowCenterX - citiesCenterX) * -1;
  const scrollY = (windowCenterY - citiesCenterY) * -1;

  window.scrollTo(scrollX, scrollY)
}

export function activeRegionDraw(region, callback) {
  const { name } = region;
  const regionIndex = regions.findIndex(item2 => item2.name.en === region.name.en);
  const color = colors[regionIndex];
  drawRegions(parseData(regions, name.en), [color], callback);
  drawPrefectures(parseDataForPrefectures(regions, name.en));
  drawCities(parseDataForCities(regions, name.en), centerPosition);
}
