// @ts-check

import { dict } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import van from '../lib/van.js';

const { div } = van.tags;

export const InfoElm = div(
  {
    id: 'info',
  },
  div(
    {
      id: 'info-tooltip',
    },
    furigana(dict.toolTip)),
  div(
    {
      id: 'info-data',
    }),
);
