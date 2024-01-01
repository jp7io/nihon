// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

import { setMunicipalityAndType } from './tokyo.js';
import { setCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
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
    resetMap();
    clearRegion();
    setPrefecture(findPrefecture('Tokyo'));
    setCity(findCity('Tokyo'));
    setMunicipalityAndType(null);
  } else if (state.layer.val === layers.tokyo) {
    setTimeout(() => {
      resetMap();
      clearRegion();
      setCity(null);
      setPrefecture(null);
      setMunicipalityAndType(null);
    }, 1);
  }

  state.layer.val = layer;
}
