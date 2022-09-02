const findTheNumberOfInversions = (array)=>{
    let value = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j])
                value++;
        }
    }
    return value;
}

console.log(findTheNumberOfInversions([0,3,2,5,9]))