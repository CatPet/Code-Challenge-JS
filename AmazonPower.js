var res = 0, mod = 1.0e+9 + 7;
var n = power.length;
for (var i = 0; i < n; i++) {
    var min = power[i];
    var sum = power[i];
    res += min * sum % mod;
    for (var j = i + 1; j < n; j++) {
        min = power[j] < min ? power[j] : min;
        sum += power[j];
        res += min * sum % mod;
    }
}
console.log(res);
return res;