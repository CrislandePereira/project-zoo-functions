const data = require('../data/zoo_data');

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const getByDay = (scheduleTarget) => {
  const findAnimals = data.species.filter((x) => x.availability.includes(scheduleTarget));
  let nameFindAnimals = findAnimals.map((item) => item.name);
  const hours = data.hours[scheduleTarget];
  let textHour = `Open from ${hours.open}am until ${hours.close}pm`;
  if (scheduleTarget === 'Monday') {
    nameFindAnimals = 'The zoo will be closed!';
    textHour = 'CLOSED';
  }
  const result = {};
  result[scheduleTarget] = {
    officeHour: textHour,
    exhibition: nameFindAnimals,
  };
  return result;
};

const getAllDays = () => {
  const days = daysOfWeek.map((day) => getByDay(day));
  return Object.assign({}, ...days);
};

const getSchedule = (scheduleTarget) => {
  const isDay = daysOfWeek.filter((item) => item === scheduleTarget).length > 0;
  const [findAnimal] = data.species.filter((item) => item.name === scheduleTarget);
  if (!isDay && findAnimal) {
    const { availability } = findAnimal;
    return availability;
  }

  if (isDay) return getByDay(scheduleTarget);
  return getAllDays();
};

module.exports = getSchedule;
