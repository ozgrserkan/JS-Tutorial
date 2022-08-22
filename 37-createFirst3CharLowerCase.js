const createFirst3CharLowerCase = (str)=>{
  if(str.length>=4){
    const lowerCase = str.slice(0,3)
    return lowerCase.toLowerCase()+str.slice(3,str.length)
  }else{
    return str.toUpperCase()
  }

}

console.log(createFirst3CharLowerCase("SELAM"))
console.log(createFirst3CharLowerCase("PYTHON"))