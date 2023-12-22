export function initZoom() {
  const elm = document.getElementById('map');
  elm.addEventListener('gesturestart', (e) => startZoom(e));
  elm.addEventListener('gesturechange', (e) => zoom(e));
  elm.addEventListener('gestureend', (e) => endZoom(e));
}

var isZooming = false;
var initialScale = 1;
var currentScale = 1;

function startZoom(event) {
  event.preventDefault();
  initialScale = currentScale;
  document.querySelector('#map').style.transform = `scale(${currentScale})`;
}

function zoom(event) {
  event.preventDefault();
  currentScale = initialScale * event.scale;
  document.querySelector('#map').style.transform = `scale(${currentScale})`;
}

function endZoom(event) {
  event.preventDefault();
}
