const solution = (prices) => {
  // Type your solution here
  let profit = 0;
  if (prices.length == 0) return profit;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    min = min <= prices[i] ? min : prices[i];
    profit = profit < prices[i] - min ? prices[i] - min : profit;
  }
  return profit;
};