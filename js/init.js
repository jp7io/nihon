// @ts-check

import { state } from "./state.js";
import { regions } from '../data/regions.js';
import { setActiveRegion, setActivePrefecture, setActiveCity, centerPosition } from './map/index.js';
import { debounce, extractCities, extractPrefectures, parseHash, replaceSpecialCharactersWithAscii } from './utils.js';
import { setLayer } from './layers.js';
import { createInlineSVG } from './svg.js';
import { initTokyo, setMunicipality, centerTokyo, setActiveMunicipalityType } from './tokyo.js';
import { tokyo } from '../data/tokyo.js';
import { TitleElm, LegendElm, LayersAndFillElm, ShurikenElm, MapElm, SvgSourcesElm } from '../components/index.js';
import { layers } from '../data/dict.js';
import van from '../lib/van.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  van.add(document.body, [
    TitleElm,
    LegendElm,
    LayersAndFillElm,
    ShurikenElm,
    MapElm,
    SvgSourcesElm
  ]);
  createInlineSVG();
  setActiveData();
  initTokyo();
  initPosition();
});

function setActiveData() {
  const { region, prefecture, city, municipality } = parseHash();

  if (region === 'Tokyo') {
    setLayer('tokyo');
    state.layer && (state.layer.val = layers.tokyo);
    if (municipality) {
      const municipalityData = tokyo.find(item => replaceSpecialCharactersWithAscii(item.name.en) === municipality);
      if (municipalityData) {
        setActiveMunicipalityType(municipalityData.type);
        setMunicipality(municipalityData);
      }
    }
    return;
  }

  const regionData = regions.find(record => replaceSpecialCharactersWithAscii(record.name.en) === region);
  const prefectureData = extractPrefectures(regions, regionData?.name.en).find(record => replaceSpecialCharactersWithAscii(record.name.en) === prefecture);
  const cityData = extractCities(regions, regionData?.name.en).find(record => replaceSpecialCharactersWithAscii(record.name.en) === city);

  setActiveRegion(regionData, () => {
    setTimeout(() => {
      if (cityData) {
        setLayer('capitals');
        setActiveCity(cityData);
      } else if (prefectureData) {
        setLayer('prefectures');
        setActivePrefecture(prefectureData);
      }
    }, 100);
  });
}

function initPosition() {
  window.addEventListener('resize', debounce(() => {
    const { region } = parseHash();
    if (region === 'Tokyo' && state.municipalityType) {
      centerTokyo(state.municipalityType.val);
      return;
    } else {
      /** @type {NodeListOf<SVGTextElement>} */
      const cities = document.querySelectorAll('svg g[data-city=true] text:last-of-type');
      centerPosition(cities);
    }
  }, 100));
}
