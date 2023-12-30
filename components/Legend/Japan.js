// @ts-check

import van from '../../lib/van.js';
import { regions } from '../../data/regions.js';
import { colors } from '../../data/colors.js';
import { setRegion } from '../../js/map/index.js';
import { state } from '../../js/state.js';
import { LegendItem } from './Item.js';
import { replaceSpecialChars } from '../../js/utils.js';

const { div } = van.tags;

export const JapanElm = div({ id: 'legend-japan' }, regions.map((region, index) => (
  LegendItem(region, colors[index], state.region, {
    onclick: () => setRegion(region),
    href: `#${replaceSpecialChars(region.name.en)}`,
  }
  ))));
