function checkForPalindrome(numArr){

    for(let i = 0; i < numArr.length; i++){
        let currentNum = numArr[i].toString();
        let reversed = "";
        for(let i = currentNum.length - 1; i >= 0; i--){
            reversed += currentNum[i];
        }

        if(currentNum === reversed){
            console.log(true);
        } else{
            console.log(false);
        }         
    }
}

checkForPalindrome([123,323,421,121]);
