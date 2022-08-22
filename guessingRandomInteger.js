const guessingRandomInteger = (guess)=>{
  const randomNumber = Math.floor(Math.random()*10) + 1

  if(Number(guess) === randomNumber){
    console.log("Good Work")
  }else{
    console.log("Not Matched")
  }
}

guessingRandomInteger()
