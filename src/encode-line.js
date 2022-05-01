const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrayChars = [...str];
  const uniqueChars = [...new Set(arrayChars)];
  let tmpStr = str;
  function renameStr(char) {
    function replaceStr(match) {
      const countCharStr =
        match.length > 1 ? `${match.length}${match[0]}` : `${match[0]}`;
      return countCharStr;
    }
    tmpStr = tmpStr.replace(new RegExp(`${char}+`, "g"), replaceStr);
  }
  uniqueChars.forEach(renameStr);
  return tmpStr;
}

module.exports = {
  encodeLine,
};
