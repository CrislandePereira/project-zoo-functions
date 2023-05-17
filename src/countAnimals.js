const data = require('../data/zoo_data');

const compareName = (a, b) => {
  const name1 = a.name.toUpperCase();
  const name2 = b.name.toUpperCase();

  let comparison = 0;

  if (name1 > name2) {
    comparison = 1;
  } else if (name1 < name2) {
    comparison = -1;
  }
  return comparison;
};

const countAnimals = (animal = {}) => {
  const { species } = data;
  const speciesSorted = species.sort(compareName);
  const allAnimals = speciesSorted.map((item) => {
    const objAnimal = {};
    let { residents } = item;

    if (animal.sex) {
      residents = residents.filter((resident) => resident.sex === animal.sex);
    }

    objAnimal[item.name] = residents.length;
    return objAnimal;
  }).sort();
  const objAnimal = Object.assign({}, ...allAnimals);
  if (animal.species) {
    return objAnimal[animal.species];
  }
  return objAnimal;
};

module.exports = countAnimals;
