function simpleCalculator(num1, num2, operator) {
    let operations = {
        
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,

    };

    console.log(operations[operator](num1, num2))
}

// Друг начин за решение на задачата
// function simpleCalculator(num1, num2, operator) {
//     const add = (num1, num2) => num1 + num2;
//     const subtract = (num1, num2) => num1 - num2;
//     const multiply = (num1, num2) => num1 * num2;
//     const divide = (num1, num2) => num1 / num2;

//     switch (operator) {
//         case "add":
//             console.log(add(num1, num2));
//             break;
//         case "subtract":
//             console.log(subtract(num1, num2));
//             break;
//         case "multiply":
//             console.log(multiply(num1, num2));
//             break;
//         case "divide":
//             console.log(divide(num1, num2));
//             break;
//     }
// }



// Друго решение на задачата
// function simpleCalculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case "add":
//             result = num1 + num2;
//             break;
//         case "subtract":
//             result = num1 - num2;
//             break;
//         case "multiply":
//             result = num1 * num2;
//             break;
//         case "divide":
//             result = num1 / num2;
//             break;

//     }
//     console.log(result);
// }


simpleCalculator(5, 5, 'multiply')