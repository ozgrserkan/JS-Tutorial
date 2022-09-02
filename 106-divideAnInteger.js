const divideAnInteger = (num, d) => {
    if (d === 1) {
        return num
    }
    if (num % d === 0) {
        for (let i = 1; i < num; i++) {
            num /= d;
        }
    }
    return num
}

console.log(divideAnInteger(12, 2))