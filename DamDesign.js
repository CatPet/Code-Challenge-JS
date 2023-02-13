// Dam Design

function maxHeight(wallPositions, wallHeights) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < wallPositions.length - 1; i++) {
    const pos = wallPositions[i + 1] - wallPositions[i];
    const height = Math.abs(wallHeights[i + 1] - wallHeights[i]);
    let newResult = 0;

    if (pos > 1) {
      if (height > pos) {
        newResult = wallHeights[i + 1] > wallHeights[i] ? wallHeights[i] + pos - 1 : wallHeights[i + 1] + pos - 1;
      }
      else if (height == pos) {
        newResult = wallHeights[i + 1] > wallHeights[i] ? wallHeights[i + 1] - 1 : wallHeights[i] - 1;
      }
      else newResult = Math.floor((wallHeights[i] + wallHeights[i + 1] + pos) / 2);
    }
    result = result < newResult ? newResult : result;
  }
  return result;
}

// ==============================================================================================
