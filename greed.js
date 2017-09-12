let statesNeeded = new Set(['mt', 'wa','or', 'id', 'nv', 'ut', 'ca', 'az']);

let stations = {
  kOne: new Set(['id', 'nv', 'ut']),
  kTwo: new Set(['wa', 'id', 'mt']),
  kThree: new Set(['or', 'nv', 'ca']),
  kFour: new Set(['nv', 'ut']),
  kFive: new Set(['ca', 'az'])
};

let finalStations = new Set();

let bestStation;
let statesCovered = new Set();

function getIntersection(a, b) {
  let result = new Set();
  for(let value of a) {
    if (b.has(value)) {
      result.add(value);
    }
  }
  return result;
}

for (station in stations) {
  let statesForStation = stations[station];
  let covered = getIntersection(statesNeeded, statesForStation);
  if (covered.size > statesCovered.size) {
    bestStation = station;
    statesCovered = covered;
  }

  for (let value of statesCovered) {
    statesNeeded.delete(value);
  }
  finalStations.add(bestStation);

  while (statesNeeded.size > 0) {
    bestStation = null;
    statesCovered = new Set();
    for (let station in stations) {
      covered = getIntersection(stations[station], statesNeeded);
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    for (let value of statesCovered) {
      statesNeeded.delete(value);
    }
    finalStations.add(bestStation);
  }
}

console.log(finalStations);
