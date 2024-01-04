// @ts-check

import { layers } from '../data/dict.js';
import { setFillmode } from '../js/fillMode.js';
import { activeRegionDraw, centerMap } from '../js/map/regions.js';
import { state } from '../js/state.js';
import { centerTokyo } from '../js/tokyo.js';
import { isMobile, memoize, toId } from '../js/utils.js';
import van from '../lib/van.js';

const { div } = van.tags;

const { svg } = van.tagsNS("http://www.w3.org/2000/svg")

const japanMap = memoize(() => [
  div({ id: 'regions' }),
  div({ id: 'prefectures' }),
  div({ id: 'cities' }),
  div({ id: 'clickableArea' }),
]);

const tokyoMap = memoize(() => svg(
  {
    id: 'tokyo_cloned',
    viewBox: '0 0 1200 2400',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  }
));

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
  if (state.mapCitiesReady.val) {
    if (state.mapCitiesReady.val && state.layer.val === layers.tokyo) {
      setTimeout(() => {
        setTimeout(() => {
          centerTokyo();
        }, 100);
      }, 1); // FIXME
    } else {
      /** @type {NodeListOf<SVGTextElement>} */
      const cities = document.querySelectorAll('#cities svg g[data-city=true] text:last-of-type');
      centerMap(cities)
    }
  }
}

const cities = () => {
  if (state.mapCitiesReady.val) {
    const cities = document.querySelectorAll('#cities svg g[data-city=true]');
    cities.forEach(elm => elm.classList.remove('active'));
    if (state.city.val) {
      const cityElm = document.querySelector(`#cities svg g[data-name="${state.city.val.name.en}"]`);
      cityElm?.classList.add('active');
    }
  }
}

const prefectures = () => {
  if (state.mapPrefecturesReady.val) {
    const logicalname = state.prefecture.val && `F#feature#1#0#JP-${state.prefecture.val.code}#0`;

    /** @type {NodeListOf<SVGPathElement & { logicalname: string }>} */
    const regionsElmCollection = document.querySelectorAll('#regions svg path');
    regionsElmCollection.forEach(elm => {
      elm.classList.toggle('active', elm.logicalname === logicalname);
    });
  }

}

export const MapElm = (dom) => {
  state.region.val && console.log(state.region.val.name.en);

  if (dom && state.region.val !== state.region.oldVal) {
    activeRegionDraw();
  }

  if (state.mapRegionsReady.val && state.fillmode.val) {
    setFillmode();
  }

  position();
  cities();
  prefectures();

  return div(
    {
      id: 'map',
      class: () => `regions ${toId(state?.layer?.val.en)} ${state.regionZoom.val ? 'regionZoom' : ''}`,
      style: () => mapWidth(),
    },
    div({ id: 'japan' },
      japanMap(),
    ),
    div(
      {
        id: 'tokyo',
        class: state.municipalityType.val?.name.en || 'Tokyo'
      },
      tokyoMap(),
    ),
  );
};
