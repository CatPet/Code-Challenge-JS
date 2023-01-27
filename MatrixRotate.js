const mat = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function position(pos, m, n, k) {
    if (pos < n) return { row: k, col: pos + k };
    if (pos < n + m) return { row: pos - n + k, col: n + k };
    if (pos < 2 * n + m) return { row: m + k, col: 2 * n + m - pos + k }
    return { row: 2 * m + 2 * n - pos + k, col: k }
}


function matrixRotation(matrix, r) {
    // Write your code here
    let m = matrix.length;
    let n = matrix[0].length;
    let newMatrix = [];
    matrix.map((row) => {
        const newRow = row.concat();
        newMatrix.push(newRow);
    })
    let k = 0;
    while (m > 0 && n > 0) {
        let count = 2 * (m + n - 2);
        if (m == 1) count -= n;
        if (n == 1) count -= m;
        const mod = r % count;
        for (let i = 0; i < count; i++) {
            const iMod = (i + mod) % count;
            const newPos = position(i, m - 1, n - 1, k);
            const pos = position(iMod, m - 1, n - 1, k);
            // console.log(newPos, pos, iMod, count);
            newMatrix[newPos.row][newPos.col] = matrix[pos.row][pos.col];
        }
        // console.log("##################################")
        k++;
        m -= 2;
        n -= 2;
    }
    newMatrix.map((row) => {
        const print = row.join(' ');
        console.log(print);
    })
}

matrixRotation(mat, 1);