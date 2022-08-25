const swapFirstAndLast = (array)=>{
    [array[0],array[array.length-1]] = [array[array.length-1],array[0]]
    return array
}

console.log(swapFirstAndLast([1,2,3,4]))