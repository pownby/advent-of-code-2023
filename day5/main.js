const min = require('../common/min');
const types = require('./types');
const { seeds, maps } = require('./parse');

function translate(n, type) {
  const map = maps[type];
  if (!map) {
    return n;
  }
  return translate(map.translate(n), map.dest);
}

const locations = seeds.map(s => translate(s, types.seed));

console.log(min(locations));
