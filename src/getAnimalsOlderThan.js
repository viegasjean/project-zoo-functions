const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = species.find((specie) => specie.name === animal);
  const residents = specie.residents;
  const residentsWithAgeUpThan = residents.every((res) => res.age >= age);
  return residentsWithAgeUpThan;
}

module.exports = getAnimalsOlderThan;
