// @ts-check

export function initLayers() {
  /** @type {NodeListOf<HTMLElement>} */
  const layers = document.querySelectorAll('#layersSet .item');
  layers.forEach(layer => layer.onclick = (e) => handleLayers(e))
};

function handleLayers(e) {
  /** @type {NodeListOf<HTMLElement>} */
  const activeItems = document.querySelectorAll('#layersSet .item.active')
  const layers = Array.from(activeItems).map(item => item.dataset.layer);

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


  const items = document.querySelectorAll('#layersSet .item');
  items.forEach(item => item.classList.remove('active'))

  e.currentTarget.classList.add('active');

}
