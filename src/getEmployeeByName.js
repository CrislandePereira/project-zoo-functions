const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const [find] = data.employees.filter(({
    lastName, firstName }) => firstName === employeeName
    || lastName === employeeName);

  if (!employeeName) {
    return {};
  }
  return find;
};

module.exports = getEmployeeByName;
