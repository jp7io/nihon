// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 * @typedef {import('../data/colors.js').Color} Color
 */

import { regions } from "../data/regions.js";
import { municipalityType } from '../data/tokyo.js';
import { colors } from '../data/colors.js';
import { colorsTokyo } from '../data/colorsTokyo.js';
import { state } from './state.js';
import { toId } from './utils.js';

export function setFillmode() {
  const modeId = toId(state.fillmode.val.en);

  const maps = [
    { id: 'regions', data: regions, colors },
    { id: 'tokyo', data: Object.values(municipalityType), colors: colorsTokyo },
  ]

  maps.forEach(({ id, data, colors }) => {
    data.forEach((_, index) => {
      const color = colors[index];
      const fillToBeReplaced = (modeId === 'color') ? color.pattern : color.color;
      const map = document.querySelectorAll(`#${id} svg [fill="${fillToBeReplaced}" i]`);
      map.forEach((map) => {
        map.setAttribute('fill', color[modeId]);
        // if (id === 'tokyo' && color.stroke) {
        //   map.setAttribute('stroke', color.stroke);
        // }
      });
    });
  });
}
