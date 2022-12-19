const percentBar = (str) => {
  const idx = str.lastIndexOf(str[0]);
  return Math.floor((idx + 1) / str.length * 100);
}

const str = "----------";
console.log(percentBar(str));