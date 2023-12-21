function employeesNumber(input) {
    input.forEach(employee => {
        const employeeName = employee;
        const personalNumber = employee.length;
        
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`)
        
    });

}


employeesNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
);