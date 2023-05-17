const data = require('../data/zoo_data');

const findLocation = (options) => {
  const location = data.species.filter((item) => item.location === options);
  if (!options) return data.species;
  return location;
};

const groupLocal = (localCustom) => {
  const group = localCustom.reduce((acc, localvalue) => {
    const customGroup = acc;
    const { location, name } = localvalue;
    customGroup[location] = customGroup[location] ? customGroup[location] : [];
    customGroup[location].push(name);
    return customGroup;
  }, {});
  return group;
};

const filterResidentsBySex = (residents, sex) => {
  const justnames = [];
  residents.forEach((item) => {
    if (item.sex === sex) {
      justnames.push(item.name);
    }
  });
  return justnames;
};

const sortResidents = (residents) => residents.sort((a, b) => {
  if (a < b) { return -1; }
  if (a > b) { return 1; }
  return 0;
});

const residentsJustName = (residents, sorted, sex) => {
  let residentsCustom = residents;
  if (sex) {
    residentsCustom = filterResidentsBySex(residents, sex);
  } else residentsCustom = residents.map((item) => item.name);

  if (sorted) residentsCustom = sortResidents(residentsCustom);
  return residentsCustom;
};

const groupLocalWithResidents = (localCustom, sorted = false, sex = null) => {
  const group = localCustom.reduce((acc, localvalue) => {
    const customGroup = acc;
    const { location, name, residents } = localvalue;
    customGroup[location] = customGroup[location] ? customGroup[location] : [];
    const customProp = {};
    customProp[name] = residentsJustName(residents, sorted, sex);
    customGroup[location].push(customProp);
    return customGroup;
  }, {});
  return group;
};

const findAnimalsWithoutFilter = () => {
  const local = findLocation();
  const localCustom = local.map((item) => ({
    name: item.name,
    location: item.location,
  }));
  return groupLocal(localCustom);
};

const findAnimalsByNameAndSorted = (sorted, sex) => {
  const local = findLocation();
  const localCustom = local.map((item) => ({
    name: item.name,
    location: item.location,
    residents: item.residents,
  }));
  return groupLocalWithResidents(localCustom, sorted, sex);
};

const findAnimalsNames = (options) => {
  if (!options) {
    return findAnimalsWithoutFilter();
  }

  if (options.includeNames) {
    return findAnimalsByNameAndSorted(options.sorted, options.sex);
  }

  return findAnimalsWithoutFilter();
};

const getAnimalMap = (options) => findAnimalsNames(options);

module.exports = getAnimalMap;
