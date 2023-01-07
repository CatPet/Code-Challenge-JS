function maximumDifference(arr) {
  let result = 0;
  const n = arr.length;
  if (n == 0) return result;
  if (n == 1) return Math.abs(arr[0]);
  let leftMin = [];
  let leftMax = [];
  let rightMin = [];
  let rightMax = [];

  arr.map(ar => {
    leftMin.push(ar);
    leftMax.push(ar);
    rightMin.push(ar);
    rightMax.push(ar);
  });

  let leftSubMin = arr[0], leftSubMax = arr[0], leftPlus = 0, leftMinus = 0, leftMinMinus = 0, leftMaxPlus = 0;
  let rightSubMin = arr[n - 1], rightSubMax = arr[n - 1], rightPlus = 0, rightMinus = 0, rightMinMinus = 0, rightMaxPlus = 0;

  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > 0) {
      leftPlus += arr[i];
      leftMaxPlus += arr[i];
      if (leftSubMax <= leftMaxPlus && leftMinus + leftSubMax < 0) {
        leftSubMax = leftMaxPlus;
        leftMinus = 0;
      } else if (0 <= leftMinus + leftMaxPlus) {
        leftSubMax += leftMinus + leftMaxPlus;
        leftMinus = 0;
        leftMaxPlus = 0;
      }
    }
    if (arr[i] < 0) {
      leftMinus += arr[i];
      leftMinMinus += arr[i];
      if (leftSubMin >= leftMinMinus && leftPlus + leftSubMin > 0) {
        leftSubMin = leftMinMinus;
        leftPlus = 0;
      } else if (0 >= leftPlus + leftMinMinus) {
        leftSubMin += leftPlus + leftMinMinus;
        leftPlus = 0;
        leftMinMinus = 0;
      }
    }

    leftMin[i] = leftMin[i] < leftSubMin ? leftMin[i] : leftSubMin;
    leftMax[i] = leftMax[i] > leftSubMax ? leftMax[i] : leftSubMax;
    leftMinMinus = 0;
    leftSubMin = leftMin[i];
    leftMaxPlus = 0;
    leftSubMax = leftMax[i];

    if (arr[n - 1 - i] > 0) {
      rightPlus += arr[n - 1 - i];
      rightMaxPlus += arr[n - 1 - i];
      if (rightSubMax <= rightMaxPlus && rightMinus + rightSubMax < 0) {
        rightSubMax = rightMaxPlus;
        rightMinus = 0;
      } else if (0 <= rightMinus + rightMaxPlus) {
        rightSubMax += rightMinus + rightMaxPlus;
        rightMinus = 0;
        rightMaxPlus = 0;
      }
    }
    if (arr[n - 1 - i] < 0) {
      rightMinus += arr[n - 1 - i];
      rightMinMinus += arr[n - 1 - i];
      if (rightSubMin >= rightMinMinus && rightPlus + rightSubMin > 0) {
        rightSubMin = rightMinMinus;
        rightPlus = 0;
      } else if (0 >= rightPlus + rightMinMinus) {
        rightSubMin += rightPlus + rightMinMinus;
        rightPlus = 0;
        rightMinMinus = 0;
      }
    }

    rightMin[n - 1 - i] = rightMin[n - 1 - i] < rightSubMin ? rightMin[n - 1 - i] : rightSubMin;
    rightMax[n - 1 - i] = rightMax[n - 1 - i] > rightSubMax ? rightMax[n - 1 - i] : rightSubMax;
    rightMinMinus = 0;
    rightSubMin = rightMin[n - 1 - i];
    rightMaxPlus = 0;
    rightSubMax = rightMax[n - 1 - i];
  }

  console.log(leftMin);
  console.log(leftMax);
  console.log(rightMin);
  console.log(rightMax);

  for (let i = 0; i < n - 1; i++) {
    const left = Math.abs(leftMax[i] - rightMin[i + 1]);
    const right = Math.abs(leftMin[i] - rightMax[i + 1]);
    result = result < left ? left : result;
    result = result < right ? right : result;
  }
  return result;
}

// const arr = [22, 1, 2, 11, 4, 2, 8];
// const arr = [-3, -5, 1, -2, 8, -8, 6, -5];
const arr = [3, -5, 1, -2, 8, -2, 3, -2, 1];

const result = maximumDifference(arr);
console.log(result);