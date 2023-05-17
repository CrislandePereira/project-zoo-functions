const data = require('../data/zoo_data');

const findEmployee = (id) => data.employees.filter((employee) => employee.id === id);

const getResponsibleFor = (id) => {
  const [employee] = findEmployee(id);
  const { responsibleFor } = employee;
  return responsibleFor;
};

const findSpecies = (idsAnimals) => {
  const findAnimals = [];
  idsAnimals.forEach((idAnimal) => {
    const [foundAnimal] = data.species.filter((specie) => specie.id === idAnimal);
    findAnimals.push(foundAnimal);
  });
  return findAnimals;
};

const getOlderResident = (animal) => {
  const { residents } = animal;
  const residentsSort = residents.sort((a, b) => b.age - a.age);
  const [firstAnimal] = residentsSort;
  return Object.values(firstAnimal);
};

const getOldestFromFirstSpecies = (id) => {
  const responsibleFor = getResponsibleFor(id);
  const [firstSpecie] = findSpecies(responsibleFor);
  return getOlderResident(firstSpecie);
};

module.exports = getOldestFromFirstSpecies;
