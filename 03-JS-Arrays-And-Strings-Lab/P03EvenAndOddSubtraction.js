function dffBetweenOddAndEvenNum (input){
    let odd = 0;
    let even = 0;
    for (const currentNum of input) {
        if(currentNum % 2 === 0){
            even += currentNum;
        } else{
            odd += currentNum;
        }
    }
    console.log(even - odd);
}

dffBetweenOddAndEvenNum([3,5,7,9]);
dffBetweenOddAndEvenNum([2,4,6,8,10]);