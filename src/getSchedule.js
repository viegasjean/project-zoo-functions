const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const days = Object.entries(hours);

const shedule = days.reduce((accShedule, day) => {
  const sheduleByDay = accShedule;
  const speciesByDay = species.reduce((acc, specie) => {
    if (specie.availability.includes(day[0])) acc.push(specie.name);
    return acc;
  }, []);
  if (day[0] === 'Monday') {
    sheduleByDay[day[0]] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return sheduleByDay;
  }
  sheduleByDay[day[0]] = {
    officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
    exhibition: speciesByDay,
  };
  return sheduleByDay;
}, {});

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return shedule;
  }
  if (Object.keys(shedule).includes(scheduleTarget)) {
    const result = { [scheduleTarget]: shedule[scheduleTarget] };
    return result;
  }
  const targetSpecie = species.find((specie) => specie.name === scheduleTarget);

  if (targetSpecie !== undefined) {
    return targetSpecie.availability;
  }

  return shedule;
}
console.log(getSchedule('lions'));

module.exports = getSchedule;
