function calculateOddAndEvenSum(num){

    let numberToStrin = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < numberToStrin.length; i++){
        let currentNum = Number(numberToStrin[i]);

        if(currentNum % 2 == 0){
            evenSum += currentNum;
        } else{
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

calculateOddAndEvenSum(3495892137259234);