const longestVowelSub = (input) => {
  let str = "";
  let result = "";
  let initVowel = "aeiou";
  let vowel = initVowel;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < str.slice(-1) || !initVowel.includes(input[i])) { str = ""; vowel = initVowel }
    str += input[i];
    if (vowel.includes(input[i])) vowel = vowel.slice(1);
    if (vowel.length === 0 && result.length < str.length) result = str;
  }

  return result.length;
}

const input = "abcdeaeiaaioaaaaeiiiiouuuzzzooaauuaeiu";
// const input = "aeixyzou";
console.log(longestVowelSub(input))