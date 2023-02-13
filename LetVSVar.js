// let i = 0;
// for (i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }
// for (let k = 0; k < 3; k++) {
//   setTimeout(() => console.log(k), 2000);
// }
// for (var j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 2000);
// }

let j = 0
{
  var i = j;
  j++;
  setTimeout(() => console.log(i), 2000);
}
{
  console.log(i);
  var i = j;
  j++;
  setTimeout(() => console.log(i), 2000);
}
{
  var i = j;
  j++;
  setTimeout(() => console.log(i), 2000);
}