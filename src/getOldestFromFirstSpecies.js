const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeIdentification) {
  const employeeFromId = employees.find(({ id }) => (id === employeeIdentification));
  const firstAnimal = employeeFromId.responsibleFor[0];
  const firstAnimalinSpecies = species.find(({ id }) => id === firstAnimal);
  const oldestResident = firstAnimalinSpecies.residents.reduce((acc, currentValue) => {
    if (acc.age > currentValue.age) {
      return acc;
    } return currentValue;
  });
  const valuesOfOldestResident = Object.values(oldestResident);
  return valuesOfOldestResident;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
