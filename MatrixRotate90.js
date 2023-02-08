const mat = [
    [1, 11, 111, 1111],
    [2, 22, 222, 2222],
    [3, 33, 333, 3333],
    [4, 44, 444, 4444],
];

function matrixRotation(matrix) {
    // Write your code here
    let n = matrix.length;
    let newMatrix = [];
    for(let i = 0; i < n; i ++){
        let mat = [];
        for(let j = n - 1; j >= 0; j --){
            mat.push(matrix[j][i]);
        }
        newMatrix.push(mat);
    }
    console.log(newMatrix);
}

matrixRotation(mat);