const newStringOf4CopiesOfLast3Char = (str)=>{
    const char = str.slice(str.length-3)
    return char.repeat(4)
}

console.log(newStringOf4CopiesOfLast3Char("selam"))