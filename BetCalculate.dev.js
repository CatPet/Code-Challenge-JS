"use strict";

function longMultiply(num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  if (len1 == 0 || len2 == 0) return "0";
  var result = new Array(len1 + len2).fill(0);
  var i_n1 = 0;
  var i_n2 = 0;

  for (var i = len1 - 1; i > -1; i--) {
    var carry = 0;
    var n1 = num1[i].charCodeAt(0) - 48;
    i_n2 = 0;

    for (var j = len2 - 1; j > -1; j--) {
      var n2 = num2[j].charCodeAt(0) - 48;
      var summ = n1 * n2 + result[i_n1 + i_n2] + carry;
      carry = Math.floor(summ / 10);
      result[i_n1 + i_n2] = summ % 10;
      i_n2 += 1;
    }

    if (carry > 0) result[i_n1 + i_n2] += carry;
    i_n1 += 1;
  }

  i = result.length - 1;

  while (i >= 0 && result[i] == 0) {
    i -= 1;
  }

  if (i == -1) return "0";
  var s = "";

  while (i >= 0) {
    s += String.fromCharCode(result[i] + 48);
    i -= 1;
  }

  return s;
}

var longSubtract = function longSubtract(num1, num2) {
  var result = "";
  var n1 = num1,
      n2 = num2;
  var len1 = n1.length,
      len2 = n2.length;

  if (n1 < n2 && len1 == len2 || len1 < len2) {
    result = "-";
    var n = n1;
    n1 = n2;
    n2 = n;
    var len = len1;
    len1 = len2;
    len2 = len;
    return "error";
  }

  var carry = 0,
      res = "";

  for (var i = 0; i < len1; i++) {
    var n2_item = len2 - i - 1 < 0 ? "0" : n2[len2 - i - 1];
    var subtract = n1[len1 - i - 1] - n2_item - carry;

    if (subtract < 0) {
      subtract += 10;
      carry = 1;
    } else carry = 0;

    res = subtract + res;
  }

  while (res[0] == '0' && res.length > 1) {
    res = res.slice(1);
  }

  return result + res;
};

function longDivision(number, divisor) {
  var remain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var result = "";
  var idx = divisor.length;
  if (number.length == 0 || number == "0") return "0";
  number += "0".repeat(remain);
  if (number.length < divisor.length || number < divisor && number.length == divisor.length) return "0";
  var temp = number.slice(0, idx);

  if (temp < divisor) {
    temp += number[idx];
    idx++;
  }

  while (number.length > idx) {
    var _ans = 0;

    while (temp >= divisor && temp.length == divisor.length || temp.length > divisor.length) {
      temp = longSubtract(temp, divisor);
      _ans++;
    }

    result += _ans;
    temp = temp == '0' ? number[idx] : temp + number[idx];
    idx++;
  }

  var ans = 0;

  while (temp >= divisor && temp.length == divisor.length || temp.length > divisor.length) {
    temp = longSubtract(temp, divisor);
    ans++;
  }

  result += ans;
  if (result.length == 0) result = "0";

  if (remain > 0) {
    if (result.length <= remain) result = "0." + "0".repeat(remain - result.length) + result;else result = result.slice(0, -remain) + "." + result.slice(-remain);
  }

  return result;
}

var factorial = function factorial(number) {
  var result = "1";
  if (number == 0) return result;

  for (var i = 1; i <= number; i++) {
    result = longMultiply(result, i + "");
  }

  return result;
};

var combination = function combination(k, n) {
  var divisor = longMultiply(factorial(k), factorial(n - k));
  var number = factorial(n);
  return longDivision(number, divisor);
};

var permutation = function permutation(k, n) {
  var number = factorial(n);
  var divisor = factorial(n - k);
  return longDivision(number, divisor);
};

var winner = function winner(k, n, m) {
  var select = combination(k, n);
  var all = permutation(n - k - 1, m - k + 1);
  return longMultiply(select, all);
};

var empty = function empty(k, n, m) {
  var select = combination(k, n);
  var all = permutation(n - k - 1, m + 1);
  return longMultiply(select + "", all);
};

var betCalculate = function betCalculate(bet, n) {
  var all = permutation(n * n - 1, bet + 1);
  var win = winner(3, n * n, bet);
  var emp = empty(3, n * n, bet);
  var remainWin = all.length - win.length + 1;
  var remainEmp = all.length - emp.length + 1;
  console.log(longDivision(win, all, remainWin));
  console.log(longDivision(emp, all, remainEmp));
};

var result = betCalculate(511, 16);