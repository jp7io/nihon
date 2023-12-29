// @ts-check

import { setActiveMunicipalityType } from './tokyo.js';
import { setActiveCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { parseHash } from './utils.js';

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
    setActiveMunicipalityType();
  } else if (previousLayerItem?.dataset.layer === 'tokyo') {
    resetMap();
    clearRegion();
  }

  map?.classList.add(layer);
}
