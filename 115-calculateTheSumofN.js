const calculateTheSumofN = (num) => {
    let sum = 0;
    for (let i = num; i >= 0; i--) {
        sum += num
        num = Math.floor(num / 2)
    }
    return sum
}
console.log(calculateTheSumofN(8))
console.log(calculateTheSumofN(9))
console.log(calculateTheSumofN(26))