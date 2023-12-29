// @ts-check

import { dict } from '../data/dict.js';
import { regions } from '../data/regions.js';
import { furigana } from './furigana.js';
import { extractPrefectures, replaceSpecialCharactersWithAscii } from './utils.js';
import van from '../lib/van.js';

const { a, div, img } = van.tags

const setInfoSelected = (name, flag) => div(
  {
    id: 'info-selected'
  },
  flag && div({ class: 'flag' }, img({ src: `./img/${flag}.svg` })),
  furigana(name),
  div({ class: 'wikipedia' }, a({ href: `https://ja.wikipedia.org/wiki/${name.ja}`, target: '_blank' }, furigana(dict.wikipedia))),
);

/**
 * @param {string=} type
 * @param {any=} data
 */
export function setInfo(type, data) {
  const info = document.getElementById('info');
  const infoSelected = document.getElementById('info-data');
  const h1 = document.querySelector('#title h1');
  const h2 = document.querySelector('#title h2');
  const h2Pre = document.querySelector('.h2-pre');
  const h3 = document.querySelector('#title h3');
  const h3Pre = document.querySelector('.h3-pre');

  h1 && (h1.innerHTML = '');
  h2 && (h2.innerHTML = '');
  h2Pre && (h2Pre.innerHTML = '');
  h3 && (h3.innerHTML = '');
  h3Pre && (h3Pre.innerHTML = '');

  if (!info || !infoSelected) {
    return;
  }
  if (data) {
    h1 && (van.add(h1, furigana(dict.japan)));

    const { name } = data;

    /** @type {any[]} */
    const paths = [data];

    let flag = '';
    const getFlagUrl = (type, paths) => `${type}/${paths.slice(0, -1).map(path => replaceSpecialCharactersWithAscii(path.name.en)).join(',')}`;

    switch (type) {
      case 'city':
        paths.push(data.prefecture, data.prefecture.region);
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (van.add(h2, furigana(data.prefecture.name)));
        if (data.name.en !== 'Tōkyō') {
          h3Pre && (h3Pre.innerHTML = '/');
          h3 && (van.add(h3, furigana(data.name)));
        }
        flag = getFlagUrl(type, paths);
        break;
      case 'prefecture':
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (van.add(h2, furigana(name)));
        paths.push(data.region);
        flag = getFlagUrl(type, paths);
        break;
      case 'tokyo':
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (van.add(h2, furigana(data.name)));
        flag = 'city/Tokyo,Tokyo';
        break;
      case 'municipality':
        const prefectures = extractPrefectures(regions);
        const tokyoPrefecture = prefectures.find(prefecture => prefecture.name.en === 'Tōkyō');
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (van.add(h2, furigana(tokyoPrefecture.name)));
        h3Pre && (h3Pre.innerHTML = '/');
        h3 && (van.add(h3, furigana(name)));
        paths.push(tokyoPrefecture);
        flag = getFlagUrl('tokyo', paths);
        break;
      case 'region':
        flag = '';
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (van.add(h2, furigana(name)));
        break;
    }

    info.classList.add('active');

    infoSelected.innerHTML = setInfoSelected(name, flag).innerHTML;

    document.title = `${paths.map(path => path.name.ja).join(' / ')} / 日本`;
    document.location.hash = paths.reverse().map(path => replaceSpecialCharactersWithAscii(path.name.en)).join('/');
  } else {
    info.classList.remove('active');
    infoSelected.innerHTML = '';
    h1 && (van.add(h1, furigana(dict.mapOfJapan)));
  }
}

const infoToolTip = div({ id: 'info-tooltip' }, furigana(dict.toolTip));
const infoData = div({ id: 'info-data' });

const infoElm = document.getElementById('info');
infoElm && van.add(infoElm, infoToolTip, infoData)
