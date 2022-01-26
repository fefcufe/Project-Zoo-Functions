const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const listOfSubordinates = employees.filter(({ managers }) => managers.includes(managerId));
    return listOfSubordinates.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
