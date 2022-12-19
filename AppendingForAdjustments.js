const appendingForAdjustments = (N, inputArray) => {
  let sum = 0, i;
  
  for (i = 0; i < N; i++) {
    sum += inputArray[i];
  }
  console.log(sum);
  if (sum < N) {
    inputArray.push(N - sum + 1);
  }
  else {
    for (i = 0; i < sum - N; i++) {
      inputArray.push(0);
    }
  }
  console.log(inputArray);
}

// const inputArray = [1, -2, -3];
const inputArray = [1, 1];
const N = 2;
appendingForAdjustments(N, inputArray);