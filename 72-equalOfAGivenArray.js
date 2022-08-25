const equalOfAGivenArray = (array)=>{
    if( array[0] === array[array.length-1]){
        return true
    }else{
        return false
    }
}

console.log(equalOfAGivenArray([10,20,30]))
console.log(equalOfAGivenArray([30,20,30]))