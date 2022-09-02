const replaceNumberArray = (arr,oldValue,newValue)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue) {
            arr[i] = newValue;
        }
    }
    return arr;
}

console.log(replaceNumberArray([2,3,4,5,6,3,2,2,2,2,2],2,3))