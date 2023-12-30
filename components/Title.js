// @ts-check

import { dict, layers } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import van from '../lib/van.js';
import { setLayer } from '../js/layers.js';
import { setActiveRegion } from '../js/map/index.js';
import { setInfo } from '../js/info.js';
import { state } from '../js/state.js';

const { div, h1, h2, h3 } = van.tags;

export const TitleElm = div({ id: 'title' },
  div({ class: 'title-container' },
    h1(
      {
        onclick: () => {
          setLayer(layers.capital);
          setActiveRegion(null);
          setInfo();
        },
      },
      furigana(dict.mapOfJapan)),
  ),
  div({ class: 'h2-pre' }),
  h2(),
  div({ class: 'h3-pre' }),
  h3(),
);
