// @ts-check

import { state } from "./state.js";
import { regions } from '../data/regions.js';
import { drawFillmode } from './fillMode.js';
import { setActiveRegion, setActivePrefecture, setActiveCity, centerPosition } from './map/index.js';
import { debounce, extractCities, extractPrefectures, parseHash, replaceSpecialCharactersWithAscii } from './utils.js';
import { drawLayers, setLayer } from './layers.js';
import { createInlineSVG, loadPatterns } from './svg.js';
import { initTokyo, setMunicipality, centerTokyo, setActiveMunicipalityType } from './tokyo.js';
import { tokyo } from '../data/tokyo.js';
import { drawLegendItems } from './legend.js';
import { drawShuriken } from './shuriken.js';
import { drawAbout } from './about.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  loadPatterns();
  drawLayers();
  drawFillmode();
  drawAbout();
  drawShuriken();
  drawLegendItems();
  createInlineSVG();
  setActiveData();
  initTokyo();
  initPosition();
});

function setActiveData() {
  const { region, prefecture, city, municipality } = parseHash();

  if (region === 'Tokyo') {
    setLayer('tokyo');
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
