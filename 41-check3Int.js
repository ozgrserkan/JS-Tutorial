const check3Int = (x,y,z)=>{
  if ( x===y && x===z && x===z){
    return 30
  }if ( x===y || x===z || y===z){
    return 40
  }else{
    return 20
  }
}

console.log(check3Int(5,5,5))