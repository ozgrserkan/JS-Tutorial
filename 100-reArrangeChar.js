const reArrangeChar = (str1, str2) => {
    let first = str1.split("");
    let second = str2.split("");
    let result = true

    let biggerLength = Math.max(first,second);

    for(let i =0;i<biggerLength;i++){
        if(first[i]!==second[i]){
            result = false
        }
    }
    return result
}

console.log(reArrangeChar("xyz","zyx"))