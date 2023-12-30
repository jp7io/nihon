// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

import { setMunicipalityType } from './tokyo.js';
import { setCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { parseHash } from './utils.js';
import { layers } from '../data/dict.js';
import { state } from './state.js';

/**
 * @param {Name} layer
 */
export function setLayer(layer) {
  if (layer === layers.prefecture) {
    setCity(null);
  }

  if (layer === layers.tokyo) {
    resetMap();
    clearRegion();
    setMunicipalityType();
  } else if (state.layer.val === layers.tokyo) {
    setTimeout(() => {
      resetMap();
      clearRegion();
    }, 1);
  }

  state.layer.val = layer;
}
