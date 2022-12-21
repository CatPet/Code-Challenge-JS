const PrisonEscape = (h, v) => {
  const horizon = h.sort((a, b) => a - b);
  const vertical = v.sort((a, b) => a - b);

  let hMax = h.length ? 2 : 1, hNew = 2;
  for (let i = 1; i < h.length; i++) {
    hNew = horizon[i] - horizon[i - 1] < 2 ? hNew + 1 : 2;
    hMax = hMax < hNew ? hNew : hMax;
  }

  let vMax = v.length ? 2 : 1, vNew = 2;
  for (let i = 1; i < v.length; i++) {
    vNew = vertical[i] - vertical[i - 1] < 2 ? vNew + 1 : 2;
    vMax = vMax < vNew ? vNew : vMax;
  }

  return vMax * hMax;
}

console.log(PrisonEscape([1, 2, 3], [1, 2]));