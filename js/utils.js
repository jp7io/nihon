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
    region.prefectures.forEach(({ name }) => {
      dataArray.push([replaceSpecialCharactersWithAscii(name.en), index]);
    });
  });

  return dataArray;
}

export function parseDataForPrefectures(jsonData) {
  const dataArray = [['Lat', 'Lng', 'Prefecture', 'Index']];

  jsonData.forEach((region) => {
    region.prefectures.forEach(({ name, location }, index) => {
      dataArray.push([location.lat, location.lng, name.ja.join(''), index]);
    })
  });

  return dataArray;
}

export function parseDataForCities(jsonData) {
  /** @type {Array<Array<string | number>>} */
  const dataArray = [['Lat', 'Lng', 'City', 'isFavorite']];
  let index = 0;

  jsonData.forEach((region) => {
    region.prefectures.forEach(prefecture => {
      prefecture.cities?.forEach(({ types, name, location }) => {
        const labels = [];
        if (types.includes('regionCapital')) {
          labels.push('★');
        };
        if (types.includes('major')) {
          labels.push('◼️');
        };
        if (labels.length === 0) {
          labels.push('⏺');
        }
        labels.push(name.ja.join(''));

        if (index % 2 === 0) {
          labels.reverse()
        };

        const favorite = types.includes('favorite') ? 1 : 2;

        dataArray.push([location.lat, location.lng, labels.join(' '), favorite]);

        index++;
      })
    });
  });

  return dataArray;
}
