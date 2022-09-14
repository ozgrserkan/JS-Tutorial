const swapArray = (arr) => {
    if (((arr.length) % 2) !== 0) {
        return false;
    }
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[i]
        arr[i] = arr[i + arr.length / 2];
        arr[i + arr.length / 2] = swap
    }
    return arr
}

console.log(swapArray([1, 2, 3, 4, 5, 6]))