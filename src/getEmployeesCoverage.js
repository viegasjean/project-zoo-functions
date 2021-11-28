const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allEmployees = [];
let result = { id: '', fullName: '', species: [], locations: [] };

function createEmployeesCouverage() {
  employees.forEach((employe) => {
    result = { id: '', fullName: '', species: [], locations: [] };
    result.id = employe.id;
    result.fullName = `${employe.firstName} ${employe.lastName}`;
    employe.responsibleFor.forEach((responsibility) => {
      result.species.push(species.find((specie) => specie.id === responsibility).name);
      result.locations.push(species.find((specie) => specie.id === responsibility).location);
    });
    allEmployees.push(result);
  });
}
createEmployeesCouverage();

function getEmployeesCoverage(options) {
  if (!options) {
    return allEmployees;
  }
  const filtered = allEmployees.find(
    (employe) =>
      employe.id === options.id || employe.fullName.includes(options.name),
  );
  if (filtered) return filtered;
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
