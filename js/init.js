// @ts-check

import { state } from "./state.js";
import { setRegion, setPrefecture, setCity, centerPosition } from './map/index.js';
import { debounce, parseHash } from './utils.js';
import { setLayer } from './layers.js';
import { createInlineSVG } from './svg.js';
import { centerTokyo, findMunicipality, setMunicipality, setMunicipalityType } from './tokyo.js';
import { Root } from '../components/index.js';
import { layers } from '../data/dict.js';
import van from '../lib/van.js';
import { findRegion, findPrefecture, findCity } from './regions.js';
import { municipalityType } from '../data/tokyo.js';

google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDWQEGh9S63LVWJOVzUX9lZqlTDWMe1nvk' });
google.charts.setOnLoadCallback(async () => {
  van.add(document.body, Root);
  createInlineSVG();
  setData();
  initPosition();
});

function setData() {
  const hash = parseHash();
  if (hash.region === 'Tokyo') {
    setTokyo(hash);
    return;
  }
  setJapan(hash);
}

function setTokyo(hash) {
  setLayer(layers.tokyo);
  if (hash.municipality) {
    const municipalityData = findMunicipality(hash.municipality);
    if (municipalityData) {
      setMunicipality(municipalityData);
      return;
    }
  }
  if (hash.municipalityType) {
    const municipalityTypeData = Object.values(municipalityType).find(type => type.name.en === hash.municipalityType);
    if (municipalityTypeData) {
      setMunicipalityType(municipalityTypeData);
      return;
    }
  }
}

function setJapan(hash) {
  const region = findRegion(hash.region);
  const prefecture = hash.prefecture && findPrefecture(hash.prefecture);
  const city = hash.city && findCity(hash.city);

  setRegion(region, () => {
    setTimeout(() => {
      if (city) {
        setLayer(layers.capital);
        setCity(city);
      } else if (prefecture) {
        setLayer(layers.prefecture);
        setPrefecture(prefecture);
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
