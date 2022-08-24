const concatenateTwoString = (str, str2) => {
    const newStr = str.slice(1)
    const newStr2 = str2.slice(1)
    return newStr + newStr2

}

console.log(concatenateTwoString("PHP","JS"))