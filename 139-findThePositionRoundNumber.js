const findThePositionRoundNumber = (arr)=>{
    let result =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]%10===0){
            result = i;
        }
    }return result
}

console.log(findThePositionRoundNumber([1,22,30,54,56]))