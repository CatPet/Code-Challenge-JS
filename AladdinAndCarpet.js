const optimalPoint = (magic, dist) => {
  let s = 0, r = 0, d = 0;

  for (let i = 0; i < magic.length; i++) {
    r += magic[i] - dist[i];
    if (r < 0) {
      s = i + 1;
      d += r;
      r = 0;
    }
  }
  return d + r >= 0 ? s : -1;
}

const magic = [2, 4, 5, 2];
const dist = [4, 3, 1, 3];

console.log(optimalPoint(magic, dist));