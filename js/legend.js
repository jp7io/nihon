// @ts-check

import { regions } from "../data/regions.js";
import { colors } from './colors.js';
import { setActiveRegion } from './map/index.js';
import { setInfo } from './info.js';
import { municipalityType } from '../data/tokyo.js';
import { setLayer } from './layers.js';
import { colorsTokyo } from './colorsTokyo.js';
import { state } from './state.js';

import van from "../lib/van.js"
import { furigana } from './furigana.js';
import { setActiveMunicipalityType } from './tokyo.js';

const { div, a } = van.tags

const LegendJapan = () => regions.map((region, index) => (
  LegendItem(region, colors[index], state.region, {
    onclick: () => setActiveRegion(region),
    href: `#${region.name.en}`,
  }
  )));

const LegendTokyo = () => Object.values(municipalityType).map((type, index) => (
  LegendItem(type, colorsTokyo[index], state.municipalityType, {
    onclick: () => setActiveMunicipalityType(type),
  }
  )));

const LegendItem = (item, { color, pattern }, state, linkProps) => {

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
  const elm = document.getElementById('legend-japan');
  elm && van.add(elm, LegendJapan())

  const tokyoElm = document.getElementById('legend-tokyo');
  tokyoElm && van.add(tokyoElm, LegendTokyo())

  const legendH1 = document.querySelector('#title h1');
  legendH1?.addEventListener('click', () => {
    setLayer('capitals')
    setActiveRegion();
    setInfo();
  });
}

