const numberOfTrailingZeros = (num) => {
    let total = 0;
    for (let i = 5; i <= num; i += 5) {
        for (let num = i; i >= 0; i--) {
            if (num % 5 === 0) {
                num /= 5;
                total++
            }
        }
    }
    return total

}

console.log(numberOfTrailingZeros(8))
console.log(numberOfTrailingZeros(9))
console.log(numberOfTrailingZeros(10))