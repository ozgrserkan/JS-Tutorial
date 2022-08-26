const computeTheSumOfTwoInt = (arr) => {
    let firstValue = [0, 0]
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            firstValue[1] += arr[i]
        } else {
            firstValue[0] += arr[i]
        }
    }
    return firstValue
}


console.log(computeTheSumOfTwoInt([1,3,6,2,5,10]))