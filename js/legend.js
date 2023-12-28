// @ts-check

import { regions } from "../data/regions.js";
import { colors } from './colors.js';
import { centerPosition, setActiveRegion } from './map/index.js';
import { setInfo } from './info.js';
import { municipalityType } from '../data/tokyo.js';
import { extractPrefectures } from './utils.js';
import { setLayer } from './layers.js';
import { colorsTokyo } from './colorsTokyo.js';
import { setState, state } from './state.js';

export function drawLegendItems() {
  const japanLegendItems = document.getElementById('legend-japan');

  regions.forEach((region, index) => {
    const { name } = region;

    const link = document.createElement('a');
    link.href = `#${name.en}`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveRegion(region);
    });

    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.region = name.en;
    item.innerHTML = legendItem(name, colors[index].color, colors[index].pattern);

    link.appendChild(item);

    japanLegendItems?.appendChild(link);
  });

  const tokyoLegendItems = document.getElementById('legend-tokyo');

  Object.keys(municipalityType).forEach((municipalityTypeKey, index) => {
    const type = municipalityType[municipalityTypeKey];
    const { name } = type;

    const { color, pattern } = colorsTokyo[index];

    const link = document.createElement('a');
    link.href = `#${name.en}`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveMunicipalityType(type);
    });

    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.type = name.en;
    item.innerHTML = legendItem(name, color, pattern);

    link.appendChild(item);

    tokyoLegendItems?.appendChild(link);
  });

  const legendH1 = document.querySelector('#title h1');
  legendH1?.addEventListener('click', () => {
    setLayer('capitals')
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
  if (type && type.name.en === state.municipalityType?.name.en) {
    setActiveMunicipalityType();
    return;
  }

  const prefecturesData = extractPrefectures(regions);
  const tokyoData = prefecturesData.find(item => item.name.en === 'Tōkyō');

  /** @type {NodeListOf<HTMLElement>}  */
  const legendItems = document.querySelectorAll('#legend-tokyo .item');
  legendItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.type === type?.name.en);
  });

  setInfo('tokyo', tokyoData);
  setState({
    ...state,
    municipalityType: type,
  });
  setTimeout(() => {
    centerTokyo(type); // FIXME
  }, 100);
}

export function centerTokyo(type) {
  const tokyo = document.getElementById('tokyo');

  if (!tokyo) {
    return;
  }

  tokyo.className = (type) ? type.name.en : 'Tokyo';

  const container = document.querySelectorAll('#tokyo_cloned');
  const factor = container[0].getBoundingClientRect().width / 1200;

  if (type) {
    /** @type {NodeListOf<SVGTSpanElement>} */
    const municipalities = document.querySelectorAll(`#Municipalities #Text #${type.name.en} tspan`);
    centerPosition(municipalities, factor);
  } else {
    /** @type {NodeListOf<SVGTSpanElement>} */
    const municipalities = document.querySelectorAll(`#Municipalities #Text tspan`);
    centerPosition(municipalities, factor);
  }
}
