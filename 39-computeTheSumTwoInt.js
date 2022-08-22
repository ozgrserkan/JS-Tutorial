const computeTheSumTwoInt = (x,y)=>{
  let total = x + y
  if(total>= 50 && total<=80 ){
    return 65
  }else{
    return 80
  }
}

console.log(computeTheSumTwoInt(40,2))