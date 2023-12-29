// @ts-check

import van from '../lib/van.js';
import { dict } from '../data/dict.js';
import { furigana } from '../js/furigana.js';

const { a, div } = van.tags;

export const AboutElm = a(
  {
    href: 'https://github.com/jp7io/nihon/issues',
    target: '_blank',
  },
  div(
    {
      class: 'item',
    },
    furigana(dict.reportAnIssue),
  )
)
