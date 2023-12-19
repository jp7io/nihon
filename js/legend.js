// @ts-check

import { regions } from "./regions.js";
import { colors } from './colors.js';
import { setActiveRegion } from './map/index.js';
import { setInfo } from './info.js';
import { municipalityType } from './tokyo.js';
import { isMobile } from './utils.js';

export function drawLegendItems() {
  const japanLegendItems = document.getElementById('legend-japan');

  regions.forEach((region, index) => {
    const { name } = region;
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.region = name.en;

    item.innerHTML = legendItem(name, colors[index].color, colors[index].pattern);

    item.onclick = () => setActiveRegion(region);

    japanLegendItems?.appendChild(item);
  });

  const tokyoLegendItems = document.getElementById('legend-tokyo');

  Object.keys(municipalityType).forEach((municipalityTypeKey) => {
    const type = municipalityType[municipalityTypeKey];
    const { name, color } = type;
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.type = name.en;

    item.innerHTML = legendItem(name, color, color);

    item.onclick = () => setActiveMunicipalityType(type);

    tokyoLegendItems?.appendChild(item);
  });

  const legendH1 = document.querySelector('#title h1');
  legendH1?.addEventListener('click', () => {
    setActiveRegion();
    setInfo();
  });
}

function legendItem(name, color, pattern) {
  return `
    <div class="color" style="background: ${color}"></div>
    <div class="pattern" style="border-color: ${color}">
      <svg xmlns="http://www.w3.org/2000/svg">
        <rect fill="${pattern}" />
      </svg>
    </div>
    <div class="name">
      <ruby class="furigana">
        <div class="ja">
          <rtc>${name.furigana.map(char => `<rt>${char}</rt>`).join('')}</rtc>
          <rbc>${name.ja.map(char => `<rb>${char}</rb>`).join('')}</rbc>
        </div>
        <rtc class="annotation"><rt>${name.en}</rt></rtc>
      </ruby>
    </div>
  `;
}

export function setActiveMunicipalityType(type) {
  /** @type {NodeListOf<HTMLElement>}  */
  const legendItems = document.querySelectorAll('#legend-tokyo .item');
  legendItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.type === type.name.en);
  });

  const tokyo = document.getElementById('tokyo');
  tokyo && (tokyo.className = type.name.en);

  switch (type.name.en) {
    case 'Special-Ward':
      if (isMobile()) {
        window.scrollTo(400, 0)
      } else {
        window.scrollTo(10_000, 200)
      }
      break;
    case 'City':
      if (isMobile()) {
        window.scrollTo(50, 0)
      } else {
        window.scrollTo(0, 200)
      }
      break;
    default:
      window.scrollTo(0, 0)
      break;
  }

  setInfo(type);
}
