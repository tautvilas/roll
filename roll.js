function rollCheck(config, check) {
  return roll(config) < check;
}

function roll(config) {
  const pattern = /(\d+)?d(\d+)/;
  const match = pattern.exec(config);
  if (!match) {
    console.error('Incorrect roll configuration');
  } else {
    const [pattern, numDice, numFaces] = match;
    return rollDices(numDice || 1, numFaces);
  }
}

function rollDices(numDice, numFaces) {
  let result = 0;
  for (let i = 0; i < numDice; i++) {
    result += rollDice(numFaces);
  }
  return result;
}

function rollDice(numFaces) {
  return randomRange(1, numFaces);
}

function randomRange(from, to) {
  if (to <= from) {
    console.error('Can not calculate random range where to <= from');
  } else if (to < 0 || from < 0) {
    console.error('Can not calculate random range for negative inputs');
  } else {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

module.exports.roll = roll;
module.exports.rollCheck = rollCheck;
module.exports.rollDices = rollDices;
module.exports = {
  roll,
  rollCheck,
  rollDices,
  rollDice
}

