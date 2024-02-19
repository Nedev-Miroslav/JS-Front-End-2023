printname ("Miro");

function printname(name){ // хойства и затова може да се извика преди да е дефинирана
    console.log("Hi " + name);
}

// const printname = function(name){ // Важи за const и let. Не хойства и затова не може да се извика преди да е дефинирана защото дава грашка Cannot access 'printname' before initialization
//     console.log("Hi " + name);
// }

// var printname = function(name){ // При var спцификата е че var сам по себеси хойства и ако извикаме функцията преди да е дефинирана ще получим различна гршка TypeError: printname is not a function
//     console.log("Hi " + name);
// }