const converNumberToHours = (x)=>{
  let hours = Math.floor(x/60)
  let minute = x % 60
  return `${hours} : ${minute}`
}

console.log(converNumberToHours(60))