// @ts-check

import van from '../lib/van.js';

/**
 * @typedef {import('../lib/van.js').State} State
 * @typedef {import('../data/regions.js').Region} Region
 * @typedef {import('../data/regions.js').Prefecture} Prefecture
 * @typedef {import('../data/regions.js').City} City
 * @typedef {import('../data/tokyo.js').Municipality} Municipality
 */

/**
 * @typedef {Object} AppState
 * @property {State=} region
 * @property {State<Prefecture>=} prefecture
 * @property {State<City>=} city
 * @property {State<Municipality>=} municipality
 * @property {State=} municipalityType
 * @property {State<string>=} layer
 * @property {State<string>=} fillMode
 */

/** @type {AppState} */
export const state = {
  region: van.state(null),
  municipalityType: van.state(null),
}
