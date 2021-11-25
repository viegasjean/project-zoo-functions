const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const animalSpecie = species.find((specie) => animal.specie === specie.name);
  const { residents } = animalSpecie;
  const animalSex = residents.filter((resident) => resident.sex === animal.sex);
  if (animal.specie && animal.sex) {
    return animalSex.length;
  }
  if (animal.specie) {
    return animalSpecie.residents.length;
  }
}

module.exports = countAnimals;
