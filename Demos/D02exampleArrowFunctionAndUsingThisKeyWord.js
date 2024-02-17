// function personInfo(firstName, lastName) {

//     return {
//         firstName,
//         lastName,
        
//         printNames: () => { // arrow function чупи поведението на програмата заради използването на this
//             console.log(this.firstName + " " + this.lastName);
//         },

//     };


// }

function personInfo(firstName, lastName) {

    return {
        firstName,
        lastName,
        
        printNames: function (){
            console.log(this.firstName + " " + this.lastName);
        },

    };


}

const persons = personInfo("Pesho", "Peshov");
persons.printNames();