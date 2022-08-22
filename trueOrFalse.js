const trueOrFalse=(x,y)=>{
  if (x<0 &&y>0 || x>0 && y<0){
    return true
  }else{
    return false
  }

}

console.log(trueOrFalse(3,5))