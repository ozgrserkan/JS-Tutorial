const checkSquareMatrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        let rows = matrix.length;
        let cols = matrix[i].length;
        if (rows !== cols) {
            console.log("Matrix should be a square matrix");
            return false;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== 1 && i === j || matrix[i][j] && i !== j) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkSquareMatrix(([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]])))