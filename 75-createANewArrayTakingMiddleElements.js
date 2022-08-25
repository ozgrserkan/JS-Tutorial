const createANewArrayTakingMiddleElements = (arr,arr2)=>{
    const newArray=[]
    newArray.push(arr[Math.floor(arr.length/2)],arr2[Math.floor(arr2.length/2)])
    return newArray
}

console.log(createANewArrayTakingMiddleElements([3,4,5],[3,6,8]))