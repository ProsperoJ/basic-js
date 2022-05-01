const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (repeatTimes == undefined) repeatTimes = 1;
  if (separator == undefined) separator = "+";
  if (addition === undefined) addition = "";
  if (additionRepeatTimes == undefined) additionRepeatTimes = 1;
  if (additionSeparator == undefined) additionSeparator = "|";

  addition = String(addition);

  let add = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(addition);
  }

  let addSting = "";
  addSting = add.join(additionSeparator);

  let result = [];

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + addSting);
  }

  let resultStr = result.join(separator);

  return resultStr;
}

module.exports = {
  repeater,
};
