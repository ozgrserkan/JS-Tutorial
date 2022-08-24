const createNewStringRepeat = (str,n)=>{
    if(n<=0){
        return false
    }else{
        return str.repeat(n)
    }
}

console.log(createNewStringRepeat("selam",5))