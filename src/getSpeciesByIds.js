const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const findSpecie = data.species.filter(({ id }) => ids.includes(id));

  if (!ids) {
    return [];
  }

  return findSpecie;
};

module.exports = getSpeciesByIds;
