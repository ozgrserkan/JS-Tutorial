const capitalizeFirstLetterEachWord = (str)=>{
  str = str.split(" ")
  for(let i=0;i<str.length;i++){
    str[i]=str[i][0].toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")

}

console.log(capitalizeFirstLetterEachWord("selam merhaba ben"))