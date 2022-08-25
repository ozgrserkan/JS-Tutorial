const checkFirstAndLastIndex = (array)=>{
    if(array[0] >= array[array.length-1]){
        array[1] = array[0]
        array[2] = array[0]
        return array
    }else{
        array[0] = array[2]
        array[1] = array[2]
        return array
    }
}

console.log(checkFirstAndLastIndex([2,3,4]))
console.log(checkFirstAndLastIndex([5,3,4]))