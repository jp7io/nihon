// @ts-check

/**
 * @typedef {import('./colors.js').Color} Color
 */

import van from '../lib/van.js';
import { regions } from "../data/regions.js";
import { municipalityType, tokyo } from '../data/tokyo.js';
import { colorsTokyo } from './colorsTokyo.js';
import { fillmode } from '../data/dict.js';
import { furigana } from './furigana.js';
import { state } from './state.js';
import { colors } from './colors.js';

const { div } = van.tags;

/**
 * @param {string} mode
 * @param {Color[]} colors
 */
export function setFillmode(mode, colors) {
  /** @type {HTMLElement | null} */
  const elm = document.querySelector(`#fillmodeSet .item[data-fillmode=${mode}]`);

  document.body.className = `fillmode-${mode}`;

  regions.forEach((_, index) => {
    const color = colors[index];
    const fillToBeReplaced = (mode === 'color') ? color.pattern : color.color;
    const map = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    map.forEach((map) => {
      map.setAttribute('fill', color[mode]);
    })
  });

  tokyo.forEach((municipality) => {
    const index = Object.values(municipalityType).indexOf(municipality.type);
    const color = colorsTokyo[index];
    const fillToBeReplaced = (mode === 'color') ? color.pattern : color.color;
    const map = document.querySelectorAll(`#tokyo svg [fill="${fillToBeReplaced}" i]`);
    map.forEach((map) => {
      map.setAttribute('fill', color[mode]);
      if (mode === 'pattern') {
        map.setAttribute('stroke', color.strokeColor);
      }
    })
  });
}

export function recoverFillmode() {
  /** @type {HTMLElement | null} */
  const fillmode = document.querySelector('#fillmodeSet .item.active');
  fillmode && fillmode.click();
}

const FillmodeElm = Object.entries(fillmode).map(item => {
  const [key, value] = item;
  return div(
    {
      class: () => state?.fillmode?.val.en === value.en ? 'item active' : 'item',
      'data-item': value.en,
      onclick: () => {
        state.fillmode && (state.fillmode.val = value);
        setFillmode(key, colors)
      }
    },
    furigana(value),
  )
});

export const drawFillmode = () => {
  const fillmodeSet = document.getElementById('fillmodeSet');
  fillmodeSet && van.add(fillmodeSet, FillmodeElm);
}
