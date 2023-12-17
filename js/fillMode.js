// @ts-check

/**
 * @typedef {import('./colors.js').Color} Color
 */

import { regions } from "./regions.js";

/**
 * @param {Color[]} colors
 */
export function initFillMode(colors) {
  /** @type {NodeListOf<HTMLElement>} */
  const modes = document.querySelectorAll('#fillmodeSet .item');
  modes.forEach(layer => layer.onclick = (e) => handleFillmode(e, colors))
};

/**
 * @param {any} e
 * @param {Color[]} colors
 */
function handleFillmode(e, colors) {
  const mode = e.currentTarget.dataset.fillmode;

  document.body.className = `fillmode-${mode}`;

  regions.forEach((_, index) => {
    const color = colors[index];
    const fillToBeReplaced = (mode === 'color') ? color.pattern : color.color;
    const map = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    map.forEach((map) => {
      map.setAttribute('fill', color[mode]);
    })
  });

  const modes = document.querySelectorAll('#fillmodeSet .item');
  modes.forEach(layer => layer.classList.remove('active'))

  e.currentTarget.classList.add('active');
}

export function recoverFillmode() {
  /** @type {HTMLElement | null} */
  const fillmode = document.querySelector('#fillmodeSet .item.active');
  fillmode && fillmode.click();
}
