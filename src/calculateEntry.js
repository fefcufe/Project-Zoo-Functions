const data = require('../data/zoo_data');

const example = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const listOfChilds = entrants.filter(({ age }) => age < 18);
  const listOfAdults = entrants.filter(({ age }) => age >= 18 && age < 50);
  const listOfSeniors = entrants.filter(({ age }) => age >= 50);
  const finalCountEntrants = {
    child: listOfChilds.length,
    adult: listOfAdults.length,
    senior: listOfSeniors.length,
  };
  return finalCountEntrants;
}

function calculateEntry(entrants = 'none') {
  if (entrants === 'none' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChilds = (countEntrants(entrants).child) * 20.99;
  const priceAdults = (countEntrants(entrants).adult) * 49.99;
  const priceSeniors = (countEntrants(entrants).senior) * 24.99;
  return priceAdults + priceChilds + priceSeniors;
}
console.log(countEntrants(example));
console.log(calculateEntry(example));
module.exports = { calculateEntry, countEntrants };
