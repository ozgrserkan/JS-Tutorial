const maxDiff = (array) => {
    let max = -1
    let temp;
    for (let i = 0; i < array.length-1; i++) {
        temp = Math.abs(array[i] - array[i + 1])
        max = Math.max(max, temp)
    }
    return max

}

console.log(maxDiff([1, 2, 3, 8, 9]))