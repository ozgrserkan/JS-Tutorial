const moveLastThreeChar = (str) => {
    const last = str.slice(str.length-3)
    return last+str.slice(0,str.length-3)
}

console.log(moveLastThreeChar("python"))