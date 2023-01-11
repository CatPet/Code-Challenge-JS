const myMaze = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0]
]

function flowerPot(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] < 1) {
      matrix[0][j] = 1;
      let count = 1, pos = [{ row: 0, col: j }];
      while (count) {
        console.log(pos);
        const newPos = [];
        for (let i = 0; i < count; i++) {
          if (pos[i].row == rows - 1) return true;
          if (pos[i].row < rows - 1) {
            if (matrix[pos[i].row + 1][pos[i].col] == 0) {
              newPos.push({ row: pos[i].row + 1, col: pos[i].col });
              matrix[pos[i].row + 1][pos[i].col] = 1;
            }
          };
          if (pos[i].row > 0) {
            if (matrix[pos[i].row - 1][pos[i].col] == 0) {
              newPos.push({ row: pos[i].row - 1, col: pos[i].col });
              matrix[pos[i].row - 1][pos[i].col] = 1;
            }
          };
          if (pos[i].col < cols - 1) {
            if (matrix[pos[i].row][pos[i].col + 1] == 0) {
              newPos.push({ row: pos[i].row, col: pos[i].col + 1 });
              matrix[pos[i].row][pos[i].col + 1] = 1
            }
          }
          if (pos[i].col > 0) {
            if (matrix[pos[i].row][pos[i].col - 1] == 0) {
              newPos.push({ row: pos[i].row, col: pos[i].col - 1 });
              matrix[pos[i].row][pos[i].col - 1] = 1;
            }
          }
        }
        pos = newPos;
        count = pos.length;
      }
    }
  }
  return false;
}

function matrixPot(matrix) {
  const result = flowerPot(matrix);
  console.log(result);
}

matrixPot(myMaze);