const CustomError = require("../extensions/custom-error");

module.exports = function countCats (matrix) {
  let newMatrix = matrix.flat(); // была канкатенация. В Дискорте объяснили, что она тут не сработает. Флат нашла сама
  return newMatrix.filter(cats  => cats === "^^").length; // в дискорте указали на ошибку в записи фильтра. Ошибку исправила сама
}
