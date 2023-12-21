function employeesNumber(input){
    const employees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    Object.keys(employees).forEach((key) => {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    });
    

}


// function employeesNumber(input) {
//     const personWithID = {};

//     for (const person of input) {
//         let countLetter = person.length;
//         personWithID[person] = countLetter;

//     }
//     for (const key in personWithID) {
//         console.log(`Name: ${key} -- Personal Number: ${personWithID[key]}`)
//     }

// }

// Друго репение на задачата
// function employeesNumber(input) {
//     input.forEach(employee => {
//         const employeeName = employee;
//         const personalNumber = employee.length;
        
//         console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`)
        
//     });

// }


employeesNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
);