module.exports = function max(arr) {
  return arr.length ? arr.reduce((rollingMax, val) => Math.max(rollingMax, val)) : 0;
}