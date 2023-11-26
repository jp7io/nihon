// @ts-check

/** @type {google.visualization.GeoChartOptions} */
const commonOptions = {
  region: 'JP',
  resolution: 'provinces',
  legend: 'none',
  tooltip: {
    trigger: 'none'
  }
}

export function drawRegions(data, colors) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'regions',
    colorAxis: { colors: colors.map(item => item.color) },
  };

  const regionsElm = document.getElementById('regions');
  if (!regionsElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(regionsElm);

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

export function drawCities(data) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'text',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    colorAxis: { colors: ['brown', 'black'] },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const citiesElm = document.getElementById('cities');
  if (!citiesElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(citiesElm);

  google.visualization.events.addListener(chart, 'ready', (e) => {
    const cities = document.querySelectorAll('#cities svg text');
    cities.forEach((city, index) => {
      city.setAttribute('text-anchor', index % 2 === 0 ? 'end' : 'start');
      const types = [];

      if (city.innerHTML.includes('★')) {
        types.push('capital');
      };
      if (city.innerHTML.includes('◼️')) {
        types.push('major');
      };
      if (city.getAttribute('fill') === '#a52a2a') {
        types.push('favorite');
      }

      city.setAttribute('data-type', types.join(' '));
    })
    const citiesDiv = document.getElementById('cities');
    if (citiesDiv) {
      citiesDiv.style.visibility = 'visible';
    }
  });

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}

export function drawPrefectures(data) {
  /** @type {google.visualization.GeoChartOptions} */
  const options = {
    ...commonOptions,
    displayMode: 'text',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    colorAxis: { colors: ['black', 'black'] },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const prefecturesElm = document.getElementById('prefectures');
  if (!prefecturesElm) {
    return;
  }
  const chart = new google.visualization.GeoChart(prefecturesElm);

  const dataTable = google.visualization.arrayToDataTable(data);

  chart.draw(dataTable, options);
}
