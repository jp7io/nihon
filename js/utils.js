// @ts-check

export function replaceSpecialCharactersWithAscii(str) {
  return str.replace(/[ÀÁÂÃÄÅ]/g, 'A')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[ÈÉÊË]/g, 'E')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ÌÍÎÏ]/g, 'I')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[ÒÓÔÕÖŌ]/g, 'O')
    .replace(/[òóôõöō]/g, 'o')
    .replace(/[ÙÚÛÜŪ]/g, 'U')
    .replace(/[ùúûüū]/g, 'u')
    .replace(/[Ç]/g, 'C')
    .replace(/[ç]/g, 'c')
    .replace(/[Ñ]/g, 'N')
    .replace(/[ñ]/g, 'n');
}

export async function loadHTML(id, filename) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const response = await fetch(filename);
  const responseText = await response.text();

  if (responseText) {
    element.innerHTML = responseText;
  }
  else {
    element.innerHTML = "<h1>Page not found.</h1>";
  }
}

export function parseData(jsonData) {
  const dataArray = [['Prefecture', 'Index']];

  jsonData.forEach((region, index) => {
    region.prefectures.forEach(prefecture => {
      dataArray.push([replaceSpecialCharactersWithAscii(prefecture.name.en), index]);
    });
  });

  return dataArray;
}

export function parseDataForCities(jsonData) {
  const dataArray = [['City', 'isCapital']];

  jsonData.forEach((region) => {
    region.prefectures.forEach(prefecture => {
      prefecture.cities?.forEach(city => {
        dataArray.push([replaceSpecialCharactersWithAscii(city.ja), city.types.includes('regionCapital') ? 1 : 2]);
      })
    });
  });

  return dataArray;
}
