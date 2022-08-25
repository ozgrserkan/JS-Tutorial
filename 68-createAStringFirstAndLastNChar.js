const createAStringFirstAndLastNChar = (str, n) => {
    if (str.length > n) {
        const first = str.slice(0, n)
        const last = str.slice(str.length - n)
        return first + last
    } else {
        return false
    }
}

console.log(createAStringFirstAndLastNChar('Javascript', 2))