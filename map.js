function drawRegionsMap() {
  createSvgPatterns(colors);

  const data = google.visualization.arrayToDataTable(parseData(regions));

  const regionsColors = colors.splice(0, 8);

  const options = {
    region: 'JP',
    displayMode: 'regions',
    resolution: 'provinces',
    legend: 'none',
    colorAxis: { colors: regionsColors.map(item => item.color) },
    tooltip: {
      trigger: 'none'
    }
  };

  const chart = new google.visualization.GeoChart(document.getElementById('regions'));
  chart.draw(data, options);

  setTimeout(() => {
    populateLegend(regionsColors);
  }, 1000);
}

function drawCities() {

  const data = google.visualization.arrayToDataTable(parseDataForCities(regions));

  const options = {
    region: 'JP',
    displayMode: 'text',
    resolution: 'provinces',
    legend: 'none',
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    backgroundColor: 'transparent',
    colorAxis: { colors: ['brown', 'black'] },
    sizeAxis: { minValue: 0, maxValue: 0 },
  };

  const chart = new google.visualization.GeoChart(document.getElementById('cities'));
  chart.draw(data, options);
}