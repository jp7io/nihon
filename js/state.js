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
 * @property {State} prefecture
 * @property {State} city
 * @property {State} municipality
 * @property {State} municipalityType
 * @property {State} layer
 * @property {State} fillmode
 * @property {State} regionZoom
 * @property {State} init
 * @property {State} mapRegionsReady
 * @property {State} mapPrefecturesReady
 * @property {State} mapCitiesReady
 */

/** @type {AppState} */
export const state = {
  region: van.state(null),
  prefecture: van.state(null),
  city: van.state(null),
  municipality: van.state(null),
  municipalityType: van.state(null),
  layer: van.state(layers.capital),
  fillmode: van.state(fillmode.color),
  regionZoom: van.state(false),
  init: van.state(false),
  mapRegionsReady: van.state(false),
  mapPrefecturesReady: van.state(false),
  mapCitiesReady: van.state(false),
}
