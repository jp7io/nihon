// @ts-check

import { setActiveMunicipalityType } from './tokyo.js';
import { setActiveCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { parseHash } from './utils.js';

export function initLayers() {
  /** @type {NodeListOf<HTMLElement>} */
  const layers = document.querySelectorAll('#layersSet .item');
  // @ts-ignore
  layers.forEach(layer => layer.onclick = (e) => setLayer(e?.currentTarget?.dataset.layer))
};

/**
 * @param {string} layer
 */
export function setLayer(layer) {
  /** @type {HTMLElement | null} */
  const map = document.getElementById('map');

  /** @type {HTMLElement | null} */
  const previousLayerItem = document.querySelector('#layersSet .item.active');

  /** @type {NodeListOf<HTMLElement>} */
  const items = document.querySelectorAll('#layersSet .item');
  items?.forEach(item => {
    item.classList.remove('active')
    if (item.dataset.layer) {
      map?.classList.remove(item.dataset.layer);
    }
  })

  if (layer === 'prefectures') {
    setActiveCity();
    const hash = parseHash();
    document.location.hash = Object.values(hash).filter(str => str && str.length > 0).join(',');
  }

  if (layer === 'tokyo') {
    resetMap();
    clearRegion();
    const items = document.querySelectorAll('#legend .item');
    items.forEach(item => item.classList.remove('active'));
    setActiveMunicipalityType();
  } else if (previousLayerItem?.dataset.layer === 'tokyo') {
    resetMap();
    clearRegion();
  }

  map?.classList.add(layer);

  const elm = document.querySelector(`#layersSet .item[data-layer=${layer}]`);
  elm?.classList.add('active');
}
