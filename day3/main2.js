const lines = require('./parse');
const sum = require('../common/sum');
const overlaps = require('../common/overlaps');

const Sym = require('./Sym');
const Num = require('./Num');

const _nums = [];
const _syms = [];

function checkGearsCurrentLine(lineIndex) {
  const nums = _nums[lineIndex];
  const syms = _syms[lineIndex];

  syms.forEach(s => {
    s.overlaps.push(...nums.filter(n => s.index === n.index - 1 || s.index === n.endIndex + 1));
  });
}

function checkGearsAcrossLines(lineIndexA, lineIndexB) {
  const numsA = _nums[lineIndexA];
  const symsA = _syms[lineIndexA];
  const numsB = _nums[lineIndexB];
  const symsB = _syms[lineIndexB];

  symsA.forEach(s => {
    if (s.overlaps.length <= 3) { // we don't care about more than 3
      s.overlaps.push(...numsB.filter(n => overlaps(s.index, s.index, n.index - 1, n.endIndex + 1)));
    }
  });

  symsB.forEach(s => {
    if (s.overlaps.length <= 3) {
      s.overlaps.push(...numsA.filter(n => overlaps(s.index, s.index, n.index - 1, n.endIndex + 1)));
    }
  });
}

lines.forEach((line, lineIndex) => {
  _nums.push([...line.matchAll(/\d+/g)].map(match => new Num(match)));
  _syms.push([...line.matchAll(/[^\d\.]/g)].map(match => new Sym(match)));

  checkGearsCurrentLine(lineIndex);
  if (lineIndex > 0) {
    checkGearsAcrossLines(lineIndex - 1, lineIndex);
  }
});

console.log(sum(_syms.flat().map(s => s.gearRatio())));