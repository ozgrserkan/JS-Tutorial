const reverseTheBitsOf16Bits = (num) => {
    let result = 0;
    for (let i = 0; i < 16; i++) {
        result = result * 2 + (num % 2)
        num = Math.floor(num / 2)
    }
    return result
}

console.log(reverseTheBitsOf16Bits(12345))