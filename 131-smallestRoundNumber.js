const smallestRoundNumber = (num) => {
    for (let i = num; i >= 0; i--) {
        if (num % 10) {
            num++
        }
    }
    return num
}

console.log(smallestRoundNumber(56))