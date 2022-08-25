const checkStringEndWithScript = (str)=>{
    const value = str.slice(str.length-6)
    if(str.length>7){
        if(value === "script" || value === "Script"){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

console.log(checkStringEndWithScript("script"))