const readAllLines = require('../common/readAllLines');
const parseNums = require('../common/parseNums');
const Mapp = require('./Mapp');

// const lines = readAllLines(readAllLines.EXAMPLE_NAME);
const lines = readAllLines();

const seeds = parseNums(lines[0]);
const maps = {};

function* buffer() {
  yield* lines;
}

let currMap;
const iterator = buffer();

let next = iterator.next();
next = iterator.next(); // skip first line

while (!next.done) {
  let { value: line } = next;

  if (line === '') {
    next = iterator.next();
    const [source, dest] = next.value.match(/.+(?= map:)/g)[0].split('-to-');
    currMap = new Mapp(source, dest);
    maps[source] = currMap;
  } else {
    currMap.add(parseNums(line));
  }

  next = iterator.next();
}

 module.exports = { seeds, maps };