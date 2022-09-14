const checkArrayIncOrDec = (array) => {
    if (array.length === 1) {
        return true
    }
    let numDirect = array[1] - array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (numDirect * (array[i + 1] - array[i] <= 0)) {
            return false
        }
    }
}

console.log(checkArrayIncOrDec([1, 2, 3]))