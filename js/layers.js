// @ts-check

import van from '../lib/van.js';
import { setActiveMunicipalityType } from './tokyo.js';
import { setActiveCity } from './map/cities.js';
import { clearRegion, resetMap } from './map/regions.js';
import { parseHash, toId } from './utils.js';
import { layers } from '../data/dict.js';
import { furigana } from './furigana.js';
import { state } from './state.js';

const { div, object } = van.tags;

/**
 * @param {string} layer
 */
export function setLayer(layer) {
  /** @type {HTMLElement | null} */
  const map = document.getElementById('map');

  /** @type {HTMLElement | null} */
  const previousLayerItem = document.querySelector('#layersSet .item.active');

  /** @type {NodeListOf<HTMLElement>} */
  const items = document.querySelectorAll('#layersSet .item');
  items?.forEach(item => {
    if (item.dataset.layer) {
      map?.classList.remove(item.dataset.layer);
    }
  })

  if (layer === 'prefectures') {
    setActiveCity();
    const hash = parseHash();
    document.location.hash = Object.values(hash).filter(str => str && str.length > 0).join(',');
  }

  if (layer === 'tokyo') {
    resetMap();
    clearRegion();
    setActiveMunicipalityType();
  } else if (previousLayerItem?.dataset.layer === 'tokyo') {
    resetMap();
    clearRegion();
  }

  map?.classList.add(layer);
}

const LayersSet = Object.entries(layers).map(layer => {
  const [key, value] = layer;
  const id = toId(value.en);
  return div(
    {
      class: () => state?.layer?.val.en === value.en ? 'item active' : 'item',
      'data-layer': id,
      onclick: (e) => {
        state.layer && (state.layer.val = value);
        setLayer(e?.currentTarget?.dataset.layer)
      },
    },
    object({
      type: 'image/svg+xml',
      data: `./img/icons/${key}.svg`,
      class: 'icon',
    }),
    furigana(value),
  )
});

export const drawLayers = () => {
  const layersSet = document.getElementById('layersSet');
  layersSet && van.add(layersSet, LayersSet);
}
