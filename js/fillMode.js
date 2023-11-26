// @ts-check

import { regions } from "./regions.js";

export function initFillMode(colors) {
  /** @type {NodeListOf<HTMLElement>} */
  const modes = document.querySelectorAll('#fillmodeSet .item');
  modes.forEach(layer => layer.onclick = (e) => handleFillmode(e, colors))
};

function handleFillmode(e, colors) {
  const mode = e.currentTarget.dataset.fillmode;

  document.body.className = `fillmode-${mode}`;

  regions.forEach((_, index) => {
    const color = colors[index];
    const fillToBeReplaced = (mode === 'color') ? color.pattern : color.color;
    const maps = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    maps.forEach((map) => {
      map.setAttribute('fill', color[mode]);
    })
  });

  const modes = document.querySelectorAll('#fillmodeSet .item');
  modes.forEach(layer => layer.classList.remove('active'))

  e.currentTarget.classList.add('active');
}
