const sortAnArrayAllPrime = (num) => {
    let num1 = []
    let num2 = [];
    for (let i = 0; i <= num; i++) {
        num2.push(true);
    }
    for (let i = 2; i <= num; i++) {
        if (num2[i]) {
            num1.push(i);
            for (let j = 1; i * j <= num; j++) {
                num2[i * j] = false;
            }
        }
    }

    return num1;
}

console.log(sortAnArrayAllPrime(5))