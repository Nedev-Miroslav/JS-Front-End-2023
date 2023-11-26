function solve(num1, num2){
    let digits = ""; 
    let sum = 0;

    for (let index = num1; index <= num2; index++) {
        digits += index + " ";
        sum += index;

        
    }

    console.log(digits);
    console.log(`Sum: ${sum}`)

}

solve(0, 26)

