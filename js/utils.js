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
  /** @type {Array<Array<string | number>>} */
  const dataArray = [['City', 'isFavorite']];
  let index = 0;

  jsonData.forEach((region) => {
    region.prefectures.forEach(prefecture => {
      prefecture.cities?.forEach((city) => {
        const labels = [];
        if (city.types.includes('regionCapital')) {
          labels.push('★');
        };
        if (city.types.includes('major')) {
          labels.push('◼️');
        };
        if (labels.length === 0) {
          labels.push('⏺');
        }
        labels.push(city.ja.join(''));

        if (index % 2 === 0) {
          labels.reverse()
        };

        const favorite = city.types.includes('favorite') ? 1 : 2;

        dataArray.push([labels.join(' '), favorite]);

        index++;
      })
    });
  });

  return dataArray;
}
