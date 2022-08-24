const concatenateTwoString = (str,str2)=>{
    const value = Math.min(str.length,str2.length)
    return str.slice(0,value)+" " +str2.slice(0,value)
}

console.log(concatenateTwoString("selam","merhaba"))