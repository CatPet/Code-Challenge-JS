function ConsecutiveDecreasing(numbers) {
  let sum = 0, seqSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) return -1;
    seqSum += numbers[i];
    sum = sum < seqSum ? seqSum : sum;
    if (numbers[i] != numbers[i + 1] + 1) seqSum = 0;
  }
  return sum;
}

const result = ConsecutiveDecreasing([9, 5, 12, 6, 5, 4, 1]);

console.log(result);