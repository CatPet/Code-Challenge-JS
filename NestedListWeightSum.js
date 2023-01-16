const nestedListWeightSum = (input) => {
  let sum = 0;
  let deep = 1;
  let arr = [...input];

  while (arr.length) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length) newArr.push(...arr[i]);
      else sum += arr[i] * deep;
    }
    deep++;
    arr = newArr;
  }
  return sum;
}

// const input = [8, 4, [5, [9], 3], 6];
const input = [4, [5, 6]];
console.log(nestedListWeightSum(input));