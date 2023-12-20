// @ts-check

import { replaceSpecialCharactersWithAscii } from './utils.js';

/**
 * @param {string=} type
 * @param {any=} data
 */
export function setInfo(type, data) {
  const info = document.getElementById('info');
  const infoSelected = document.getElementById('info-data');
  if (!info || !infoSelected) {
    return;
  }
  if (data) {
    const { name } = data;

    let flag = null;
    let hash = null;

    if (type !== 'tokyo') {
      flag = (type === 'city') ? `${type}/${name.en},${data.prefecture.name.en}` : `${type}/${name.en}`;
      hash = (type === 'city') ? `${data.prefecture.region.name.en},${data.prefecture.name.en},${name.en}` : `${data.region.name.en},${data.name.en}`;
    } else {
      flag = 'city/Tokyo,Tokyo';
    }

    info.classList.add('active');
    infoSelected.innerHTML = `
      ${flag ? `<div class="flag"><img src="./img/${replaceSpecialCharactersWithAscii(flag)}.svg" /></div>` : ''}
      <ruby class="furigana">
        <div class="ja">
          <rtc>${name.furigana.map(char => `<rt>${char}</rt>`).join('')}</rtc>
          <rbc>${name.ja.map(char => `<rb>${char}</rb>`).join('')}</rbc>
        </div>
        <rtc class="annotation"><rt>${name.en}</rt></rtc>
      </ruby>
      <div class="wikipedia">
        <a href="https://ja.wikipedia.org/wiki/${name.ja.join('')}" target="_blank">ウィキペディア</a>
      </div>
    `

    hash && (document.location.hash = hash);
  } else {
    info.classList.remove('active');
    infoSelected.innerHTML = '';
  }
}
