// first unique Character

// function getUniqueCharacter(s) {
//     // Write your code here
//     for (let i = 0; i < s.length; i++) {

//         if (s.indexOf(s.charAt(i), s.indexOf(s.charAt(i)) + 1) == -1) {
//             return i + 1
//         }
//     }
//     return -1
// }

// ==========================================================================================

function getUniqueCharacter(s) {
  let result = [], count = 0, index = Array(256).fill(-1);

  for (let i = s.length - 1; i > -1; i--) {
    const iCode = s.charCodeAt(i);
    const idx = index[iCode];

    if (idx == -1) {
      result.push(i + 1);
      index[iCode] = count++;
    }
    if (idx >= 0) {
      result.splice(idx, 1);
      index[iCode] = -2;
      count--;
    }
  }
  return result.pop();
}

const s = "function";

console.log(getUniqueCharacter(s));