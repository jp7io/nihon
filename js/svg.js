// @ts-check

export function createInlineSVG() {
  /** @type {NodeListOf<any>} */
  const icons = document.querySelectorAll('object.icon');
  icons.forEach(icon => {
    icon.addEventListener('load', () => {
      icon.parentNode?.replaceChild(icon.contentDocument.documentElement, icon);
    });
  });
}

export function loadPatterns() {
  /** @type {any} */
  const patterns_source = document.getElementById('patterns_source');
  const patterns_cloned = document.getElementById('patterns_cloned');

  patterns_cloned && (patterns_cloned.innerHTML = patterns_source?.contentDocument.querySelector('svg').innerHTML);

  /** @type {any} */
  const icons_source = document.getElementById('icons_source');
  const icons_cloned = document.getElementById('icons_cloned');

  icons_cloned && (icons_cloned.innerHTML = icons_source?.contentDocument.querySelector('svg').innerHTML);
}
