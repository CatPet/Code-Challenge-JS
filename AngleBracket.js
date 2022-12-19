const solution = (angles) => {
  let count = 0, result = "";
  for (let i = 0; i < angles.length; i++) {

    result += angles[i];
    if (angles[i] == '>')
      if (count) {
        count--;
      }
      else result = '<' + result
    else count++
  }
  for (let i = 0; i < count; i++)
    result += '>';
  return result;
}

const angles = "><<><";
console.log(solution(angles));