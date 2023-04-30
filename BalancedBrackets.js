function isBalanced(input) {
  // Write your code here
  const param = input.toString();

  let brackets = "[]{}()<>";
  let stack = [];

  for (let i = 0; i < param.length; i++) {
    if (brackets.includes(param[i])) {
      let bracketsIndex = brackets.indexOf(param[i]);

      if (bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1);
      } else {
        if (stack.pop() !== bracketsIndex) {
          return "NO";
        }
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced(2 + 2));