module.exports = function parseNums(line) { return [...line.matchAll(/-?\d+/g)].map(match => Number(match)); }
