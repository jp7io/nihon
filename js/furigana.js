// @ts-check

import van from '../lib/van.js';

const { ruby, rbc, rb, rtc, rt, div } = van.tags

/**
 * @typedef {import('../data/regions.js').Name} Name
 */

/**
 *
 * @param {Name} name
 * @returns string
 */
export function furigana(name, annotation = true) {
  const jaElm = div(
    {
      class: 'ja',
    },
    name.furigana && rtc(
      {},
      name.furigana.map(item => rt({}, item)),
    ),
    rbc(
      {},
      name.ja && name.ja.split('').map(item => rb({}, item)),
    )
    ,
  );

  const annotationElm = rtc(
    {
      class: 'annotation',
    },
    rt({}, name.en),
  );

  const rubyElm = ruby({
    class: 'furigana',
  }, jaElm, annotation ? annotationElm : undefined)

  return rubyElm;
}
