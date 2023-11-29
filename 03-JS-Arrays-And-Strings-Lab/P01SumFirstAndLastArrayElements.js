function sumOfFirstAndLastElement(input){
    let firstNum = input.pop();
    let lastNum = input.shift();
    console.log(firstNum + lastNum);
}




// друго решение
// function sumOfFirstAndLastElement(input) {
//     let firstNum = input[0];
//     let lastNum = input[input.length - 1];
//     console.log(firstNum + lastNum);

// }



sumOfFirstAndLastElement([20, 30, 40]);