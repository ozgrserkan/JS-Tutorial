const pycheck = (str) => {
  const charAt0 = str.charAt(0);
  const charAt1 = str.charAt(1);
  if(charAt0+charAt1 === "Py"){
    return str
  }else{
    return `Py${str}`
  }
}

console.log(pycheck("Merhaba"))
