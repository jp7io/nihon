// @ts-check

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

/**
 *
 * @param {Name} name
 * @returns string
 */
export function furigana(name) {
  return `
    <ruby class="furigana">
      <div class="ja">
        <rtc>${name.furigana.map(item => `<rt>${item}</rt>`).join('')}</rtc>
        <rbc>${name.ja.map(item => `<rb>${item}</rb>`).join('')}</rbc>
      </div>
      <rtc class="annotation">
        <rt xml:lang="en">${name.en}</rt>
      </rtc>
    </ruby>
  `
}
