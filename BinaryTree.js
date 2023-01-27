function BinaryTree(array) {
  while(array[array.length - 1] < 0) {
    array.pop()
  }
  let height = 0, n = array.length;
  console.log(array);
  while(n){
    n >>= 1;
    height ++;
  }
  console.log(height);
}

// BinaryTree([1, 2, 3, 4, -1, -1, -1]);
BinaryTree([1, -1, -1, -1]);