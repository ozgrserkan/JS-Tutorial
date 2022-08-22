const removeAChar=(str,x)=>{
  return str.slice(0, x) + str.slice(x+1, str.length)
}

console.log(removeAChar("w3resource",5))