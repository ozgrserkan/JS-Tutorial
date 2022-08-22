const checkTotalMarksOfAStudent = (examNote,final_exam)=>{
  if(final_exam && examNote>=90){
    return true
  }else {
    return false
  }
}

console.log(checkTotalMarksOfAStudent(85,false))