const changeLastAndFirst=(str)=>{
  // const first = str.slice(0,1)
  // const last = str.slice(str.length-1,str.length)
  // return last+str.slice(0,0)+str.slice(1,str.length-1)+first

      return str[str.length -1] + str.slice(1, str.length -1) + str[0];
}

console.log(changeLastAndFirst("Selam"))

