const { species, hours } = require('../data/zoo_data');

function getAnimalsOfDay(weekday) {
  const speciesOfDay = species.filter((objectSp) => objectSp.availability.includes(weekday));
  return speciesOfDay.reduce((acc, current) => {
    acc.push(current.name);
    return acc;
  }, []);
}

function generateBodySchedule(day) {
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' };
  }
  const bodySchedule = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: getAnimalsOfDay(day) };
  return bodySchedule;
}

function getSchedule(scheduleTarget) {
  const allAnimals = species.map((element) => `${element.name}`);
  if (allAnimals.includes(scheduleTarget)) {
    const scheduleForAnimal = species.filter((animal) => animal.name === scheduleTarget);
    return scheduleForAnimal[0].availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    const theWeekdaySchedule = generateBodySchedule(scheduleTarget);
    const responseWithDayParameter = { [scheduleTarget]: theWeekdaySchedule };
    return responseWithDayParameter;
  }
  const weekdays = Object.keys(hours);
  const weekdaysObject = weekdays.reduce((acc, curr) => {
    acc[curr] = generateBodySchedule(curr);
    return acc;
  }, {});
  return weekdaysObject;
}

console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
