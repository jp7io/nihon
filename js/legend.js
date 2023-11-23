import { regions } from "./regions.js";

export function drawLegendItems(colors) {
  const legendItem = document.getElementById('legend-items');

  regions.forEach(({ name }, index) => {
    legendItem.innerHTML += (`
      <div class="legend-item">
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
      </div>
    `);
  });
}
