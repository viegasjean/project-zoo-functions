const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');
function getSchedule(scheduleTarget) {
  const days = Object.entries(hours)
  result = {}
  days.forEach( day => {
    speciesExibition = []
    species.forEach(specie => {
      if (specie.availability.includes(day[0])){
        speciesExibition.push(specie.name)
      }
    })

    if(day[1].open === 0){
      result[day[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!'
      };
    } else {
      result[day[0]] = {
        officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
        exhibition: speciesExibition
      };
    }
  })
  console.log(result[scheduleTarget])
  return result
}
getSchedule('Monday')

module.exports = getSchedule;
