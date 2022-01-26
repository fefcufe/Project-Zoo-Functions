const { species } = require('../data/zoo_data');

function countAnimals(animal = 'none') {
  if (animal === 'none') {
    const thisAnimal = {};
    return species.map(({ name, popularity }) => (thisAnimal[name] = popularity));
  }
}
console.log(countAnimals());
module.exports = countAnimals;
