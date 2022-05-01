const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let res = Array.from(
    { length: str.length },
    (el, i) => str.substring(0, i) + str.substring(i + 1)
  ).reduce((acc, item) => (+item > acc ? +item : acc), 0);
  return res;
}

module.exports = {
  deleteDigit,
};
