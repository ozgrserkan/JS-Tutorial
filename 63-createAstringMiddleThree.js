const createAstringMiddleThree = (str)=>{
    if(str.length>=3){
        return str.slice(str.length/2-1,str.length/2+2)
    }else{
        return false
    }
}

console.log(createAstringMiddleThree("abcdefgz"))