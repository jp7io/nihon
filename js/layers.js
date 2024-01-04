// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

import { setMunicipalityAndType } from './tokyo.js';
import { setCity } from './map/cities.js';
import { layers } from '../data/dict.js';
import { state } from './state.js';
import { findCity, findPrefecture } from './regions.js';
import { setPrefecture } from './map/prefectures.js';
import { setRegion } from './map/regions.js';

/**
 * @param {Name} layer
 */
export function setLayer(layer) {
  if (layer === layers.prefecture) {
    setCity(null);
  }

  if (layer === layers.tokyo) {
    setRegion(null);
    setPrefecture(findPrefecture('Tokyo'));
    setCity(findCity('Tokyo'));
    setMunicipalityAndType(null);
  } else if (isTokyoMap()) {
    setRegion(null);
    setPrefecture(null);
    setCity(null);
    setMunicipalityAndType(null);
  }

  state.layer.val = layer;
}

export function isTokyoMap() {
  return state.layer.val === layers.tokyo;
}
