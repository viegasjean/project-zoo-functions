const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const classified = entrants.reduce(
    (acc, entrant) => {
      if (entrant.age < 18) {
        acc.child += 1;
      }
      if (entrant.age >= 18 && entrant.age < 50) {
        acc.adult += 1;
      }
      if (entrant.age >= 50) {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
  return classified;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrant = countEntrants(entrants);
  return entrant.child * prices.child
            + entrant.adult * prices.adult
            + entrant.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
