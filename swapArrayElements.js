const swapArrayElements = (number) => {
    if (number.toString().length % 2 !== 0) {
        return false
    }
    let result = 0
    let x = 1
    while (number !== 0) {
        let dg1 = number % 10,
            dg2 = ((number - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        number = Math.floor(number / 100);
        x *= 100;
    }
    return result;

}

console.log(swapArrayElements(15))