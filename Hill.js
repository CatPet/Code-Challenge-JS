function hill(arr) {
  const newArr = [...arr];
  arr.sort();
  let max = 0;
  arr.map((ar, index) => {
    const value = Math.abs(ar - newArr[index]);
    max = max < value ? value : max; 
  })
  console.log(max);
}

hill([5, 4, 3, 2, 8]);
