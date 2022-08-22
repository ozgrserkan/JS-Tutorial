const findValueWhichIsNearest100=(x,y)=>{
  if(Math.abs(100-x)>=(Math.abs(100-y))){
    return y
  }else{
    return x
  }

  // TODO ternary yaz
}

console.log(findValueWhichIsNearest100(150,250))