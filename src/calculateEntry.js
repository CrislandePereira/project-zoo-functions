const data = require('../data/zoo_data');

const countEntrants = (entrants = []) => {
  if (entrants.length > 0) {
    const child = entrants.filter((person) => person.age < 18).length;
    const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
    const senior = entrants.filter((person) => person.age >= 50).length;

    const visits = {
      adult,
      child,
      senior,
    };
    return visits;
  }
  return 0;
};

const calculateEntry = (entrants = []) => {
  if (entrants.length > 0) {
    const visitors = countEntrants(entrants);
    const { child, adult, senior } = visitors;
    const total = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
    return total;
  }
  return countEntrants(entrants);
};

module.exports = { calculateEntry, countEntrants };
