const checkWhetherTheLastDigit=(x,y,z)=>{
  const result1 = x % 10;
  const result2 = y % 10;
  const result3 = z % 10;

  if(result1=== result2 && result1 ===result3 && result2===result3){
    return true
  }else{
    return false
  }
}

console.log(checkWhetherTheLastDigit(100,110,440))