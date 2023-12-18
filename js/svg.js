// @ts-check

export function createInlineSVG() {
  /** @type {NodeListOf<any>} */
  const svgList = document.querySelectorAll('object.icon');
  svgList.forEach(svg => {
    svg.addEventListener('load', () => {
      svg.parentNode?.replaceChild(svg.contentDocument.documentElement, svg);
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

  /** @type {any} */
  const tokyo_source = document.getElementById('tokyo_source');
  const tokyo_cloned = document.getElementById('tokyo_cloned');

  tokyo_cloned && (tokyo_cloned.innerHTML = tokyo_source?.contentDocument.documentElement.innerHTML);
}
