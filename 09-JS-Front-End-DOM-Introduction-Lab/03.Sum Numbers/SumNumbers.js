function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2);
    document.getElementById('sum').value = sum;
}




// друго решение 
// function calc() {
//     const firstNum = document.getElementById("num1");
//     const secondNum = document.getElementById("num2");

//     let number1 = Number(firstNum.value);
//     let number2 = Number(secondNum.value);

//     let result = number1 + number2;

//     const resultArea = document.getElementById("sum");

//     resultArea.value = result;

// }


