const possibleReplaceSpecifiedExp = (x, y, z) => {
    return x + y === z || x * y === z || x / y === z || x - y === z
}

console.log(possibleReplaceSpecifiedExp(10,25,35))
console.log(possibleReplaceSpecifiedExp(10,25,250))
console.log(possibleReplaceSpecifiedExp(100,25,25))