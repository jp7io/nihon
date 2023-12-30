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
  const previousLayerItem = document.querySelector('#layers .item.active');

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
}
