const addTwoDigitofInt = (x)=>{
    var digit = x.toString().split("")
    return Number(digit[0])+Number(digit[1])

}

console.log(addTwoDigitofInt(12))