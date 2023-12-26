function makeADictionary(input) {

    let obj = {}; // ползваме let, а не const, тъй като Object.assign ни връща изцяло нов обект

    input.forEach((jsonString) => {
        const term = JSON.parse(jsonString);
        obj = Object.assign(obj, term);  // методът Object.assign() взима един обект който му е подаден като първи параметър и n-набороя обект и ги обединява в един общ обект като ги вкарва в първия.
    });


  const sorted = Object.keys(obj).sort();
    for (const term of sorted) {
        console.log(`Term: ${term} => Definition: ${obj[term]}`);
    }

}

// Друго решение на задачата
// function makeADictionary(input) {
//     const obj = {};

//     for (const term of input) {
//         let current = JSON.parse(term);
//         for (const key in current) {
//             obj[key] = current[key];
//         }
//     }

//     const sorted = Object.keys(obj).sort();
//     for (const term of sorted) {
//         console.log(`Term: ${term} => Definition: ${obj[term]}`);
//     }
// }





// Друго решение на задачата
// function makeADictionary(input) {
//    const dictionary = input.map(jsonString => JSON.parse(jsonString))
//     .reduce((acc, curr) => {
//         return {
//             ...acc,
//             ...curr,
//         };
//     }, {});

//    const sortedDictionaryTerms = Object.keys(dictionary).sort();
//    sortedDictionaryTerms.forEach(term => console.log(`Term: ${term} => Definition: ${dictionary[term]}`));
// }

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);