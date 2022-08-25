const createANewArrayTakingFirstAndLast = (array)=>{
    const newArray = [array[0],array[array.length-1]]
    return newArray
}

console.log(createANewArrayTakingFirstAndLast([20,20,30]))