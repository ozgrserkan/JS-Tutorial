const checkTwoArray = (arr, arr2) => {
    if(arr.length !== arr2.length){
        return false
    }

    for(let i = 0;i<arr.length;i++){
        if(arr[i]!==arr2[i]){
            return false
        }
    }return true
}

console.log(checkTwoArray([2,3,4],[2,3,4]))
console.log(checkTwoArray([2,5,4],[2,3,7]))
console.log(checkTwoArray([2,5,4],[2,3,7]))