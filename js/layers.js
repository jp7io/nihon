// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

import { setMunicipalityAndType } from './tokyo.js';
import { setCity } from './map/cities.js';
import { clearRegion } from './map/regions.js';
import { layers } from '../data/dict.js';
import { state } from './state.js';
import { findCity, findPrefecture } from './regions.js';
import { setPrefecture } from './map/prefectures.js';

/**
 * @param {Name} layer
 */
export function setLayer(layer) {
  if (layer === layers.prefecture) {
    setCity(null);
  }

  if (layer === layers.tokyo) {
    clearRegion();
    setPrefecture(findPrefecture('Tokyo'));
    setCity(findCity('Tokyo'));
    setMunicipalityAndType(null);
    state.regionZoom.val = false;
  } else if (state.layer.val === layers.tokyo) {
    //clearRegion();
    setCity(null);
    setPrefecture(null);
    setMunicipalityAndType(null);
    state.regionZoom.val = false;
  }

  state.layer.val = layer;
}
