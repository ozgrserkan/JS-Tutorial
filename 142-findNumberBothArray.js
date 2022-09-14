const findNumberBothArray = (arr1, arr2) => {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result++;
            }
        }
    }
    return result;
}
console.log(findNumberBothArray([1, 2, 3, 4], [1, 2, 3, 4]))