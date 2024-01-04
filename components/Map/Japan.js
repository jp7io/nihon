
import { memoize } from '../../js/utils.js';
import van from '../../lib/van.js';
import { CitiesElm } from './Cities.js';
import { PrefecturesElm } from './Prefectures.js';

const { div } = van.tags;

export const JapanElm = div(
  {
    id: 'japan',
  },
  div({ id: 'regions' }),
  PrefecturesElm,
  CitiesElm,
  div({ id: 'clickableArea' }),
);
