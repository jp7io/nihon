// @ts-check

import van from '../lib/van.js';
import { furigana } from '../js/furigana.js';
import { directions } from '../data/dict.js';

const { div, img } = van.tags;

export const ShurikenElm = div(
  {
    id: 'shuriken',
  },
  div(
    {
      class: 'directions',
    },
    Object.values(directions).map(direction => div(
      { class: `direction ${direction.en}` },
      furigana(direction, false),
    )),
    img({ src: 'img/shuriken.svg' }),
  ),
);
