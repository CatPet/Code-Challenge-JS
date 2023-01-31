const solution = (arr) => {
  // Type your solution here 
  let left = 0; right = 0, deep = 2, j = 0;
  if (arr.length < 2) return "";
  for (let i = 1; i < arr.length; i++) {
    if (j < deep / 2) left += arr[i];
    else right += arr[i];
    j++;
    if (j == deep) {
      deep *= 2;
      j = 0;
    }
  }
  if (left < right) return "Right";
  if (left > right) return "Left";
  return "";
};

const result = solution([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result);