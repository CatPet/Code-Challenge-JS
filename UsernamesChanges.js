const possibleChanges = (usernames) => {
  const ans = [];
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i].length <= 1) ans.push("NO");
    console.log(usernames[i], ans);
    let res = "NO";
    for (let j = 0; j < usernames[i].length - 1; j++) {
      if (usernames[i][j] > usernames[i][j + 1]) {
        res = "YES";
        break;
      }
    }
    ans.push(res);
  }
  return ans;
}

const usernames = ["foo", "bar", "baz"];
console.log(possibleChanges(usernames));