const CustomError = require("../extensions/custom-error");

module.exports = function countCats (matrix) {
  let newMatrix = matrix.flat();
  return newMatrix.filter(cats  => cats === "^^").length;
}

