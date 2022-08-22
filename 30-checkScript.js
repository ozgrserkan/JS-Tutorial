const checkScript=(str)=>{
  const a1= str.charAt(4)
  const a2= str.charAt(5)
  const a3= str.charAt(6)
  const a4= str.charAt(7)
  const a5= str.charAt(8)
    const a6= str.charAt(9)
  const total = a1+a2+a3+a4+a5+a6
  if (str.slice(str.length-6,str.length) === total){
    return str
  }else{
    return str+"script"
  }
  

}


const checkScript2=(str)=>{
  if(str.length>7)
  {
    const check = str.slice(str.length - 6, str.length)
    if (check === "script") {
      return str
    } else {
      return str + check
    }
  }else{
    return "not Enough Length"
  }
}

console.log(checkScript("Javascript"))
console.log(checkScript2("Java"))
