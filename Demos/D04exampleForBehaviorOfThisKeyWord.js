const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName()); // 'Peter Johnson'



const getFullName = person.fullName; // присвояваме функцията на друга променлива.
console.log(getFullName()); // 'undefined undefined' Това е така защото this реферира към обекта в който е извикана, а не към обекта в който е създадена!
const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Smith'
};
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // 'Bob Smith'

