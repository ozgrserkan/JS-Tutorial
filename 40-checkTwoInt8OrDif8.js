const checkTwoInt8OrDif8 = (x, y) => {
  if (x === 8 || y === 8) {
    console.log("some parameter === 8 ")
  }
  if (Math.abs(x - y) === 8) {
    return true
  } else {
    return false
  }
}

console.log(checkTwoInt8OrDif8(32,24))