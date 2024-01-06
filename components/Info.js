// @ts-check

/**
 * @typedef {import('../data/types.js').LocationData} LocationData
 */

import { dict } from '../data/dict.js';
import { furigana } from '../js/furigana.js';
import { state } from '../js/state.js';
import { replaceSpecialChars } from '../js/utils.js';
import van from '../lib/van.js';
import { Picture } from './Picture.js';

const { a, div, img } = van.tags

/**
 * @param {LocationData} data
 * @returns {HTMLElement}
 */
const InfoData = (data) => {
  const { name, picture } = data;
  return div(
    {
      id: 'info-data',
    },
    Flag(),
    furigana(name),
    Wikipedia(name),
    picture && Picture(data),
  );
}

const InfoTooltip = div(
  {
    id: 'info-tooltip',
  },
  furigana(dict.toolTip),
);

export const filePath = (prefix = '') => {
  const { municipality, city, prefecture } = state;
  if (municipality.val) {
    return `tokyo/${prefix + replaceSpecialChars(municipality.val.name.en)}`;
  }
  if (city.val) {
    return `city/${prefix + replaceSpecialChars(city.val.name.en)},${replaceSpecialChars(prefecture.val.name.en)}`;
  }
  if (prefecture.val) {
    return `prefecture/${prefix + replaceSpecialChars(prefecture.val.name.en)}`;
  }
  return null;
}

const Flag = () => {
  if (!filePath()) {
    return null;
  }

  const src = `./img/${filePath()}.svg`;
  return div({ class: 'flag' }, img({ src }))
}

const Wikipedia = (name) => div(
  {
    class: 'wikipedia'
  },
  a(
    {
      href: `https://ja.wikipedia.org/wiki/${name.ja}`,
      target: '_blank'
    },
    furigana(dict.wikipedia),
  ),
);

export const InfoElm = () => {
  const data = state.municipality.val || state.city.val || state.prefecture.val || state.region.val || null;

  return div(
    {
      id: 'info',
      class: (data) ? 'data' : 'tooltip',
    },
    data ? InfoData(data) : InfoTooltip,
  )
};
