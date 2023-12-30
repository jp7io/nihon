// @ts-check

/**
 * @typedef {import('../data/colors.js').Color} Color
 */

import { regions } from "../data/regions.js";
import { municipalityType, tokyo } from '../data/tokyo.js';
import { colors } from '../data/colors.js';
import { colorsTokyo } from '../data/colorsTokyo.js';
import { state } from './state.js';
import { toId } from './utils.js';

/**
 * @param {any} mode
 * @param {Color[]} colors
 */
export function setFillmode(mode, colors) {
  state.fillmode.val = mode;

  const modeId = toId(mode.en);

  regions.forEach((_, index) => {
    const color = colors[index];
    const fillToBeReplaced = (modeId === 'color') ? color.pattern : color.color;
    const map = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    map.forEach((map) => {
      map.setAttribute('fill', color[modeId]);
    })
  });

  tokyo.forEach((municipality) => {
    const index = Object.values(municipalityType).indexOf(municipality.type);
    const color = colorsTokyo[index];
    const fillToBeReplaced = (modeId === 'color') ? color.pattern : color.color;
    const map = document.querySelectorAll(`#tokyo svg [fill="${fillToBeReplaced}" i]`);
    map.forEach((map) => {
      map.setAttribute('fill', color[modeId]);
      if (modeId === 'pattern') {
        map.setAttribute('stroke', color.strokeColor);
      }
    })
  });
}

export function recoverFillmode() {
  setFillmode(state.fillmode.val, colors);
}
