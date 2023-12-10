 function checkForPalindrome(numArr){
    
    function isPalindrom(num){
        let numAsString = num.toString();
        let reversedNum = numAsString.split("").reverse().join("");

        return numAsString === reversedNum;
    }

    for (const currentNum of numArr) {
        console.log(isPalindrom(currentNum));
    }

 }


// Друго решение на задачата
// function checkForPalindrome(numArr){

//     for(let i = 0; i < numArr.length; i++){
//         let currentNum = numArr[i].toString();
//         let reversed = "";
//         for(let i = currentNum.length - 1; i >= 0; i--){
//             reversed += currentNum[i];
//         }

//         if(currentNum === reversed){
//             console.log(true);
//         } else{
//             console.log(false);
//         }         
//     }
// }

checkForPalindrome([123,323,421,121]);


function solve(m){
    
    let reversed = m.split("").reverse().join("");
    console.log(reversed);
}

solve("miro")