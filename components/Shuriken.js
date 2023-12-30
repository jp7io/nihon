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
      className: 'directions',
    },
    Object.values(directions).map(direction => div(
      { className: `direction ${direction.en}` },
      furigana(direction, false),
    )),
    img({ src: 'img/shuriken.svg' }),
  ),
);