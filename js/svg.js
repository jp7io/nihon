// @ts-check

export function createInlineSVG(e, target) {
  /** @type {HTMLElement | null} */
  const targetElm = document.getElementById(target);
  targetElm && (targetElm.innerHTML = e.target.contentDocument.documentElement.innerHTML);
}
