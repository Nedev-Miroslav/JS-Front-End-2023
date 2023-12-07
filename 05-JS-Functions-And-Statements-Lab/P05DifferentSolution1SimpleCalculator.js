function simpleCalculator(num1, num2, operator) {
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    switch (operator) {
        case "add":
            console.log(add(num1, num2));
            break;
        case "subtract":
            console.log(subtract(num1, num2));
            break;
        case "multiply":
            console.log(multiply(num1, num2));
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
    }
}

simpleCalculator(5, 5, 'multiply')