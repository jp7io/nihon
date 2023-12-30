// @ts-check

import { state } from '../js/state.js';
import { toId } from '../js/utils.js';
import van from '../lib/van.js';

const { div, svg } = van.tags;

export const MapElm = div(
  {
    id: 'map',
    class: () => `regions ${toId(state?.layer?.val.en)}`
  },
  div({ id: 'japan' },
    div({ id: 'regions' }),
    div({ id: 'prefectures' }),
    div({ id: 'cities' }),
    div({ id: 'clickableArea' }),
  ),
  div(
    {
      id: 'tokyo',
      class: 'Tokyo'
    },
    svg(
      {
        id: 'tokyo_cloned',
        viewBox: '0 0 1200 2400',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      }
    ),
  ),
);
