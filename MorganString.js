function morganAndString(a, b) {
    // Write your code here
    let result = "";

    while (a.length > 0 && b.length > 0) {
        if (a < b) {
            result += a[0];
            a = a.slice(1);
        }
        else {
            result += b[0];
            b = b.slice(1);
        }
    }
    return result + a + b;
}
