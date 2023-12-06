function repeateString(str, count) {
    return str.repeat(count);
}

// Друго решение
// function repeateString(str, count) {
//     let result = '';
//     for (let i = 0; i < count; i++) {
//         result += str;
//     }
//     return result;
// }

let result = repeateString("hp", 6);
console.log(result);