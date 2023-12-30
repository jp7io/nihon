// @ts-check

import van from '../../lib/van.js';
import { fillmode } from '../../data/dict.js';
import { furigana } from '../../js/furigana.js';
import { state } from '../../js/state.js';
import { colors } from '../../js/colors.js';
import { setFillmode } from '../../js/fillMode.js';

const { div } = van.tags;

export const FillElm = div(
  {
    id: 'fill',
    class: 'items',
  },
  Object.values(fillmode).map(item => {
    return div(
      {
        class: () => state?.fillmode?.val.en === item.en ? 'item active' : 'item',
        'data-item': item.en,
        onclick: () => {
          state.fillmode.val = item;
          setFillmode(item, colors)
        }
      },
      furigana(item),
    )
  }));
