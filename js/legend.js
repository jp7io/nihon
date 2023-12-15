import { regions } from "./regions.js";
import { parseData, parseDataForPrefectures, parseDataForCities, isMobile } from './utils.js';
import { colors as colors2 } from './colors.js';
import { drawRegions, drawPrefectures, drawCities, setInfo } from './map.js';

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

    item.onclick = () => {
      activeRegion(item, region, () => {
        activeRegionDraw(region, colors[index]);
        setInfo();
        setTimeout(() => {
          const fillmode = document.querySelector('#fillmodeSet .item.active');
          fillmode.click();
        }, 100);
      });
    };

    legendItems.appendChild(item);
  });

  const legendH1 = document.querySelector('#title h1');
  legendH1.onclick = () => {
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
  maps.style.width = (isMobile()) ? '200%' : '100%';
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
  maps.classList.add('regionZoom');

  const mobile = window.innerWidth <= 768;
  const width = mobile ? zoom.mobile : zoom.desktop;
  maps.style.width = width;

  document.location.hash = name.en;

  callback();
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
    const cityX = parseInt(city.getAttribute('x'))
    const cityY = parseInt(city.getAttribute('y'))
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

export function activeRegionDraw(region, color) {
  const { name } = region;
  drawRegions(parseData(regions, name.en), [color]);
  drawPrefectures(parseDataForPrefectures(regions, name.en));
  drawCities(parseDataForCities(regions, name.en), centerPosition);
}
