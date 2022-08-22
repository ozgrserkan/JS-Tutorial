const addValue = (array)=>{
  for (let i=0; i<array.length;i++){
    array[i] = array[i] + 5
  }
}

const array = [1,2,3,4,5]

//addValue(array)

console.log(array)

const addValueWithReturn = (array)=>{
  let newArray = []
  for(let i = 0; i<array.length;i++){
    newArray[i] = array[i]+5
  }
  return newArray

}



console.log(addValueWithReturn(array))
console.log(array)