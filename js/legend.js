import { regions } from "./regions.js";
import { parseData, parseDataForPrefectures, parseDataForCities } from './utils.js';
import { colors as colors2 } from './colors.js';
import { drawRegions, drawPrefectures, drawCities } from './map.js';

export function drawLegendItems(colors) {
  const legendItems = document.getElementById('legend-items');

  regions.forEach(({ name, code }, index) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.dataset.region = code;

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


    item.onclick = (event) => {
      legendItems.querySelector('.legend-item-active')?.classList.toggle('legend-item-active');
      item.classList.toggle('legend-item-active');

      const maps = document.getElementById('maps');
      maps.className = 'regionZoom'

      const left = `-${60 - (index * 15)}%`;
      const top = `-${index * 10}%`;

      maps.style.marginLeft = left;
      maps.style.marginTop = top;
      maps.style.transform = `translateX(-${left}) translateY(${top})`;

      drawRegions(parseData(regions, code), [colors[index]]);
      drawPrefectures(parseDataForPrefectures(regions, code));
      drawCities(parseDataForCities(regions, code));
    };

    legendItems.appendChild(item);
  });
}
