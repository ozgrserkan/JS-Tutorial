const checkTwoIntAreSimilar = (x, y, z) => {
    if ((x % z === 0 && y % z === 0)){
        return true
    } else {
        return false
    }
}

console.log(checkTwoIntAreSimilar(10, 25, 5))
console.log(checkTwoIntAreSimilar(10, 20, 5))
console.log(checkTwoIntAreSimilar(10, 20, 4))