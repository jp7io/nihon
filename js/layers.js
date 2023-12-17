// @ts-check

import { setActiveCity } from './map/cities.js';
import { parseHash } from './utils.js';

export function initLayers() {
  /** @type {NodeListOf<HTMLElement>} */
  const layers = document.querySelectorAll('#layersSet .item');
  layers.forEach(layer => layer.onclick = (e) => handleLayers(e))
};

function handleLayers(e) {
  /** @type {HTMLElement | null} */
  const map = document.getElementById('map');

  /** @type {NodeListOf<HTMLElement>} */
  const items = document.querySelectorAll('#layersSet .item');
  items?.forEach(item => {
    item.classList.remove('active')
    if (item.dataset.layer) {
      map?.classList.remove(item.dataset.layer);
    }
  })

  if (e.currentTarget.dataset.layer === 'prefectures') {
    setActiveCity();
    const { region, prefecture } = parseHash();
    document.location.hash = `${region},${prefecture}`;
  }

  map?.classList.add(e.currentTarget.dataset.layer);
  e.currentTarget.classList.add('active');
}
