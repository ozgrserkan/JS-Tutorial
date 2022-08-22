const checkSameRightmostDigit = (x, y, z) => {
  if(x%10===y%10 || x%10===y%10 || x%10===z%10){
    console.log("Same Digit")
  }else{
    console.log("Different Digit")
  }
}

console.log(checkSameRightmostDigit(50,30,20))