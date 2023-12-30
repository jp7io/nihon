// @ts-check

import van from '../../lib/van.js';
import { LayersElm } from './Layers.js';
import { FillElm } from './Fill.js';
import { AboutElm } from './About.js';

const { div } = van.tags;

export const LayersAndFillElm = div({
  id: 'layersAndFill',
},
  LayersElm,
  FillElm,
  AboutElm,
);
