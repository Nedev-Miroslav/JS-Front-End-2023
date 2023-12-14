function convertToObject(text){

    let obj = JSON.parse(text);
    Object.entries(obj).forEach(function([key, value]) {
        console.log(`${key}: ${value}`);
    });
  
}

// Решение с forOf
// function convertToObject(text){

//     let obj = JSON.parse(text);
//     for (const element of Object.entries(obj)) {
//         let key = element[0];
//         let value = element[1];
//         console.log(`${key}: ${value}`);
//     }

// }

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');