const checkIncDigitSequence = num => {
    let arrNum = ('' + num).split('');

    for (let i = 0; i < arrNum.length - 1; i++) {
        if (parseInt(arrNum[i]) >= parseInt(arrNum[i + 1]))
            return false;
    }
    return true;
}

console.log(checkIncDigitSequence(123))