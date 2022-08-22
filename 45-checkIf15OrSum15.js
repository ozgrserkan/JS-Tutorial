const checkIf15OrSum15 = (x, y) => {
  if(x === 15 || y=== 15 || x+y === 15 || Math.abs(x-y)===15){
    return true
  }else{
    return false
  }
}

console.log(checkIf15OrSum15(9, 25))