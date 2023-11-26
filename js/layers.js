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
      (types.includes('capital') && layers.includes('capital')) ||
      (types.includes('major') && layers.includes('major')) ||
      (types.includes('favorite') && layers.includes('favorite'))
    )) {
      city.style.visibility = 'visible';
    } else {
      city.style.visibility = 'hidden';
    }
  })

  /** @type {HTMLElement | null} */
  const prefectures = document.getElementById('prefectures');

  prefectures?.classList.toggle('active', layers.includes('prefectures'));
}
