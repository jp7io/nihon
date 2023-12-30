// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

import { setActiveMunicipalityType } from './tokyo.js';
import { setActiveCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { parseHash } from './utils.js';
import { layers } from '../data/dict.js';
import { state } from './state.js';

/**
 * @param {Name} layer
 */
export function setLayer(layer) {
  if (layer === layers.prefecture) {
    setActiveCity();
    const hash = parseHash();
    document.location.hash = Object.values(hash).filter(str => str && str.length > 0).join(',');
  }

  if (layer === layers.tokyo) {
    resetMap();
    clearRegion();
    setActiveMunicipalityType();
  } else if (state.layer.val === layers.tokyo) {
    setTimeout(() => {
      resetMap();
      clearRegion();
    }, 1);
  }

  state.layer.val = layer;
}
