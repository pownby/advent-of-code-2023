module.exports = function sum(arr) {
  return arr.length ? arr.reduce((rollingSum, val) => rollingSum + val) : 0;
}