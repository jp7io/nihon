// @ts-check

import { state } from '../js/state.js';
import { memoize, toId } from '../js/utils.js';
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

export const MapElm = () => div(
  {
    id: 'map',
    class: () => `regions ${toId(state?.layer?.val.en)} ${state.regionZoom.val ? 'regionZoom' : ''}`,
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
