// @ts-check

import { state } from '../../js/state.js';
import van from '../../lib/van.js';

const { div } = van.tags;

const prefectures = () => {
  if (state.mapPrefecturesReady.val) {
    const logicalname = state.prefecture.val && `F#feature#1#0#JP-${state.prefecture.val.code}#0`;

    /** @type {NodeListOf<SVGPathElement & { logicalname: string }>} */
    const regionsElmCollection = document.querySelectorAll('#regions svg path');
    regionsElmCollection.forEach(elm => {
      elm.classList.toggle('active', elm.logicalname === logicalname);
    });
  }

}

export const PrefecturesElm = () => {
  prefectures();

  return div(
    {
      id: 'prefectures',
    }
  );
};
