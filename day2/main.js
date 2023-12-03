const games = require('./parse');

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

let sum = 0;

games.forEach((draws, gameIndex) => {
  if (!draws.some(({ red = 0 , green = 0, blue = 0 }) => red > MAX_RED || green > MAX_GREEN || blue > MAX_BLUE)) {
    sum += gameIndex + 1;
  }
});

console.log(sum);