let findArea = () => {
  let a = 5;
  let b = 6;
  let c = 7;

  let total = (a + b + c) / 2;

  let totalArea = Math.sqrt(total * ((total - a) * (total - b) * (total - c)));
  console.log(totalArea);
};
