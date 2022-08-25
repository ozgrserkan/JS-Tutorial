const intContains30Or40 = (array)=>{
    if((array[0] === 30 && array[1] === 30) || (array[0] === 40 && array[1] === 40)){
        return true
    }else{
        return false
    }
}

console.log(intContains30Or40([30,40]))
console.log(intContains30Or40([30,30]))
console.log(intContains30Or40([40,40]))