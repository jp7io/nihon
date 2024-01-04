// @ts-check

import van from '../../lib/van.js';
import { municipalityType } from '../../data/tokyo.js';
import { colorsTokyo } from '../../data/colorsTokyo.js';
import { state } from '../../js/state.js';
import { setMunicipality } from '../../js/tokyo.js';
import { LegendItem } from './Item.js';

const { div } = van.tags;

export const TokyoElm = div({ id: 'legend-tokyo' }, Object.values(municipalityType).map((type, index) => (
  LegendItem(type, colorsTokyo[index], state.municipalityType, {
    onclick: () => {
      setMunicipality(null);
      state.municipalityType.val = type;
    },
  }))));
