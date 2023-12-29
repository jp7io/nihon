// @ts-check

import { dict } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import van from '../lib/van.js';

const { div, h1, h2, h3 } = van.tags;

export const TitleElm = div({ id: 'title' },
  div({ class: 'title-container' },
    h1({}, furigana(dict.mapOfJapan)),
  ),
  div({ class: 'h2-pre' }),
  h2({}),
  div({ class: 'h3-pre' }),
  h3({}),
);
