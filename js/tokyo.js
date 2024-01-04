// @ts-check

/**
 * @typedef {import('../data/tokyo.js').Municipality} Municipality
 */

import { municipalityType, tokyo, tokyoBorders } from '../data/tokyo.js';
import { colorsTokyo } from '../data/colorsTokyo.js';
import { centerMap } from './map/regions.js';
import { state } from './state.js';
import { replaceSpecialChars } from './utils.js';

export function initTokyo() {
  tokyoBorders.forEach(border => {
    const id = replaceSpecialChars(border.name.en);
    const element = document.querySelector(`#Borders #Text #${id} tspan`);
    element && (element.innerHTML = border.name.ja);
  });

  tokyo.forEach(municipality => {
    const id = replaceSpecialChars(municipality.name.en);
    /** @type {NodeListOf<SVGTSpanElement>} */
    const texts = document.querySelectorAll(`#Municipalities #Text #${id} tspan`);
    texts.forEach((element, index) => {
      if (index === 0) {
        element.innerHTML = municipality.name.ja;
        element.addEventListener('click', () => {
          setMunicipalityAndType(municipality);
        });
      } else {
        const y = Number(texts[0].getAttribute('y')) + 5;
        texts[0].setAttribute('y', String(y));
        element.innerHTML = '';
      }
    });
    /** @type {NodeListOf<SVGPathElement | SVGPolygonElement>} */
    const paths = document.querySelectorAll(`#Municipalities #Map #${id}`);
    const index = Object.values(municipalityType).indexOf(municipality.type);
    const color = colorsTokyo[index];
    paths.forEach(path => {
      path.setAttribute('stroke', color.stroke);
      path.addEventListener('click', () => {
        setMunicipalityAndType(municipality);
      })
    });
  });
}

/**
 * @param {Municipality | null} municipality
 */
export function setMunicipality(municipality) {
  const id = municipality && replaceSpecialChars(municipality.name.en);

  tokyo.forEach(item => {
    const itemId = replaceSpecialChars(item.name.en);
    const paths = document.querySelectorAll(`#Municipalities #Map #${itemId}`);
    paths.forEach(path => {
      path.classList.toggle('active', itemId === id);
    });
  });

  state.municipality.val = municipality;
}

export function setMunicipalityAndType(municipality) {
  state.municipalityType.val = municipality?.type;
  setMunicipality(municipality);
}

export function centerTokyo() {
  const type = state.municipalityType.val;
  const container = document.querySelectorAll('#tokyo_cloned');
  const factor = container[0].getBoundingClientRect().width / 1200;
  const query = type ? `#Municipalities #Text #${type.name.en} tspan` : '#Municipalities #Text tspan';
  /** @type {NodeListOf<SVGTSpanElement>} */
  const municipalities = document.querySelectorAll(query);
  centerMap(municipalities, factor);
}

export function findMunicipality(name) {
  return tokyo.find(item => replaceSpecialChars(item.name.en) === name);
}
