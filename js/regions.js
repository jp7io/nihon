// @ts-check

/**
 * @typedef {import('../data/regions.js').Region} Region
 * @typedef {import('../data/regions.js').Prefecture} Prefecture
 * @typedef {import('../data/regions.js').City} City
 */

import { regions } from '../data/regions.js';
import { compareIds } from './utils.js';

/**
 * @param {string} search
 * @returns {Region | null}
 */
export function findRegion(search) {
  for (let region of regions) {
    if (compareLocationName(region, search)) {
      return region;
    }
  };
  return null;
}

/**
 * @param {string} search
 * @returns {Prefecture | null}
 */
export function findPrefecture(search) {
  for (let region of regions) {
    for (let prefecture of region.prefectures) {
      if (compareLocationName(prefecture, search)) {
        return {
          ...prefecture,
          region,
        };
      }
    };
  };
  return null;
}

/**
 * @param {string} search
 * @returns {City | null}
 */
export function findCity(search) {
  for (let region of regions) {
    for (let prefecture of region.prefectures) {
      for (let city of prefecture.cities) {
        if (compareLocationName(city, search)) {
          return {
            ...city,
            prefecture: {
              ...prefecture,
              region,
            }
          };
        }
      }
    }
  }
  return null;
}

/**
 * @param {Region | Prefecture | City} location
 * @param {string} search
 */
function compareLocationName({ name }, search) {
  return search === name.ja || compareIds(name.en, search)
}
