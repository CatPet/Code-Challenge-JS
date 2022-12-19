const uniqueValidNumber = (N, inputArray) => {
  let index = Array(256).fill(-1), result = 0;
  inputArray.map((number, idx) => {
    if (index[number] == -1) { index[number] = idx+1; result++; }
    else if (index[number] != -2) {
      if ((idx + 1) % index[number] != 0) { index[number] = -2; result--; }
      else index[number] = idx+1;
    }
  });
  console.log(result);
}

const inputArray = [1, 2, 1, 2, 2];
// const inputArray = [12, 38, 46, 22, 29, 12, 5, 2, 29, 15];
const N = 3;
uniqueValidNumber(N, inputArray);