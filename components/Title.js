// @ts-check

import { layers } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import van from '../lib/van.js';
import { isTokyoMap, setLayer } from '../js/layers.js';
import { setCity, setPrefecture, setRegion } from '../js/map/index.js';
import { setMunicipalityAndType } from '../js/tokyo.js';
import { getTitle } from '../js/title.js';
import { replaceSpecialChars } from '../js/utils.js';
import { state } from '../js/state.js';

const { div, h1, h2, h3, h4, h5 } = van.tags;

const hTags = [h1, h2, h3, h4, h5];

const getPageTitle = () => {
  const title = getTitle().filter(title => title);
  return title.reverse().map(title => title.ja).join(' / ');
}

const getHash = () => {
  const isTokyo = isTokyoMap();
  const title = getTitle().slice(isTokyo ? 2 : 1);
  if (isTokyo && state.municipality.val) {
    delete title[1];
  }
  return title.filter(title => title).map(title => replaceSpecialChars(title.en)).join('/');
}

export const TitleElm = () => {
  const titles = getTitle();

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
    titles.map((title, index) => title ? [
      hTags[index](
        {
          onclick: () => {
            if (index === 0) {
              setLayer(layers.capital);
              setPrefecture(null);
              setCity(null);
              setMunicipalityAndType(null);
              setTimeout(() => {
                setRegion(null);
              }, 1);
            }
          },
        },
        furigana(title),
      ),
      div({ class: `h${index + 1} title-separator` }, '/'),
    ] : null),
  )
};
