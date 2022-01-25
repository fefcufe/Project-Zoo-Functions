const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, givenAge) {
  const selectedAnimal = species.find(({ name }) => name === animal);
  selectedAnimal.residents.every(({ age }) => age >= givenAge);
}

module.exports = getAnimalsOlderThan;
