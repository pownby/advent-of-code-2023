const product = require('../common/product');

class Sym {
  constructor(match) {
    this.sym = match[0];
    this.index = match.index;
    this.overlaps = [];
  }

  isGear() {
    return this.overlaps.length === 2 && this.sym === '*';
  }

  gearRatio() {
    return this.isGear() ? product(this.overlaps.map(n => n.num)) : 0;
  }

  toString() {
    return `${this.sym}: ${this.overlaps.map(n => `${n}`)}`
  }
}

module.exports = Sym;