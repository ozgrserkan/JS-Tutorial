const countNumberOfVowels = (str)=>{
  return str.match(/[aeiou]/gi).length
}

console.log(countNumberOfVowels('selamlar'))