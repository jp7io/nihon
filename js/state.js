// @ts-check

import { fillmode, layers } from '../data/dict.js';
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
 * @property {State} region
 * @property {State<Prefecture>=} prefecture
 * @property {State<City>=} city
 * @property {State<Municipality>=} municipality
 * @property {State} municipalityType
 * @property {State} layer
 * @property {State} fillmode
 * @property {State} regionZoom
 */

/** @type {AppState} */
export const state = {
  region: van.state(null),
  municipalityType: van.state(null),
  layer: van.state(layers.capital),
  fillmode: van.state(fillmode.color),
  regionZoom: van.state(false),
}
