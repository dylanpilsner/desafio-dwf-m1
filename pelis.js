const fs = require("fs");

function getAll() {
  const readPelisJson = fs.readFileSync(__dirname + "/pelis.json").toString();
  return JSON.parse(readPelisJson);
}

function searchBy(texto, arrayDePelis) {
  return arrayDePelis.filter(function (item) {
    return item.title.includes(texto);
  });
}

function sortBy(propiedad, arrayDePelis) {
  return arrayDePelis.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    } else {
      return -1;
    }
  });
}

function tagBy(texto, arrayDePelis) {
  return arrayDePelis.filter(function (item) {
    return item.tags.includes(texto);
  });
}

exports.searchByCriteria = function (criterio) {
  let tmp = getAll();

  if (criterio.search) {
    tmp = searchBy(criterio.search, tmp);
  }

  if (criterio.sort) {
    tmp = sortBy(criterio.sort, tmp);
  }

  if (criterio.tag) {
    tmp = tagBy(criterio.tag, tmp);
  }

  return tmp;
};
