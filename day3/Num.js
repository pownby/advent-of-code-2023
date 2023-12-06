class Num {
  constructor(match) {
    this.num = Number(match[0]);
    this.index = match.index;
    this.endIndex = match.index + match[0].length - 1;
  }

  toString() {
    return this.num;
  }
}

module.exports = Num;