// @ts-check

import { state } from "./state.js";
import { setRegion, setPrefecture, setCity, centerPosition } from './map/index.js';
import { debounce, parseHash } from './utils.js';
import { setLayer } from './layers.js';
import { createInlineSVG } from './svg.js';
import { centerTokyo, findMunicipality } from './tokyo.js';
import { Root } from '../components/index.js';
import { layers } from '../data/dict.js';
import van from '../lib/van.js';
import { findRegion, findPrefecture, findCity } from './regions.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  van.add(document.body, Root);
  createInlineSVG();
  setActiveData();
  initPosition();
});

function setActiveData() {
  const { region, prefecture, city, municipality } = parseHash();

  if (region === 'Tokyo') {
    setLayer(layers.tokyo);
    if (municipality) {
      const municipalityData = findMunicipality(municipality);
      if (municipalityData) {
        state.municipalityType.val = municipalityData.type;
        state.municipality.val = municipalityData;
      }
    }
    return;
  }

  const regionData = findRegion(region);
  const prefectureData = prefecture && findPrefecture(prefecture);
  const cityData = city && findCity(city);

  setRegion(regionData, () => {
    setTimeout(() => {
      if (cityData) {
        setLayer(layers.capital);
        setCity(cityData);
      } else if (prefectureData) {
        setLayer(layers.prefecture);
        setPrefecture(prefectureData);
      }
    }, 1);
  });
}

function initPosition() {
  window.addEventListener('resize', debounce(() => {
    const { layer, municipalityType } = state;
    if (layer.val === layers.tokyo && municipalityType.val) {
      centerTokyo(municipalityType.val);
      return;
    }
    /** @type {NodeListOf<SVGTextElement>} */
    const cities = document.querySelectorAll('svg g[data-city=true] text:last-of-type');
    centerPosition(cities);
  }, 100));
}
