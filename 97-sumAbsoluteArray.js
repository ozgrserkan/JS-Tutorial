const sumAbsoluteArray = (array) => {
    let total = 0
    for (let i = 1; i < array.length; i++) {
        total += Math.abs(array[i] - array[i - 1])
    }
    return total
}

console.log(sumAbsoluteArray([1, 2, 3, 2, -5]))