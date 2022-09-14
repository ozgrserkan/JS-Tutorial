const testIntGreaterThan15 = (num) => {
    for (let i = num; i >= 0; i--) {
        if (num < 15) {
            num++
        }
    }
    return num
}

console.log(testIntGreaterThan15(125))
console.log(testIntGreaterThan15(10))