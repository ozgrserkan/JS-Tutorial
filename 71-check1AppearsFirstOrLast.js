const check1AppearsFirstOrLast = (array) => {
    if (array.length > 1) {
        if (array[0] === 1 || array.length - 1 === 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(check1AppearsFirstOrLast([3,2,4]))
console.log(check1AppearsFirstOrLast([1,2,4]))