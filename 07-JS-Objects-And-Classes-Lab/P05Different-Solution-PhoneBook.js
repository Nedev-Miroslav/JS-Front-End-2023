function createPhoneBook(textArr){
    let obj = {};
   for (let element of textArr) {
        let token = element.split(" ");
        let name = token[0];
        let number = token[1];
        obj[name] = number;
   }

   for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)
   }
    
}

createPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);