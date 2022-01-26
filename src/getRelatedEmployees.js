const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    // acessar cada [managers] de cada objeto em employee
    employees.managers.map((manager) => {
      if (manager === managerId) {
        return `${employees.firstName} ${employees.lastName}`;
      }
    });
  }
}

console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
