/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
*Your choice how to handle values over 359999 (99:59:59)*
*/

function humanReadable(seconds: number) {
  const HH = Math.floor(seconds / 3600);
  const MM = Math.floor(seconds / 60) % 60;
  const SS = seconds % 60;
  return `${HH} : ${MM} : ${SS}`
}

const humanReadableTime = humanReadable(359999);
console.log(humanReadableTime);

/*
The function below allows user to pass a string or number for 2 different values.
The signature for this function is currently broken and allows the user to mix the submission
so they can send a string & and number combined which should not be allowed / throw an error.
Please update the function to only function when 2 strings or 2 integers are passed in
*/

const f = (a: string | number, b: string | number) => {
  if (typeof a !== typeof b) {
    return "should be error";
  } else if (typeof a === 'string' || typeof b === 'string') {
    return a + ':' + b;
  } else {
    return a + b;
  }
}

console.log(f(2, 3)); // 5
console.log(f(1, 'a')); // should be error
console.log(f('a', 2)); // should be error
console.log(f('a', 'b')); // 'a:b'