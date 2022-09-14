const findMaxInt = (num) => {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        if (result <= num) {
            result += i++
        }
    }

}

console.log(findMaxInt(11))


const findMaxInt2 = (val) => {
    var sn = 0;
    var i = 0;
    while (sn <= val) {
        sn += i++;
    }
    return i - 2;

}

console.log(findMaxInt2(11))