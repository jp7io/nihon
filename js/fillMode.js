// @ts-check

/**
 * @typedef {import('./colors.js').Color} Color
 */

import { regions } from "../data/regions.js";
import { municipalityType, tokyo } from '../data/tokyo.js';
import { colorsTokyo } from './colorsTokyo.js';

/**
 * @param {string} mode
 * @param {Color[]} colors
 */
export function setFillmode(mode, colors) {
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
