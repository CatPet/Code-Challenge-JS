function longMultiply(num1, num2) {
  let sign = "";
  const count1 = num1.split('-').length - 1;
  const count2 = num2.split('-').length - 1;
  const number1 = num1.replace(/-/g, '');
  const number2 = num2.replace(/-/g, '');
  if ((count1 + count2) % 2) {
    sign = "-";
  }

  let len1 = number1.length;
  let len2 = number2.length;
  if (len1 == 0 || len2 == 0) return "0";

  let res = new Array(len1 + len2).fill(0);

  let i_n1 = 0;
  let i_n2 = 0;

  for (var i = len1 - 1; i > -1; i--) {
    let carry = 0;
    let n1 = (number1[i]).charCodeAt(0) - 48;
    i_n2 = 0;

    for (var j = len2 - 1; j > -1; j--) {
      let n2 = (number2[j]).charCodeAt(0) - 48;
      let summ = n1 * n2 + res[i_n1 + i_n2] + carry;
      carry = Math.floor(summ / 10);
      res[i_n1 + i_n2] = summ % 10;
      i_n2 += 1;
    }

    if (carry > 0) res[i_n1 + i_n2] += carry;
    i_n1 += 1;

  }
  i = res.length - 1
  while (i >= 0 && res[i] == 0) i -= 1

  if (i == -1) return "0"

  let result = ""
  while (i >= 0) {
    result += String.fromCharCode(res[i] + 48)
    i -= 1
  }

  return sign + result;
}

const longSubtract = (num1, num2) => {
  let sign = "";
  let n1 = num1, n2 = num2;
  let len1 = n1.length, len2 = n2.length;
  if (n1 < n2 && len1 == len2 || len1 < len2) {
    sign = "-";
    let n = n1; n1 = n2; n2 = n;
    let len = len1; len1 = len2; len2 = len;
  }
  let carry = 0, result = "";

  for (let i = 0; i < len1; i++) {
    const n2_item = len2 - i - 1 < 0 ? "0" : n2[len2 - i - 1];
    let subtract = n1[len1 - i - 1] - n2_item - carry;
    if (subtract < 0) {
      subtract += 10
      carry = 1;
    }
    else carry = 0;
    result = subtract + result;
  }
  while (result[0] == '0' && result.length > 1) {
    result = result.slice(1);
  }
  return sign + result;
}

const longSum = (num1, num2) => {
  let sign = "";
  const count1 = num1.split('-').length - 1;
  const count2 = num2.split('-').length - 1;
  const number1 = num1.replace(/-/g, '');
  const number2 = num2.replace(/-/g, '');
  if ((count1 + count2) % 2) {
    if (count1 % 2) {
      return longSubtract(number2, number1);
    } else {
      return longSubtract(number1, number2);
    }
  } else {
    if (count1 % 2) {
      sign = '-';
    }
  }
  let len1 = number1.length, len2 = number2.length;
  let carry = 0, result = "";
  const len = len1 > len2 ? len1 : len2;

  for (let i = 1; i <= len; i++) {
    const n1 = len1 - i < 0 ? 0 : number1[len1 - i] - '0';
    const n2 = len2 - i < 0 ? 0 : number2[len2 - i] - '0';
    let subSum = n1 + n2 + carry;
    if (subSum > 9) {
      subSum -= 10
      carry = 1;
    }
    else carry = 0;
    result = subSum + result;
  }

  if (carry) result = 1 + result;

  return sign + result;
}

function longDivision(number, divisor, remain = 0) {
  let result = "";
  let idx = divisor.length;
  if (number.length == 0 || number == "0") return "0";
  number += "0".repeat(remain);
  if (number.length < divisor.length || number < divisor && number.length == divisor.length) return "0";
  let temp = number.slice(0, idx);
  if (temp < divisor) {
    temp += number[idx];
    idx++;
  }

  while (number.length > idx) {
    let ans = 0;
    while (temp >= divisor && temp.length == divisor.length || temp.length > divisor.length) {
      temp = longSubtract(temp, divisor);
      ans++;
    }
    result += ans;

    temp = temp == '0' ? number[idx] : temp + number[idx];
    idx++;
  }

  let ans = 0;
  while (temp >= divisor && temp.length == divisor.length || temp.length > divisor.length) {
    temp = longSubtract(temp, divisor);
    ans++;
  }
  result += ans;

  if (result.length == 0) result = "0";
  if (remain > 0) {
    if (result.length <= remain) result = "0." + "0".repeat(remain - result.length) + result;
    else result = result.slice(0, -remain) + "." + result.slice(-remain);
  }
  return result;
}

const longPower = (number, exp) => {
  let result = "1";
  if (exp == 0) return result;
  for (let i = 0; i < exp; i++) {
    result = longMultiply(result, number + "");
  }
  return result;
}

const factorial = (number) => {
  let result = "1";
  if (number == 0) return result;
  for (let i = 1; i <= number; i++) {
    result = longMultiply(result, i + "");
  }
  return result;
}

const combination = (n, k) => {
  const divisor = longMultiply(factorial(k), factorial(n - k));
  const number = factorial(n);
  return longDivision(number, divisor);
}

const permutation = (k, n) => {
  const number = factorial(n);
  const divisor = factorial(n - k);
  return longDivision(number, divisor);
}

const events = (k, n, bet) => {
  if (k > n || bet < k) return "0";
  const select = longMultiply(permutation(k, bet), combination(n, k));
  const all = longPower(n - k, bet - k);
  const result = longMultiply(select, all);
  return result;
}

const winner = (k, n, bet) => {
  let result = "0", index = ["1"], sign = "";
  for (let i = k; i <= n; i++) {
    console.log(k, i);
    const event = events(i, n, bet);
    result = longSum(result, longMultiply(event, sign + index[i - k]));
    let sumIdx = "1", signIdx = "-";
    for (let j = k; j <= i; j++) {
      const idx = longMultiply(combination(i + 1, j), index[j - k]);
      sumIdx = longSum(sumIdx, signIdx + idx);
      signIdx = signIdx == '' ? '-' : '';
    }
    index.push(sumIdx.replace('-', ''));
    sign = sign == '' ? '-' : '';
  }
  return result;
}

const empty = (k, n, bet) => {
  if (k == n - 1) return n + "";
  const select = combination(n, k);
  const all = longPower(n - k, bet);
  const except = empty(k + 1, n, bet);
  return longSum(longMultiply(select, all), "-" + except);
}

const betCalculate = (bet, n, from, to) => {
  const all = longPower(n, bet);

  for (let i = from; i <= to; i += 10) {
    const win = winner(i, n, bet);
    const remainWin = all.length - win.length + 3;
    console.log("Winner = ", i, " : ", longDivision(win, all, remainWin));
  }
  console.log("=====================================================");

  const emp = empty(1, n, bet);
  const remainEmp = all.length - emp.length + 3;
  console.log("Empty : ", longDivision(emp, all, remainEmp));
}

// betCalculate(1500, 256, 1, 5);
// betCalculate(5, 3);
// betCalculate(4, 4);
betCalculate(2000, 256, 1, 1);