function sortAddressBook(arr){
    const obj = {};

    for (const line of arr) {
        let currentElement = line.split(":")
        let name = currentElement[0];
        let address = currentElement[1];
        
        obj[name] = address;


    }

        let sorted = Object.entries(obj);

        sorted.sort((a, b) => a[0].localeCompare(b[0]));
        
        for (const element of sorted) {
            console.log(`${element[0]} -> ${element[1]}`)
        }

}

sortAddressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)