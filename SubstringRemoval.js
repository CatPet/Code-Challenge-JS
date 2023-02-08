let seq = "BAAAABBBBBAAAA";
let count = 0, bb = 0;
for (let i = seq.length - 1; i > -1; i--) {
    if (seq[i] == 'A') {
        if (bb > 0) bb--;
        else count++;
    }
    else {
        bb++;
    }
}
count += bb % 2;
console.log(seq);
console.log(count);