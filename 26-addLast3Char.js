const addLast3Char=(str)=>{
  return str.slice(str.length-3,str.length)+str+str.slice(str.length-3,str.length)
}

console.log(addLast3Char("selam"))