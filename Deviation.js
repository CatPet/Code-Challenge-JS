function deviation(arr, d) {
  let min = arr[0], max = arr[0], med = 0, pos = 1, posMin = 0, posMax = 0;
  while (pos < arr.length) {
    if (pos - posMax + 1 > d) {
      posMax++;
      max = arr[posMax];
      pos = posMax + 1;
    }
    if (pos - posMin + 1 > d) {
      posMin++;
      min = arr[posMin];
      pos = posMin + 1;
    }
    if (arr[pos] >= max) {
      max = arr[pos];
      posMax = pos;
      med = med <= max - min ? max - min : med;
    }
    if (arr[pos] <= min) {
      min = arr[pos];
      posMin = pos;
      med = med <= max - min ? max - min : med;
    }
    pos++;
  }
  console.log(med);
}

// deviation([6, 9, 4, 7, 4, 1], 3);
// deviation([2, 5, 3, 1, 4, 2, 3, 4, 9, 6, 20], 3);