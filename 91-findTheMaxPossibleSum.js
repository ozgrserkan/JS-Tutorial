const findTheMaxPossibleSum = (array) => {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]

    }
    return total
}

console.log(findTheMaxPossibleSum([2, 3, 4, 5, 6, 7, 8, 9]))