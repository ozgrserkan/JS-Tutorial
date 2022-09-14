const checkAllDigitSameOrNot = (num) => {
    let first = num % 10;
    for (let i = num; i >= 0; i--) {
        if (num % 100 !== first) {
            return false
        }
        num = Math.floor(num / 10);
    }
    return true
}

console.log(checkAllDigitSameOrNot(1234))