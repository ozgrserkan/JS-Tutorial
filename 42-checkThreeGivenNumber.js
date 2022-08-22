const checkThreeGivenNumber = (x,y,z)=>{
  if ( y > x && z > y)
  {
    return "strict mode";
  }
  else if(z > y)
    return "Soft mode";
  else
    return "Undefinded";
}