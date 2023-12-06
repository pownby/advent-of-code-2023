module.exports = function product(arr) {
  return arr.length ? arr.reduce((rollingSum, val) => rollingSum * val) : 1;
}