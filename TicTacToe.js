'use strict';

/**
 * Your final solution should be implemented in the function below
 * @param {Array.<string>} input - An array containing the challenge inputs
 */

function solution(input) {
  const boards = input.map(str => {
    const [sizeStr, ...rows] = str.split(' ');
    const size = sizeStr.split('x').map(num => parseInt(num));
    return { size, rows };
  });

  let xWins = 0;
  let oWins = 0;
  let invalidCount = 0;

  boards.forEach(board => {
    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < board.size[0]; i++) {
      for (let j = 0; j < board.size[1]; j++) {
        if (board.rows[i][j] === 'x') {
          xCount++;
        } else if (board.rows[i][j] === 'o') {
          oCount++;
        }
      }
    }

    if (Math.abs(xCount - oCount) > 1 || (checkWin('x', board.rows, board.size) && checkWin('o', board.rows, board.size))) {
      invalidCount++;
    } else if (checkWin('x', board.rows, board.size)) {
      xWins++;
    } else if (checkWin('o', board.rows, board.size)) {
      oWins++;
    }
  })

  return `x: ${xWins} o: ${oWins} invalid: ${invalidCount}`;
}

function checkWin(player, rows, size) {
  for (let i = 0; i < size[0]; i++) {
    let win = true;
    for (let j = 0; j < size[1]; j++) {
      if (rows[i][j] !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return true;
    }
  }

  for (let j = 0; j < size[1]; j++) {
    let win = true;
    for (let i = 0; i < size[0]; i++) {
      if (rows[i][j] !== player) {
        win = false;
        break;
      }
    }
    if (win) {
      return true;
    }
  }

  let win = true;
  for (let i = 0; i < Math.min(size[0], size[1]); i++) {
    if (rows[i][i] !== player) {
      win = false;
      break;
    }
  }
  if (win) {
    return true;
  }

  win = true;
  for (let i = 0, j = size[1] - 1; i < size[0] && j >= 0; i++, j--) {
    if (rows[i][j] !== player) {
      win = false;
      break;
    }
  }
  if (win) {
    return true;
  }

  return false;
}

/////////////////////// Ignore the code below //////////////////////////////////
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.trim().split('\n');

  main();
});

function main() {
  console.log(solution(inputString));
}
