const minChange = (inputString) => {
  console.log(inputString);
  let count = 0, result = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] == '(') count++;
    else if (count > 0) count--;
    else {result++; count ++;}
  }
  console.log(result);
}

const inputString = ")))()))()(";
minChange(inputString);