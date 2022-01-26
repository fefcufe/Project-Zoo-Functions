const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    const days = Object.keys(data.hours);
    const hourSchedule = {};
    days.forEach((day) => hourSchedule[day] = )
  }
}
console.log(getSchedule());
module.exports = getSchedule;
