function ages(years){
   
    let toPrint;

    if(years >= 0 && years <= 2) {
        toPrint = "baby"
    } else if(years > 2 && years <= 13){
        toPrint = "child"
    } else if(years > 13 && years <= 19){
        toPrint = "teenager"
    } else if(years > 19 && years <= 65){
        toPrint = "adult"
    } else if(years > 65){
        toPrint = "elder"
    } else{
        toPrint = "out of bounds"
    }

    console.log(toPrint);

}



ages(30)