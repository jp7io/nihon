// @ts-check

import { layers } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import van from '../lib/van.js';
import { setLayer } from '../js/layers.js';
import { setCity, setRegion } from '../js/map/index.js';
import { setMunicipality } from '../js/tokyo.js';
import { getTitle } from '../js/title.js';
import { replaceSpecialChars } from '../js/utils.js';
import { state } from '../js/state.js';

const { div, h1, h2, h3, h4 } = van.tags;

const getPageTitle = () => {
  const title = getTitle().filter(title => title);
  return title.reverse().map(title => title.ja).join(' / ');
}

const getHash = () => {
  const isTokyo = state.layer.val === layers.tokyo;
  const title = getTitle().slice(isTokyo ? 2 : 1).filter(title => title);
  return title.map(title => replaceSpecialChars(title.en)).join('/');
}

export const TitleElm = () => {
  const [title1, title2, title3, title4] = getTitle();

  document.title = getPageTitle();
  if (state.init.val) {
    document.location.hash = getHash();
  } else {
    state.init.val = true;
  }

  return div(
    {
      id: 'title',
    },
    h1(
      {
        onclick: () => {
          setLayer(layers.capital);
          setRegion(null);
          setCity(null);
          setMunicipality(null);
        },
      },
      furigana(title1),
    ),
    title2 && div({ class: 'h2 title-separator' }, '/'),
    title2 && h2(
      {},
      furigana(title2),
    ),
    title3 && div({ class: 'h3 title-separator' }, '/'),
    title3 && h3(
      {},
      furigana(title3),
    ),
    title4 && div({ class: 'h4 title-separator' }, '/'),
    title4 && h4(
      {},
      furigana(title4),
    ),
  )
};
