// @ts-check

import van from '../../lib/van.js';
import { CitiesElm } from './Cities.js';
import { PrefecturesElm } from './Prefectures.js';
import { RegionsElm } from './Regions.js';
import { ClickableAreaElm } from './ClickableArea.js';

const { div } = van.tags;

export const JapanElm = () => div(
  {
    id: 'japan',
  },
  () => RegionsElm(),
  () => PrefecturesElm(),
  () => CitiesElm(),
  () => ClickableAreaElm(),
);
