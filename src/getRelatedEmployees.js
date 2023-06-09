const data = require('../data/zoo_data');

const isManager = (id) => {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

  return managers.filter((idmanager) => idmanager === id).length > 0;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const names = data.employees.filter((element) => {
      const isRelatedEmployee = element.managers.filter((id) => id === managerId).length > 0;
      if (isRelatedEmployee) {
        return true;
      }
      return false;
    }).map((employee) => `${employee.firstName} ${employee.lastName}`);
    return names;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
