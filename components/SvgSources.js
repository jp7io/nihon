// @ts-check

import { createInlineSVG } from '../js/svg.js';
import { initTokyo } from '../js/tokyo.js';
import van from '../lib/van.js';

const { div, object } = van.tags;
const { svg, defs } = van.tagsNS('http://www.w3.org/2000/svg');

const svgSources = [
  {
    data: './img/patterns_simple.svg',
    target: 'patterns_cloned',
  },
  {
    data: './img/icons/layers.svg',
    target: 'icons_cloned',
  },
  {
    data: './img/map/tokyo.svg',
    target: 'tokyo_cloned',
    callback: () => initTokyo(),
  },
]

export const SvgSourcesElm = div(
  {
    id: 'svgSources',
  },
  svg({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
    defs({ id: 'patterns_cloned' }),
    defs({ id: 'icons_cloned' }),
  ),
  svgSources.map(({ data, target, callback }) => object(
    {
      type: 'image/svg+xml',
      data,
      id: 'patterns_source',
      onload: (e) => {
        createInlineSVG(e, target);
        callback && callback();
      },
    }
  ),
  ));
