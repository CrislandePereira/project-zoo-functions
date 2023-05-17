const data = require('../data/zoo_data');

const findEmployee = (info) => data.employees
  .filter((item) =>
    item.id === info.id
    || item.firstName === info.name
    || item.lastName === info.name);

const getResponsibleFor = (info) => {
  const [employee] = findEmployee(info);
  if (!employee) throw new Error('Informações inválidas');
  const { responsibleFor } = employee;
  return responsibleFor;
};

const findSpecies = (idsAnimals) => {
  const findAnimals = [];
  const locations = [];
  idsAnimals.forEach((idAnimal) => {
    const [foundAnimal] = data.species.filter((specie) => specie.id === idAnimal);
    findAnimals.push(foundAnimal.name);
    locations.push(foundAnimal.location);
  });
  return { findAnimals, locations };
};

const getEmployeesCoverageByPerson = (info) => {
  const responsibleFor = getResponsibleFor(info);
  const foundSpecie = findSpecies(responsibleFor);

  const [person] = findEmployee(info);
  const infos = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: foundSpecie.findAnimals,
    locations: foundSpecie.locations,
  };
  return infos;
};

const getEmployeesCoverageAll = () => {
  const ids = data.employees.map((item) => item.id);
  const employees = [];
  ids.forEach((id) => {
    const employee = getEmployeesCoverageByPerson({ id });
    employees.push(employee);
  });
  return employees;
};

const getEmployeesCoverage = (info) => {
  if (info) {
    return getEmployeesCoverageByPerson(info);
  }
  return getEmployeesCoverageAll();
};

module.exports = getEmployeesCoverage;
