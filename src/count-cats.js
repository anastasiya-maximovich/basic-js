const CustomError = require("../extensions/custom-error");

module.exports = function countCats (matrix) {
  let newMatrix = matrix.concat();
  let newCats = newMatrix.filter(cats => '^^');
  return newCats.length;
}

