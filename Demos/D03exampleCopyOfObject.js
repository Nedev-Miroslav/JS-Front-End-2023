function solve(obj) {
    const myInnerObj = JSON.parse(JSON.stringify(myObj)); // така ще се направи най-сигурно, копие на всички nested обекти (deep copy)
    myInnerObj.a = 100;            
    console.log(myInnerObj);
}


// function solve(obj) {
//     const myInnerObj = { ...obj }; // използваме spread operator за да копираме обекта и да го манипулираме myInnerObj във функцията без да засягаме обекта - myObj извън функцията.
//     myInnerObj.a = 100;            // spread operator прави копие само на едно ниво ако Имаме nested обект той ще запази своята референция.
//     console.log(myInnerObj);
// }


// function solve(obj) {
//     const myInnerObj = obj; // по този начин всяка промяна на myInnerObj ще рефлектира върху myObj.
//     myInnerObj.a = 100;
//     console.log(myInnerObj);
//  }



const myObj = { a: 1, b: 2 };
solve(myObj);
console.log(myObj);