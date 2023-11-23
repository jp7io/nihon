// @ts-check

export function initLayers() {
  /** @type {NodeListOf<HTMLElement>} */
  const layers = document.querySelectorAll('#layersSet input[type="checkbox"]');

  layers.forEach(layer => layer.onchange = handleLayers)
};

function handleLayers(e) {
  const layers = Array.from(e.target.form.layers).filter(item => item.checked).map(item => item.value)

  /** @type {NodeListOf<HTMLElement>} */
  const cities = document.querySelectorAll('#cities svg text');

  cities.forEach(city => {
    const dataTypes = city.getAttribute('data-type');
    const types = dataTypes && dataTypes.split(' ');

    if (types && (
      (types.includes('regionCapital') && layers.includes('regionCapital')) ||
      (types.includes('major') && layers.includes('major')) ||
      (types.includes('favorite') && layers.includes('favorite'))
    )) {
      city.style.visibility = 'visible';
    } else {
      city.style.visibility = 'hidden';
    }
  })

  /** @type {NodeListOf<HTMLElement>} */
  const prefectures = document.querySelectorAll('#prefectures svg text');

  prefectures.forEach(prefecture => {
    prefecture.style.visibility = layers.includes('prefectures') ? 'visible' : 'hidden';
  })
}
