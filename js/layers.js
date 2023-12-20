// @ts-check

import { setActiveMunicipalityType } from './legend.js';
import { setActiveCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { municipalityType } from '../data/tokyo.js';
import { parseHash } from './utils.js';

export function initLayers() {
  /** @type {NodeListOf<HTMLElement>} */
  const layers = document.querySelectorAll('#layersSet .item');
  layers.forEach(layer => layer.onclick = (e) => handleLayers(e))
};

function handleLayers(e) {
  /** @type {HTMLElement | null} */
  const map = document.getElementById('map');

  /** @type {NodeListOf<HTMLElement>} */
  const items = document.querySelectorAll('#layersSet .item');
  items?.forEach(item => {
    item.classList.remove('active')
    if (item.dataset.layer) {
      map?.classList.remove(item.dataset.layer);
    }
  })

  if (e.currentTarget.dataset.layer === 'prefectures') {
    setActiveCity();
    const hash = parseHash();
    document.location.hash = Object.values(hash).filter(str => str && str.length > 0).join(',');
  }

  if (e.currentTarget.dataset.layer === 'tokyo') {
    resetMap();
    clearRegion();
    const items = document.querySelectorAll('#legend .item');
    items.forEach(item => item.classList.remove('active'));
    location.hash = '';
    setTimeout(() => {
      setActiveMunicipalityType(municipalityType.ku);
    }, 100);
  }

  map?.classList.add(e.currentTarget.dataset.layer);
  e.currentTarget.classList.add('active');
}
