const arrayMaxDiff = (array) => {
    let max_result = 0;

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k !== i && k < array.length; k++) {
            let diff = Math.abs(array[i] - array[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}

console.log(arrayMaxDiff([1, 2, 3, 8, 9]))