// @ts-check

import { regions } from '../data/regions.js';
import { furigana } from './furigana.js';
import { extractPrefectures, replaceSpecialCharactersWithAscii } from './utils.js';

/**
 * @param {string=} type
 * @param {any=} data
 */
export function setInfo(type, data) {
  const info = document.getElementById('info');
  const infoSelected = document.getElementById('info-data');
  const h2 = document.querySelector('#title h2');
  const h2Pre = document.querySelector('.h2-pre');
  const h3 = document.querySelector('#title h3');
  const h3Pre = document.querySelector('.h3-pre');

  h2 && (h2.innerHTML = '');
  h2Pre && (h2Pre.innerHTML = '');
  h3 && (h3.innerHTML = '');
  h3Pre && (h3Pre.innerHTML = '');

  if (!info || !infoSelected) {
    return;
  }
  if (data) {
    const { name } = data;

    /** @type {any[]} */
    const paths = [data];

    let flag = '';
    const getFlagUrl = (type, paths) => `${type}/${paths.slice(0, -1).map(path => replaceSpecialCharactersWithAscii(path.name.en)).join(',')}`;

    switch (type) {
      case 'city':
        paths.push(data.prefecture, data.prefecture.region);
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (h2.innerHTML = furigana(data.prefecture.name));
        if (data.name.en !== 'Tōkyō') {
          h3Pre && (h3Pre.innerHTML = '/');
          h3 && (h3.innerHTML = furigana(data.name));
        }
        flag = getFlagUrl(type, paths);
        break;
      case 'prefecture':
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (h2.innerHTML = furigana(name));
        paths.push(data.region);
        flag = getFlagUrl(type, paths);
        break;
      case 'tokyo':
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (h2.innerHTML = furigana(data.name));
        flag = 'city/Tokyo,Tokyo';
        break;
      case 'municipality':
        const prefectures = extractPrefectures(regions);
        const tokyoPrefecture = prefectures.find(prefecture => prefecture.name.en === 'Tōkyō');
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (h2.innerHTML = furigana(tokyoPrefecture.name));
        h3Pre && (h3Pre.innerHTML = '/');
        h3 && (h3.innerHTML = furigana(name));
        paths.push(tokyoPrefecture);
        flag = getFlagUrl('tokyo', paths);
        break;
      case 'region':
        flag = '';
        h2Pre && (h2Pre.innerHTML = '/');
        h2 && (h2.innerHTML = furigana(name));
        break;
    }

    info.classList.add('active');
    infoSelected.innerHTML = `
      ${flag ? `<div class="flag"><img src="./img/${flag}.svg" /></div>` : ''}
      <ruby class="furigana">
        <div class="ja">
          <rtc>${name.furigana.map(char => `<rt>${char}</rt>`).join('')}</rtc>
          <rbc>${name.ja.map(char => `<rb>${char}</rb>`).join('')}</rbc>
        </div>
        <rtc class="annotation"><rt>${name.en}</rt></rtc>
      </ruby>
      <div class="wikipedia">
        <a href="https://ja.wikipedia.org/wiki/${name.ja.join('')}" target="_blank">
          ${furigana({ ja: 'ウィキペディア'.split(''), en: 'Wikipedia' })}
        </a>
      </div>
    `

    document.title = `${paths.map(path => path.name.ja.join('')).join(' / ')} / 日本`;
    document.location.hash = paths.reverse().map(path => replaceSpecialCharactersWithAscii(path.name.en)).join('/');
  } else {
    info.classList.remove('active');
    infoSelected.innerHTML = '';
  }
}
