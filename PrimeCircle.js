// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function findPrimeCircles(n) {
//   let numbers = Array.from({ length: n }, (_, i) => i + 1);
//   let circle = [];
//   let visited = new Set();
//   let count = 0;
//   function backtrack() {
//     if (circle.length === n) {
//       // Check if the sum of the first and last numbers is prime
//       if (isPrime(circle[0] + circle[n - 1])) {
//         count ++;
//       }
//       return;
//     }

//     for (let i = 0; i < n; i++) {
//       let nextNumber = numbers[i];
//       if (!visited.has(nextNumber)) {
//         if (circle.length === 0 || isPrime(circle[circle.length - 1] + nextNumber)) {
//           circle.push(nextNumber);
//           visited.add(nextNumber);
//           backtrack();
//           visited.delete(nextNumber);
//           circle.pop();
//         }
//       }
//     }
//   }

//   backtrack();
//   return count;
// }

// // Example usage: find all prime circles for n = 4
// console.log(findPrimeCircles(4));

const getPrimes = (n) => {
  const primeTable = [false, false];
  for (let i = 2; i <= n; i++) {
    primeTable.push(true);
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeTable[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeTable[j] = false;
      }
    }
  }
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (primeTable[i]) {
      primes.push(i);
    }
  }
  return primes;
}

const primeCircleList = (n) => {
  const primeLists = getPrimes(2 * n - 1);
  let circle = [];

  const generateList = () => {
    for (let i = 1; i <= n; i++) {

    }
  }

  generateList();
}

const result = primeCircleList(6);
console.log(result);