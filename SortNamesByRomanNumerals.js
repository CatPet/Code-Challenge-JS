function getSortedList(names) {
  const namesObj = names.reduce((sum, curr) => {
      const currentSum = sum;
      const [name, order] = curr.split(' ');
      if (!currentSum[name]) {
          currentSum[name] = [];
      }
      currentSum[name].push(curr);
      currentSum[name] = sortByRomanNumerals(currentSum[name]);
      return currentSum;
  }, {});
  
  const sortedNames = Object.keys(namesObj);
  sortedNames.sort((a, b) => {
      if(a < b) { return -1; }
      if(a > b) { return 1; }
      return 0;
  });
  return sortedNames.map((o) => namesObj[o]).reduce((sum, ar) => {
      return sum.concat(ar);
  }, [])
}

function sortByRomanNumerals(array) {
  const romanNumeralsOrderForReplace = [
      'xl',
      'l',
      'xxx',
      'xx',
      'ix',
      'x',
      'iv',
      'v',
      'iii',
      'ii',
      'i',
  ];
  const romanNumeralsMap = {
      i: 1,
      ii: 2,
      iii: 3,
      iv: 4,
      v: 5,
      ix: 9,
      x: 10,
      xx: 20,
      xxx: 30,
      xl: 40,
      l: 50,
  };
  const arr = array.map((a) => {
      const [name, number] = a.split(' ');
      const obj = {
          fullName: a,
          name,
          romanNumber: number,
      };
      let tempNumber = number.toLowerCase();
      romanNumeralsOrderForReplace.forEach((num) => {
          tempNumber = tempNumber.replace(num, `${romanNumeralsMap[num]},`);
      });
      const tempNumberArray = tempNumber.split(',');
      const newNumber = tempNumberArray.reduce((s, c) => {
          return s + (parseInt(c) ? parseInt(c) : 0);
      }, 0)
      obj.number = newNumber;
      return obj;
  }).sort((a, b) => a.number - b.number);
  
  return arr.map((obj) => obj.fullName);
}