const games = require('./parse');
const sum = require('../common/sum');

const BASE = { red: 0, green: 0, blue: 0 };

const minCounts = games.map(draws => draws.reduce((res, draw) => {
  const { red = 0 , green = 0, blue = 0 } = draw;
  return { red: Math.max(red, res.red), green: Math.max(green, res.green), blue: Math.max(blue, res.blue) };
}, BASE));

const powers = minCounts.map(({ red = 0 , green = 0, blue = 0 }) => red * green * blue);

console.log(sum(powers));
