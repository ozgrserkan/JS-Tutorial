const findTheNumberOfSorted = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] % array[j] === 0 || array[j] % array[i] === 0) {
                result++;
            }
        }
    }
    return result;
}

console.log(findTheNumberOfSorted([1, 2, 3]))