const largestNumber = (arr) => {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }return largest
}

console.log(largestNumber([1,2,3,5,6]))