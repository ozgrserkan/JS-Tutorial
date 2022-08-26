const findTheGivenAngle = (angle)=>{
    if(angle<90){
        return "Acute Angle"
    }if(angle === 90){
        return "Right Angle"
    }if(angle>90 && angle<180){
        return "Obtuse Angle"
    }if(angle === 180){
        return "Straight Angle"
    }else{
        return "Wrong Angle"
    }
}

