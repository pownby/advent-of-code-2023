const cards = require('./parse');
const sum = require('../common/sum');

function getWinningNumbersCount(card) {
  const [winningNums, haveNums] = card;

  // naive approach, let's see how bad execution time is before we optimize
  return haveNums.filter(n => winningNums.includes(n)).length;
}

function getScore(count) {
  return count > 0 ? Math.pow(2, count - 1) : 0;
}

console.log(sum(cards.map(c => getScore(getWinningNumbersCount(c)))));