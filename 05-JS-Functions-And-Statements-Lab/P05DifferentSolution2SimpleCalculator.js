function simpleCalculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;

    }
    console.log(result);
}


simpleCalculator(5, 5, 'multiply')