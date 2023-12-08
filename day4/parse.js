const readAllLines = require('../common/readAllLines');

const lines = readAllLines().map(l => l.split(': ')[1]);

function parseNums(line) { return [...line.matchAll(/-?\d+/g)].map(match => Number(match)); }
const sets = lines.map(line => line.split('|'));

module.exports = sets.map(set => set.map(nums => parseNums(nums.trim())));
