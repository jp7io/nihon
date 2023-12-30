// @ts-check

import { state } from "./state.js";
import { regions } from '../data/regions.js';
import { setActiveRegion, setActivePrefecture, setActiveCity, centerPosition } from './map/index.js';
import { debounce, extractCities, extractPrefectures, parseHash, replaceSpecialChars, toId } from './utils.js';
import { setLayer } from './layers.js';
import { createInlineSVG } from './svg.js';
import { centerTokyo } from './tokyo.js';
import { tokyo } from '../data/tokyo.js';
import { Root } from '../components/index.js';
import { layers } from '../data/dict.js';
import van from '../lib/van.js';

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
    setLayer('tokyo');
    state.layer.val = layers.tokyo;
    if (municipality) {
      const municipalityData = tokyo.find(item => replaceSpecialChars(item.name.en) === municipality);
      if (municipalityData) {
        state.municipalityType.val = municipalityData.type;
        state.municipality.val = municipalityData;
      }
    }
    return;
  }

  const regionData = regions.find(record => replaceSpecialChars(record.name.en) === region);
  const prefectureData = extractPrefectures(regions, regionData?.name.en).find(record => replaceSpecialChars(record.name.en) === prefecture);
  const cityData = extractCities(regions, regionData?.name.en).find(record => replaceSpecialChars(record.name.en) === city);

  setActiveRegion(regionData, () => {
    setTimeout(() => {
      if (cityData) {
        setLayer('capitals');
        setActiveCity(cityData);
      } else if (prefectureData) {
        setLayer('prefectures');
        setActivePrefecture(prefectureData);
      }
    }, 1);
  });
}

function initPosition() {
  window.addEventListener('resize', debounce(() => {
    const { layer, municipalityType } = state;
    if (layer.val?.en === 'Tokyo' && municipalityType.val) {
      centerTokyo(municipalityType.val);
      return;
    }
    /** @type {NodeListOf<SVGTextElement>} */
    const cities = document.querySelectorAll('svg g[data-city=true] text:last-of-type');
    centerPosition(cities);
  }, 100));
}
