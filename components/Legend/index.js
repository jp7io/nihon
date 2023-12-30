// @ts-check

import van from '../../lib/van.js';
import { JapanElm } from './Japan.js';
import { TokyoElm } from './Tokyo.js';

const { div } = van.tags;

export const LegendElm = div({
  id: 'legend',
},
  JapanElm,
  TokyoElm,
);
