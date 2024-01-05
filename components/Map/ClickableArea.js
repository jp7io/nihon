// @ts-check

import { memoize } from '../../js/utils.js';
import van from '../../lib/van.js';

const { div } = van.tags;

const memoizedClickableArea = memoize(() => div(
  {
    id: 'clickableArea',
  },
));

export const ClickableAreaElm = () => {
  return memoizedClickableArea();
};
