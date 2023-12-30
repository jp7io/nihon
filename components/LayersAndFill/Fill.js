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
  Object.entries(fillmode).map(item => {
    const [key, value] = item;
    return div(
      {
        class: () => state?.fillmode?.val.en === value.en ? 'item active' : 'item',
        'data-item': value.en,
        onclick: () => {
          state.fillmode.val = value;
          setFillmode(key, colors)
        }
      },
      furigana(value),
    )
  }));
