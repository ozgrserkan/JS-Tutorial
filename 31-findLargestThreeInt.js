const findLargestThreeInt=(x,y,z)=>{
  // let largest;
  // if(x >= y && x >= z) {
  //   return x;
  // }
  // else if (y >= x && y >= z) {
  //   return y;
  // }
  // else {
  //   return z;
  // }

  return Math.max(x, Math.max(y,z));
}

console.log(findLargestThreeInt(6,6,6))