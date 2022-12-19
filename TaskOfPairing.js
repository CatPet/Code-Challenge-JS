function taskOfPairing(freq) {
    // Write your code here
    let count = 0, mod = 0;
    freq.map(arr => {
        count += Math.floor((arr + mod) / 2);
        if (arr == 0) mod = 0;
        else mod = (arr + mod) % 2;
    })
    return count;
}