function jump(n) {
  let res = [1, 2, 4];
  for (let i = 3; i < n; i++) {
    res.push(res[i - 1] + res[i - 2] + res[i - 3]);
  }
  console.log(res[n-1]);
}

jump(5);