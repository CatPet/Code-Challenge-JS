const input = "tres tres tres tres tres tres tres des des? minion minion.";
var regexPattern = /[^A-Za-z\s]/g;

const str = input.replace(regexPattern, "");
const arr = str.split(" ");
arr.sort();

let res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1] && arr[i] !== arr[i - 1]) res.push(arr[i]);
}
console.log(res);