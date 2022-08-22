const fin = (x, y) => {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
};

console.log(check50And99(70, 666));
