const differenceWith19 =(x)=>{
  if(x>19){
    return Math.abs(x-19)*3
  }else{
    return 19-x
  }
}

console.log(differenceWith19(19))