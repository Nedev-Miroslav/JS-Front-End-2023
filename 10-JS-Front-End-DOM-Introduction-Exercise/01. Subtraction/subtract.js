function subtract() {
    const firstNumberElement = document.getElementById("firstNumber").value;
    const secondNumberElement = document.getElementById("secondNumber").value;
    
    
    let result = Number(firstNumberElement) - Number(secondNumberElement);
   

    let productToDisplay = document.getElementById("result");
    productToDisplay.textContent = result;

}