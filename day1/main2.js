const lines = require('./parse');
const sum = require('../common/sum');

function toNum(s) {
  switch (s) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;
    default:
      return Number(s);
  }
}

const values = lines.map(line => {
  const re = /\d|one|two|three|four|five|six|seven|eight|nine/g;
  const digits = [];
  let match;
  while (match = re.exec(line)) {
    digits.push(toNum(match[0]));
    if (isNaN(match[0])) 
      re.lastIndex = re.lastIndex - 1;
  }

  return (10 * digits[0]) + digits[digits.length - 1];
});

console.log(sum(values));