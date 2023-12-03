const readAllLines = require('../common/readAllLines');

const lines = readAllLines();

function parseDraws(draws) {
  return draws.split(', ').reduce((res, draw) => {
    const [n, color] = draw.split(' ');
    return Object.assign(res, { [color]: Number(n) });
  }, {});
}

module.exports = lines.map(line => line.split(': ')[1].split('; ').map(parseDraws));