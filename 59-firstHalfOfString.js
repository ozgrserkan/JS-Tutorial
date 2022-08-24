const firstHalfOfString = (str)=>{
    if(str.length % 2 ===0){
        return str.slice(0,str.length/2)
    }else{
        return false
    }
}

console.log(firstHalfOfString("selam"))