function getFirstNCharactersOfString(a) {
  let result = "";

  for (let i = 0; i < 3; i++) {
    result += a[i];
  }
  return result;
}

const getFirstNth = (str, n) => str.slice(0, n);

let value = getFirstNCharactersOfString("mehmet");

console.log(value);
console.log(getFirstNth("serkan", 4));


const categoryFilterModal = () =>{
    getFirstNCharactersOfString('seko')
}