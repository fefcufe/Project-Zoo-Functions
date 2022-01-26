const { species } = require('../data/zoo_data');

function countAnimals(animal = 'none') {
  if (animal === 'none') {
    species.map(({name, popularity}) => {[name] : popularity});
  }
}

module.exports = countAnimals;
