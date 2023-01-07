function power(x, n, mod) {
  let result = 1;
  while (n > 1) {
    if (n % 2) result = result * x % mod;
    x = x * x % mod;
    n = Math.floor(n / 2);
  }
  return result * x % mod;
}

function risingPower(arr) {
  const mod = 1.0e+9 + 7;
  let max = 0, idx = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const pow = power(arr[i], arr[i + 1], mod);
    if (i > 2000) console.log(arr[i], arr[i + 1], pow)
    if (max < pow) {
      max = pow;
      idx = i + 1;
    }
  }
  console.log(idx);
}

// risingPower([3, 5, 4, 5, 2, 10]);
risingPower([2, 3, 1.0e+9 + 7]);