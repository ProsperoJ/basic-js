const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((domain) => domain.split(".").reverse());
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!obj[`.${arr[i][j]}`]) {
        const name = `.${arr[i].slice(0, j + 1).join(".")}`;
        const filterArray = arr.filter(
          (array) => `.${array.join(".")}`.indexOf(name) !== -1
        );
        obj[name] = filterArray.length;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
