const reverseAGivenArray = (array)=>{
    return array.map((element,idx,arr)=>arr[(arr.length-1)-idx])
}

console.log(reverseAGivenArray([5,4,3]))