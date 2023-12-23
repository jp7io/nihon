// @ts-check

/**
 * @typedef {import('../data/tokyo.js').Municipality} Municipality
 */

import { tokyo } from '../data/tokyo.js';
import { setInfo } from './info.js';
import { replaceSpecialCharactersWithAscii } from './utils.js';

export function initTokyo() {
  tokyo.forEach(municipality => {
    const id = replaceSpecialCharactersWithAscii(municipality.name.en);
    /** @type {NodeListOf<SVGTSpanElement>} */
    const texts = document.querySelectorAll(`#Municipalities #Text #${id} tspan`);
    texts.forEach((element, index) => {
      if (index === 0) {
        element.innerHTML = municipality.name.ja.join('');
        element.addEventListener('click', () => {
          setMunicipality(municipality);
        });
      } else {
        const y = Number(texts[0].getAttribute('y')) + 5;
        texts[0].setAttribute('y', String(y));
        element.innerHTML = '';
      }
    });
    /** @type {NodeListOf<SVGPathElement | SVGPolygonElement>} */
    const paths = document.querySelectorAll(`#Municipalities #Map #${id}`);
    paths.forEach(path => {
      path.addEventListener('click', () => {
        setMunicipality(municipality);
      })
    });
  });
}

/**
 * @param {Municipality} municipality
 */
export function setMunicipality(municipality) {
  const id = replaceSpecialCharactersWithAscii(municipality.name.en);
  /** @type {NodeListOf<SVGPathElement | SVGPolygonElement>} */
  const paths = document.querySelectorAll(`#Municipalities #Map g path, #Municipalities #Map g polygon`);
  paths.forEach(path => {
    path.classList.toggle('active', path.id === id);
  });
  setInfo('municipality', municipality);
}
