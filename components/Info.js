// @ts-check

import { dict, layers } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import { state } from '../js/state.js';
import { replaceSpecialChars } from '../js/utils.js';
import van from '../lib/van.js';

const { a, div, img } = van.tags

/**
 * @param {import('../data/regions.js').Name} name
 * @returns {HTMLElement}
 */
const InfoData = (name) => div(
  {
    id: 'info-data',
  },
  Flag(),
  furigana(name),
  div({ class: 'wikipedia' }, a({ href: `https://ja.wikipedia.org/wiki/${name.ja}`, target: '_blank' }, furigana(dict.wikipedia))),
);

const InfoTooltip = div(
  {
    id: 'info-tooltip',
  },
  furigana(dict.toolTip),
);

const flagUrl = () => {
  const { municipality, city, prefecture } = state;
  if (municipality.val) {
    return `./img/tokyo/${replaceSpecialChars(municipality.val.name.en)}.svg`;
  }
  if (city.val) {
    return `./img/city/${replaceSpecialChars(city.val.name.en)},${replaceSpecialChars(prefecture.val.name.en)}.svg`;
  }
  if (prefecture.val) {
    return `./img/prefecture/${replaceSpecialChars(prefecture.val.name.en)}.svg`;
  }
  return null;
}

const Flag = () => {
  const src = flagUrl();

  if (!src) {
    return null;
  }

  return div({ class: 'flag' }, img({ src }))
}

export const InfoElm = () => {
  const data = state.municipality.val || state.city.val || state.prefecture.val || state.region.val || null;

  return div(
    {
      id: 'info',
      class: (data) ? 'data' : 'tooltip',
    },
    data ? InfoData(data.name) : InfoTooltip,
  )
};
