const lines = require('./parse');
const sum = require('../common/sum');
const overlaps = require('../common/overlaps');

const Sym = require('./Sym');
const Num = require('./Num');

const _nums = [];
const _syms = [];
const _parts = [];

function checkPartsCurrentLine(lineIndex) {
  const nums = _nums[lineIndex];
  const syms = _syms[lineIndex];

  // we assume we just parsed these numbers, so none are parts yet
  nums.forEach(n => {
    if (syms.some(s => s.index === n.index - 1 || s.index === n.endIndex + 1)) {
      n.isPart = true;
      _parts.push(n);
    }
  });
}

function checkPartsAcrossLines(lineIndexA, lineIndexB) {
  const numsA = _nums[lineIndexA];
  const symsA = _syms[lineIndexA];
  const numsB = _nums[lineIndexB];
  const symsB = _syms[lineIndexB];

  numsA.forEach(n => {
    if (!n.isPart && symsB.some(s => overlaps(s.index, s.index, n.index - 1, n.endIndex + 1))) {
      n.isPart = true;
      _parts.push(n);
    }
  });

  numsB.forEach(n => {
    if (!n.isPart && symsA.some(s => overlaps(s.index, s.index, n.index - 1, n.endIndex + 1))) {
      n.isPart = true;
      _parts.push(n);
    }
  });
}

lines.forEach((line, lineIndex) => {
  _nums.push([...line.matchAll(/\d+/g)].map(match => new Num(match)));
  _syms.push([...line.matchAll(/[^\d\.]/g)].map(match => new Sym(match)));

  checkPartsCurrentLine(lineIndex);
  if (lineIndex > 0) {
    checkPartsAcrossLines(lineIndex - 1, lineIndex);
  }
});

console.log(sum(_parts.map(p => p.num)));