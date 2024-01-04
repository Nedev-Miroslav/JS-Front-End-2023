function solve() {

  let inputTextElement = document.getElementById("text").value.toLowerCase();
  let typeOfCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  inputTextElement = inputTextElement.split(" ");

  let senttence = [];

  let toPrint = "";

  if (typeOfCase === "Pascal Case") {
    for (let i = 0; i < inputTextElement.length; i++) {
      senttence.push(inputTextElement[i].charAt(0).toUpperCase() + inputTextElement[i].slice(1));

    }

    toPrint = senttence.join("");


  } else if (typeOfCase === "Camel Case") {
    senttence.push(inputTextElement[0]);

    for (let i = 1; i < inputTextElement.length; i++) {
      senttence.push(inputTextElement[i].charAt(0).toUpperCase() + inputTextElement[i].slice(1));

    }

    toPrint = senttence.join("");

  } else {
    toPrint = "Error!";

  }

  result.textContent = toPrint;

}