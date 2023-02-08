function longestSubstring(s) {
  let len = 0, startPos = 0, index = Array(256).fill(-1);
  
  for (let i = 0; i < s.length; i++) {
    const idx = index[s.charCodeAt(i)];
    index[s.charCodeAt(i)] = i;
    if (idx > -1) {
      startPos = startPos < idx + 1 ? idx + 1: startPos;
    }
    console.log(i, startPos, i - startPos + 1);
    len = len < i - startPos + 1 ? i - startPos + 1 : len;
  }
  console.log(len);
}

longestSubstring("nndNfdfdf");
// longestSubstring("aaa");
