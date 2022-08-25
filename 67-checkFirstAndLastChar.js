const checkFirstAndLastChar = (str)=>{
    const first = str.slice(0,1)
    const last = str.slice(str.length-1)
    if( first === "P" && last === "P"){
        return str.slice(1,str.length-1)
    }else{
        return str
    }
}

console.log(checkFirstAndLastChar("selamls"))
console.log(checkFirstAndLastChar("PythonP"));
