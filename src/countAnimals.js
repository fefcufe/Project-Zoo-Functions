const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    return species.find((specieObject) => specieObject.name === animal.specie).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const animalChoice = species.find((specieObject) => specieObject.name === animal.specie);
    return animalChoice.residents.filter((element) => element.sex === animal.sex).length;
  }
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
