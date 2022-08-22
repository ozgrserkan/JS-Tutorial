const whichIntClose100 =(x,y)=>{
  if (Math.abs(100-x)>=(Math.abs(100-y))){
    return y
  }else{
    return x
  }
}

console.log(whichIntClose100(90,95))