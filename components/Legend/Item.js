// @ts-check

import van from '../../lib/van.js';
import { setActiveRegion } from '../../js/map/index.js';
import { setInfo } from '../../js/info.js';
import { setLayer } from '../../js/layers.js';
import { furigana } from '../../js/furigana.js';

const { div, a } = van.tags

export const LegendItem = (item, { color, pattern }, state, linkProps) => {

  const { name } = item;

  const colorElm = div(
    {
      class: 'color',
      style: `background: ${color}`,
    }
  )

  const patternElm = div(
    {
      class: 'pattern',
      style: `border-color: ${color}`
    },
  );
  patternElm.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect fill="${pattern}" />
    </svg>
  `;

  const nameElm = div(
    {
      class: 'name'
    },
    furigana(name),
  )

  const itemElm = div(
    {
      class: () => (
        state && state.val?.name.en === name.en ? 'item active' : 'item'
      ),
      'data-region': name.en,
    },
    colorElm,
    patternElm,
    nameElm,
  )

  const linkElm = a(
    linkProps,
    itemElm,
  )

  return linkElm;
}

export function drawLegendItems() {
  const legendH1 = document.querySelector('#title h1');
  legendH1?.addEventListener('click', () => {
    setLayer('capitals')
    setActiveRegion();
    setInfo();
  });
}
