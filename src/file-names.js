const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const tmpNames = [...names];
  const uniqueNames = [...new Set(tmpNames)];
  for (let i = 0; i < uniqueNames.length; i++) {
    let numberFile = 0;
    for (let a = 0; a < tmpNames.length; a++) {
      if (tmpNames[a] === uniqueNames[i]) {
        if (numberFile === 0) {
          tmpNames[a] = uniqueNames[i];
        } else {
          tmpNames[a] = `${uniqueNames[i]}(${numberFile})`;
        }
        numberFile++;
      }
    }
  }
  return tmpNames;
}

module.exports = {
  renameFiles,
};
