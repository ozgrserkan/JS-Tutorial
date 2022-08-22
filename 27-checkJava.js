const checkJava = (str) => {

  // TODO solve with slice
  const charAt0 = str.charAt(0);
  const charAt1 = str.charAt(1);
  const charAt2 = str.charAt(2)
  const charAt3 = str.charAt(3)
  if (charAt0 + charAt1 + charAt2 + charAt3 === "Java") {
    return true
  } else {
    return false
  }
}

console.log(checkJava("Selam"))
console.log(checkJava("Javascript"))
checkJava(null)
checkJava("ali")