const findTheNumberEvenValues = (array, num) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== num) {
            total++
        }if(array[i]=== num){
            return total
        }
    }return -1
}

console.log(findTheNumberEvenValues([1,2,3,4,5,6,7,8],5))