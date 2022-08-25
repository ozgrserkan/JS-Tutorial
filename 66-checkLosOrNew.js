const checkLosOrNew = (str) => {
    const newString = str.slice(0,3)
    if(newString === "New" || newString === "Los" ||newString === "new" || newString === "los" ){
        return true
    }else{
        return false
    }
}

console.log(checkLosOrNew("Newyork"))