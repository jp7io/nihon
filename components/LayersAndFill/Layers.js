// @ts-check

import van from '../../lib/van.js';
import { furigana } from '../../js/furigana.js';
import { layers } from '../../data/dict.js';
import { toId } from '../../js/utils.js';
import { state } from '../../js/state.js';
import { setLayer } from '../../js/layers.js';

const { div, object } = van.tags;

export const LayersElm = div({
  id: 'layers',
  class: 'items',
},
  Object.entries(layers).map(layer => {
    const [key, value] = layer;
    const id = toId(value.en);
    return div(
      {
        class: () => state?.layer?.val.en === value.en ? 'item active' : 'item',
        'data-layer': id,
        onclick: (e) => {
          state.layer && (state.layer.val = value);
          setLayer(e?.currentTarget?.dataset.layer)
        },
      },
      object({
        type: 'image/svg+xml',
        data: `./img/icons/${key}.svg`,
        class: 'icon',
      }),
      furigana(value),
    )
  }));
