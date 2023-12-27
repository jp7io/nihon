// @ts-check

/**
 * @typedef {import('../data/regions.js').Region} Region
 * @typedef {import('../data/regions.js').Prefecture} Prefecture
 * @typedef {import('../data/regions.js').City} City
 * @typedef {import('../data/tokyo.js').Municipality} Municipality
 */

/**
 * @typedef {Object} State
 * @property {Region | null} region
 * @property {Prefecture | null} prefecture
 * @property {City | null} city
 * @property {Municipality | null} municipality
 * @property {Object | null} municipalityType
 */

/** @type State */
export const state = {
  region: null,
  prefecture: null,
  city: null,
  municipality: null,
  municipalityType: null,
}

export function setState(newState) {
  Object.assign(state, newState);
}
