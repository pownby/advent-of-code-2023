module.exports = function min(arr) {
  return arr.length ? arr.reduce((rollingMin, val) => Math.min(rollingMin, val)) : 0;
}