const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (Object.keys(date).length > 0) throw new Error("Invalid date!");
  if (Object.prototype.toString.call(date) == "[object Date]") {
    let result = date.getMonth();
    if (result == 11 || result == 0 || result == 1) return "winter";
    if (result >= 2 && result <= 4) return "spring";
    if (result >= 5 && result <= 7) return "summer";
    if (result >= 8 && result <= 10) return "autumn (fall)";
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
