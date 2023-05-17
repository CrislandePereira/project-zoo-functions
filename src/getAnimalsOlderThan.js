/* eslint-disable no-undef */
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = data.species.find(({ name }) => animal.includes(name));

  const resident = findAnimal.residents;
  return resident.every((animalAge) => animalAge.age >= age);
};

module.exports = getAnimalsOlderThan;
