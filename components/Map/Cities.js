// @ts-check

import { state } from '../../js/state.js';
import { memoize } from '../../js/utils.js';
import van from '../../lib/van.js';

const { div } = van.tags;

const cities = () => {
  if (state.mapCitiesReady.val) {
    /** @type {NodeListOf<SVGGElement>} */
    const cities = document.querySelectorAll('#cities svg g[data-city=true]');
    cities.forEach(elm => elm.classList.toggle('active', state.city.val?.name.en === elm.dataset.name));
  }
}

const memoizedCities = memoize(() => div(
  {
    id: 'cities',
  },
));

export const CitiesElm = () => {
  cities();

  return memoizedCities();
};
