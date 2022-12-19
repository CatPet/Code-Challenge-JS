const myMaze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function mazeResult(maze, startRow, startCol, destRow, destCol) {
  let count = 1, pos = [{ row: startRow, col: startCol }];
  const rows = maze.length, cols = maze[0].length;
  if (maze[startRow][startCol] == 1 && maze[destRow][destCol] == 1) return "NO";
  maze[startRow][startCol] = 1;

  while (count) {
    const newPos = [];
    for (let i = 0; i < count; i++) {
      if (pos[i].row < rows - 1) {
        if (pos[i].row + 1 == destRow && pos[i].col == destCol) return "YES";
        if (maze[pos[i].row + 1][pos[i].col] == 0) {
          newPos.push({ row: pos[i].row + 1, col: pos[i].col });
          maze[pos[i].row + 1][pos[i].col] = 1;
        }
      };
      if (pos[i].row > 0) {
        if (pos[i].row - 1 == destRow && pos[i].col == destCol) return "YES";
        if (maze[pos[i].row - 1][pos[i].col] == 0) {
          newPos.push({ row: pos[i].row - 1, col: pos[i].col });
          maze[pos[i].row - 1][pos[i].col] = 1;
        }
      };
      if (pos[i].col < cols - 1) {
        if (pos[i].row == destRow && pos[i].col + 1 == destCol) return "YES";
        if (maze[pos[i].row][pos[i].col + 1] == 0) {
          newPos.push({ row: pos[i].row, col: pos[i].col + 1 });
          maze[pos[i].row][pos[i].col + 1] = 1
        }
      }
      if (pos[i].col > 0) {
        if (pos[i].row == destRow && pos[i].col - 1 == destCol) return "YES";
        if (maze[pos[i].row][pos[i].col - 1] == 0) {
          newPos.push({ row: pos[i].row, col: pos[i].col - 1 });
          maze[pos[i].row][pos[i].col - 1] = 1;
        }
      }
    }
    pos = newPos;
    count = pos.length;
  }
  return "NO";
}

function mazeMatrix(maze, startRow, startCol, destRow, destCol) {
  const result = mazeResult(maze, startRow, startCol, destRow, destCol);
  console.log(result);
}

mazeMatrix(myMaze, 0, 0, 3, 9);