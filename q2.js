function removeFirstNCharactersOfString(a) {

    
  let result = "";
  for (let i = 4; i <= a.length; i++) {
    result += a[i - 1];
  }
  return result;
}

let value = removeFirstNCharactersOfString("mehmet");

console.log(value);
