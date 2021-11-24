const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (employe) =>
      employe.firstName.includes(employeeName)
      || employe.lastName.includes(employeeName),
  );
}

module.exports = getEmployeeByName;
