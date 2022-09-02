const findTwoElementsOfArray = (array, n) => {
    let max_val = -1
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let x = Math.abs(array[i] - array[j])
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}

console.log(findTwoElementsOfArray([12, 10, 33, 34], 10))