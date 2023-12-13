function personInfo(firstName, lastName, age){

    const person ={
        firstName: firstName,
        lastName: lastName,
        age: age,
        
    };
    
    return person;
}

// По съкратен вариант
// function personInfo(firstName, lastName, age){

//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
        
//     };
// }

console.log(personInfo("Peter", "Pan", "20"));