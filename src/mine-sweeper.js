const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkMatrix(x, y) {
    if (x < matrix[0].length && x >= 0 && y < matrix.length && y >= 0) {
      return matrix[y][x];
    }
    return false;
  }
  const tmpMatrix = [];
  for (let y = 0; y < matrix.length; y++) {
    const tmpArr = [];
    for (let x = 0; x < matrix[y].length; x++) {
      let countMines = 0;
      if (checkMatrix(x + 1, y)) countMines++;
      if (checkMatrix(x - 1, y)) countMines++;
      if (checkMatrix(x + 1, y + 1)) countMines++;
      if (checkMatrix(x + 1, y - 1)) countMines++;
      if (checkMatrix(x - 1, y + 1)) countMines++;
      if (checkMatrix(x, y - 1)) countMines++;
      if (checkMatrix(x, y + 1)) countMines++;
      if (checkMatrix(x - 1, y - 1)) countMines++;
      tmpArr.push(countMines);
    }
    tmpMatrix.push(tmpArr);
  }
  return tmpMatrix;
}

module.exports = {
  minesweeper,
};
