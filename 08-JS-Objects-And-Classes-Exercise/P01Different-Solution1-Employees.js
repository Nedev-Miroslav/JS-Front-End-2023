function employeesNumber(input) {
    const personWithID = {};

    for (const person of input) {
        let countLetter = person.length;
        personWithID[person] = countLetter;

    }
    for (const key in personWithID) {
        console.log(`Name: ${key} -- Personal Number: ${personWithID[key]}`)
    }

}

employeesNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
);