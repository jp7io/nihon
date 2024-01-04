// @ts-check

import { layers } from '../../data/dict.js';
import { setFillmode } from '../../js/fillMode.js';
import { isTokyoMap } from '../../js/layers.js';
import { activeRegionDraw, centerMap } from '../../js/map/regions.js';
import { state } from '../../js/state.js';
import { centerTokyo } from '../../js/tokyo.js';
import { isMobile, toId } from '../../js/utils.js';
import van from '../../lib/van.js';
import { JapanElm } from './Japan.js';
import { TokyoElm } from './Tokyo.js';

const { div } = van.tags;

const mapWidth = () => {
  if (state.region.val) {
    state.regionZoom.val = true;
    return `width: ${isMobile() ? state.region.val.zoom.mobile : state.region.val.zoom.desktop}`;
  } else {
    state.regionZoom.val = false;
    return `width: ${isMobile() ? '200%' : '100%'}`;
  }
}

const position = () => {
  console.log('position', state.mapCitiesReady.val)
  if (state.mapCitiesReady.val) {
    if (state.mapCitiesReady.val && state.layer.val === layers.tokyo) {
      setTimeout(() => {
        setTimeout(() => {
          centerTokyo();
        }, 100);
      }, 1); // FIXME
    } else if (state.region.val) {
      setTimeout(() => {
        /** @type {NodeListOf<SVGTextElement>} */
        const cities = document.querySelectorAll('#cities svg g[data-city=true] text:last-of-type');
        centerMap(cities)
      }, 1);
    }
  }
}

export const MapElm = (dom) => {
  state.region.val && console.log(state.region.val.name.en);

  if (dom && state.region.val !== state.region.oldVal) {
    setTimeout(() => {
      activeRegionDraw();
    }, 100);
  }

  if (state.mapRegionsReady.val && state.fillmode.val) {
    setFillmode();
  }

  if (state.mapCitiesReady.val) {
    position();
  }

  return div(
    {
      id: 'map',
      class: () => `${isTokyoMap() ? 'tokyo' : 'regions'} ${toId(state?.layer?.val.en)} ${state.regionZoom.val ? 'regionZoom' : ''}`,
      style: () => mapWidth(),
    },
    JapanElm,
    TokyoElm,
  );
};
