const lines = require('./parse');
const sum = require('../common/sum');

const values = lines.map(line => {
  const digits = [...line.matchAll(/\d/g)].map(n => Number(n));

  return (10 * digits[0]) + digits[digits.length - 1];
});

console.log(sum(values));