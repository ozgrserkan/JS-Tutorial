const divide=(x,y)=>{
  if(y===0 || y===null || x===null){
    return "undefined value"
  }else{
    return x*y
  }
}




const multiply=(x,y)=>{
  return x*y
}

const result1 = divide(10,null)

console.log(result1)

// const result2 = multiply(10,8)
// console.log(result2)

