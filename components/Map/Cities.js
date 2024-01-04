// @ts-check

import { state } from '../../js/state.js';
import van from '../../lib/van.js';

const { div } = van.tags;

const cities = () => {
  if (state.mapCitiesReady.val) {
    const cities = document.querySelectorAll('#cities svg g[data-city=true]');
    cities.forEach(elm => elm.classList.remove('active'));
    if (state.city.val) {
      const cityElm = document.querySelector(`#cities svg g[data-name="${state.city.val.name.en}"]`);
      cityElm?.classList.add('active');
    }
  }
}

export const CitiesElm = () => {
  cities();

  return div(
    {
      id: 'cities',
    }
  );
};
