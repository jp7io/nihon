import { regions } from "./regions.js";
import { parseData, parseDataForPrefectures, parseDataForCities } from './utils.js';
import { colors as colors2 } from './colors.js';
import { drawRegions, drawPrefectures, drawCities } from './map.js';

export function drawLegendItems(colors) {
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
      <div class="legend-ja">
        <ruby class="furigana">
          <rbc>${name.ja.map(char => `<rb>${char}</rb>`).join('')}</rbc>
          <rtc>${name.furigana.map(char => `<rt>${char}</rt>`).join('')}</rtc>
        </ruby>
      </div>
      <div class="legend-en">${name.en}</div>
    `);

    item.onclick = () => {
      activeRegion(item, region, () => activeRegionDraw(region, colors[index]))
    };

    legendItems.appendChild(item);
  });

  const legendH3 = document.querySelector('#legend h3');
  legendH3.onclick = () => {
    const activeItem = document.querySelector('.legend-item-active');
    activeItem?.classList.remove('legend-item-active');
    resetMap();
    clearRegion();
  }
}

function clearRegion() {
  drawRegions(parseData(regions), colors2);
  drawPrefectures(parseDataForPrefectures(regions));
  drawCities(parseDataForCities(regions));
  document.location.hash = '';
}

function resetMap() {
  const maps = document.getElementById('maps');
  maps.classList.remove('regionZoom');
  maps.style.width = '100%';
  maps.style.marginLeft = 0;
  maps.style.marginTop = 0;
  maps.style.transform = 'none';
}

export function activeRegion(item, region, callback) {
  const { name, zoom } = region;
  const activeItem = document.querySelector('.legend-item-active');

  item.classList.remove('legend-item-active');

  resetMap();

  if (activeItem?.dataset.region === name.en) {
    clearRegion();
    return;
  }

  activeItem?.classList.remove('legend-item-active');
  item.classList.add('legend-item-active');
  maps.classList.add('regionZoom')
  maps.style.width = zoom.width;
  maps.style.marginLeft = zoom.left;
  maps.style.marginTop = zoom.top;
  maps.style.transform = `translateX(${zoom.left}) translateY(${zoom.top})`;

  document.location.hash = name.en;

  callback();
};

export function activeRegionDraw(region, color) {
  const { name } = region;
  drawRegions(parseData(regions, name.en), [color]);
  drawPrefectures(parseDataForPrefectures(regions, name.en));
  drawCities(parseDataForCities(regions, name.en));
}
