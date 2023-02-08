function maxElement(n, maxSum, k) {
  // Write your code here
  let newN = n, newMaxSum = maxSum, newK = k;
  let result = Math.floor((maxSum + ((n - k) * (n - k) - n + k * k + 2 * k) / 2) / n);

  while (newK - result >= 0 || newK + result < newN) {
    const kk = newK, nn = newN;
    if(kk - result >= 0) {
      newMaxSum -= kk - result - 1;
      newN -= kk - result - 1;
      newK = result - 1;
    }
    if(kk + result < nn) {
      newMaxSum -= nn - kk - result;
      newN -= nn - kk - result;
    }
    result = Math.floor((newMaxSum + ((newN - newK) * (newN - newK) - newN + newK * newK + 2 * newK) / 2) / newN);
  }
  return result;

}

const arr = { n: 4, maxSum: 4, k: 3 };
console.log(maxElement(arr.n, arr.maxSum, arr.k));