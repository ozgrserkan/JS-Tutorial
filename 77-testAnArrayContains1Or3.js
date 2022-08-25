const testAnArrayContains1Or3 = (array)=>{
    if(array[0] === 1 ||array[0] === 3 ||array[1] === 1 ||array[1] === 3 ){
        return true
    }else{
        return false
    }
}

console.log(testAnArrayContains1Or3([1,5]))
console.log(testAnArrayContains1Or3([2,3]))
console.log(testAnArrayContains1Or3([7,5]))

function contains13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
        return true
    }
    else
    {
        return false
    }
}

console.log(contains13([1, 5]));
console.log(contains13([2, 3]));
console.log(contains13([7, 5]));