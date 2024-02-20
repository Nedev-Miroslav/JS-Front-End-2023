function sayHello() {  // First class function
    return "Hello, ";
}

function greeting(helloMessage, name) { // Подаваме една функция в случая sayHellо() на друга функция в случая greeting();. Това е High- order function
    return helloMessage() + name;
 }

console.log(greeting(sayHello, "JavaScript!"));
// Hello, JavaScript!