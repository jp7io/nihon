// @ts-check

import { regions } from "./regions.js";

export function initFillMode(colors) {
  const colorRadio = document.getElementById('colorRadio');
  const patternRadio = document.getElementById('patternRadio');
  if (!colorRadio || !patternRadio) {
    return;
  }
  // @ts-ignore
  colorRadio.onchange = (e) => handleFillmode(e.target.value, colors);
  // @ts-ignore
  patternRadio.onchange = (e) => handleFillmode(e.target.value, colors);
};

function handleFillmode(mode, colors) {
  document.body.className = `fillmode-${mode}`;

  regions.forEach((_, index) => {
    const color = colors[index];
    const fillToBeReplaced = (mode === 'color') ? color.pattern : color.color;
    const maps = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    maps.forEach((map) => {
      map.setAttribute('fill', color[mode]);
    })
  });
}
