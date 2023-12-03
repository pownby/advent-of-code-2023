module.exports = function sum(arr) {
  return arr.reduce((rollingSum, val) => rollingSum + val);
}