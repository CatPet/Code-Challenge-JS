const bcgame = (num) => {
  let x = [10];
  for (let i = 1; i < num; i++) {
    const sum = x.reduce((acc, val) => acc + val);
    x.push(sum + (i + 1) * x[0]);
  }
  console.log(x);
}

/*
const bcgame = (num) => {
  let x = [1];
  for (let i = 1; i < num; i++) {
    const sum = x.reduce((acc, val) => acc + val);
    x.push(sum + x[i - 1]);
  }
  console.log(x);
}
*/

bcgame(20);