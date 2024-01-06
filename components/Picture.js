// @ts-check

/**
 * @typedef {import('../data/types.js').LocationData} LocationData
 */

import { furigana } from '../js/furigana.js';
import { state } from '../js/state.js';
import van from '../lib/van.js';
import { filePath } from './Info.js';

const { div, img, h6 } = van.tags

const picturePath = (prefix = '') => `https://static-nihon.jp7.io/upload/${filePath(prefix)}.webp`;

/**
 * @param {LocationData} data
 * @returns {HTMLElement}
 */
export const PictureModal = (data) => div(
  {
    id: 'picture-modal',
  },
  div({ class: 'modal-content' },
    h6(
      {},
      furigana(data.name),
      div({ class: 'close' }, '╳')
    ),
    img(
      {
        src: picturePath(),
      }
    ),
  )
);

/**
 * @param {LocationData} data
 * @returns {HTMLElement}
 */
export const Picture = (data) => {
  return div(
    {
      class: 'picture'
    },
    img(
      {
        src: picturePath('thumb/'),
        onclick: () => {
          state.modal.val = PictureModal(data);
        }
      }
    ),
  );
}
