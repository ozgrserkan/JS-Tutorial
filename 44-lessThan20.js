const lessThan20 = (x, y, z) => {

  if (x >= 20 && (x < y || x < z)) {
    return true
  }
  if (y >= 20 && (y < x || y < z)) {
    return true
  }
  if (z >= 20 && (z < y || z < x)) {
    return true
  } else {
    return false
  }
}

console.log(lessThan20(23,23,10))