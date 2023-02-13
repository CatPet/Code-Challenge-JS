const ArrayCompare = (columnA, columnB) => {
  const sum = 5 * 11;
  const sumA = columnA.reduce((sum, a) => sum + a, 0);
  const sumB = columnB.reduce((sum, b) => sum + b, 0);
  return { PartA: sumB - sumA, PartB: sum - sumB };
}

const columnA = [1, 2, 3, 4, 5, 6, 9, 10];
const columnB = [1, 2, 3, 4, 5, 6, 7, 9, 10];

console.log(ArrayCompare(columnA, columnB));