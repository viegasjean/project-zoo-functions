const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui

  return employees.some(employe => employe.managers.includes(id))

}

function getRelatedEmployees(managerId) {
  // seu código aqui
  /* const managedEmployees =  employees.filter(employe => {
    return employe.managers.includes(managerId)
  }) */
  if (!isManager(managerId)){
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees =  employees.reduce((accManagedEmployees, employe) => {
    if (employe.managers.includes(managerId)){
      accManagedEmployees.push(`${employe.firstName} ${employe.lastName}`)
    }
    return accManagedEmployees
  }, [])

  return managedEmployees
}

module.exports = { isManager, getRelatedEmployees };
