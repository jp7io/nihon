// @ts-check

import { regions } from "./regions.js";

export function initFillMode(colors) {
  const colorRadio = document.getElementById("colorRadio");
  const patternRadio = document.getElementById("patternRadio");
  if (!colorRadio || !patternRadio) {
    return;
  }
  // @ts-ignore
  colorRadio.onchange = (e) => handleFillmode(e.target.value, colors);
  // @ts-ignore
  patternRadio.onchange = (e) => handleFillmode(e.target.value, colors);

  const layers = document.querySelectorAll('#layersSet input[type="checkbox"]');

  layers.forEach(layer => {
    // @ts-ignore
    layer.onchange = (e) => {
      handleLayers(e);
    }
  })
};

function handleLayers(e) {
  const activeLayers = Array.from(e.target.form.layers).filter(item => item.checked).map(item => item.value)
  const cities = document.querySelectorAll('#cities svg text');
  cities.forEach(city => {
    //console.log(city.innerHTML, city.innerHTML.includes('◼️'));
    if (city.innerHTML.includes('★')) {
      city.style.visibility = activeLayers.includes('regionCapital') ? 'visible' : 'hidden';
    }
    if (city.innerHTML.includes('◼️')) {
      console.log(activeLayers, city.innerHTML)
      city.style.visibility = activeLayers.includes('major') ? 'visible' : 'hidden';
    }
    if (city.getAttribute('fill') == '#a52a2a') {
      city.style.visibility = activeLayers.includes('favorite') ? 'visible' : 'hidden';
    }
  })
}

function handleFillmode(mode, colors) {
  document.body.className = `fillmode-${mode}`;

  regions.forEach((_, index) => {
    const fillToBeReplaced = (mode === 'color') ? colors[index].pattern : colors[index].color;
    const maps = document.querySelectorAll(`#regions svg path[fill="${fillToBeReplaced}"]`);
    maps.forEach((map) => {
      map.setAttribute('fill', colors[index][mode]);
    })
  });
}
