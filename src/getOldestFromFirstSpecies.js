const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeWithId = employees.find((employe) => employe.id === id); // Encontra o empregado com a id
  const firstSpecie = species.find(
    (specie) => specie.id === employeWithId.responsibleFor[0],
  ); // Encontra a primeira id da especie que o empregado é responsavel
  firstSpecie.residents.sort((a, b) => (a.age < b.age ? 1 : -1)); // Ordena os residents pela idade, do maior para o menor
  const oldestResident = Object.values(firstSpecie.residents[0]); // armazena os values do resident mais velho que agora está na primeira posição
  return oldestResident;
}

module.exports = getOldestFromFirstSpecies;
