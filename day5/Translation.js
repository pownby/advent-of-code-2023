const overlapsRange = require('../common/overlaps');

function overlaps(n, to, from) {
  return overlapsRange(n, n, to, from);
}

module.exports = class Translation {
  constructor([to, from, range]) {
    this.toStart = to;
    this.fromStart = from;
    this.range = range;

    this.toEnd = to + range - 1;
    this.fromEnd = from + range - 1;
  }

  translate(n) {
    if (overlaps(n, this.fromStart, this.fromEnd)) {
      const delta = n - this.fromStart;
      return this.toStart + delta;
    }
    return null;
  }
}