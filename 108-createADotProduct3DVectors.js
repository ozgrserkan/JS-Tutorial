const createADotProduct3DVectors = (v1, v2) => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += v1[i] * v2[i]
    }
    return total
}

console.log(createADotProduct3DVectors([1, 2, 3], [1, 2, 3]))