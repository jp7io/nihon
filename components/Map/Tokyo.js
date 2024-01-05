// @ts-check

import van from '../../lib/van.js';
import { state } from '../../js/state.js';
import { memoize } from '../../js/utils.js';

const { div } = van.tags;

const { svg } = van.tagsNS("http://www.w3.org/2000/svg")

const memoizedTokyoSvg = memoize(() => svg(
  {
    id: 'tokyo_cloned',
    viewBox: '0 0 1200 2400',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  },
))

export const TokyoElm = () => div(
  {
    id: 'tokyo',
    class: state.municipalityType.val?.name.en || 'Tokyo'
  },
  memoizedTokyoSvg(),
);
