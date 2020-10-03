
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) return [];
  let newMatrix = matrix.map((value, indexOfValue) => {
    if (indexOfValue % 2 !== 0) {
      return value.sort((a, b) => {
        return b - a;
      });
    } else {
      return value;
    }
  });
  return newMatrix.flat();
}
