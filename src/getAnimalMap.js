/* const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filterSortedAndSex(sorted, specie, sex) {
  if (sorted) {
    specie.residents.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}

function filterIncludeNames(options, specie, result, speciesByLocation) {
  const { sex, includeNames, sorted } = options;
  if (includeNames) {
    filterSortedAndSex(sorted, specie, sex);

    specie.residents.forEach((resident) => {
      result[specie.name].push(resident.name);
    });

    speciesByLocation[specie.location].push(result);
  }
  if (!includeNames || !options) speciesByLocation[specie.location].push(specie.name);
}

function getAnimalMap(options) {
  const speciesByLocation = {};
  species.forEach((specie) => {
    if (!speciesByLocation[specie.location]) speciesByLocation[specie.location] = []; // cria uma localização, senão existir
    const result = {};
    result[specie.name] = [];
    if (!options) return speciesByLocation[specie.location].push(specie.name);
    filterIncludeNames(options, specie, result, speciesByLocation);
  });
  return speciesByLocation;
}

module.exports = getAnimalMap;
 */
