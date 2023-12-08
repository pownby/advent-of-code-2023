const cards = require('./parse');
const sum = require('../common/sum');

const cardMap = cards.reduce((map, [win, have], index) => Object.assign(map, { [index + 1]: { count: 1, win, have } }), {});

function getWinningNumbersCount(card) {
  const { win, have } = card;

  // naive approach, let's see how bad execution time is before we optimize
  return have.filter(n => win.includes(n)).length;
}

for (let i = 1; i < cards.length + 1; i++) {
  const card = cardMap[i];
  const winningCount = getWinningNumbersCount(card);
  for (let j = i + 1; j < i + winningCount + 1; j++) {
    cardMap[j].count += card.count;
  }
}

console.log(sum(Object.values(cardMap).map(c => c.count)));