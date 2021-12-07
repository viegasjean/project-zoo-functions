const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filterAndSort(options, specie) {
  let residentsName = [];
  if (options && options.sex) { // Verifica se a o objeto com a chave sex é passado como parametro da função
    residentsName = specie.residents
      .filter((resident) => resident.sex === options.sex) // Filtra pelo sexo
      .map((resident) => resident.name); // Mapeia somente o nome
  } else {
    residentsName = specie.residents.map((resident) => resident.name); // Mapeia somente o nome
  }

  // Verifica se o objeto com a chave sort é passado como parametro da função e ordena os nomes
  if (options && options.sorted) residentsName.sort();

  return { [specie.name]: residentsName };
}

function getAnimalMap(options) {
  return species.reduce((speciesByLocation, specie) => {
    const result = filterAndSort(options, specie);
    if (options && options.includeNames) { // Verifica se o objeto com a chave includeNames é passado como parametro
      speciesByLocation[specie.location].push(result); // inclui nomes
    } else {
      speciesByLocation[specie.location].push(...Object.keys(result)); // não inclui nomes
    }

    return speciesByLocation;
  }, { NE: [], NW: [], SE: [], SW: [] }); // inicia o objeto com as chaves e inicia um array como parametro
}

module.exports = getAnimalMap;
