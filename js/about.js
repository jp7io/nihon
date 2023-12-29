// @ts-check

import van from '../lib/van.js';
import { dict } from '../data/dict.js';
import { furigana } from './furigana.js';

const { a, div } = van.tags;

const aboutElm = a(
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

export const drawAbout = () => {
  const elm = document.getElementById('about');
  elm && van.add(elm, aboutElm);
}
