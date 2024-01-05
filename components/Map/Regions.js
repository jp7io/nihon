// @ts-check

import { memoize } from '../../js/utils.js';
import van from '../../lib/van.js';

const { div } = van.tags;

const memoizedRegions = memoize(() => div(
  {
    id: 'regions',
  },
));

export const RegionsElm = () => {
  return memoizedRegions();
};
