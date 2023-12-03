const fs = require('fs');

function readAllLines(fileName = 'input.txt') {
  const input = fs.readFileSync(fileName, 'utf8');
  return input.trim().split(/\n/);
}

module.exports = Object.assign(readAllLines, { EXAMPLE_NAME: 'example.txt' });