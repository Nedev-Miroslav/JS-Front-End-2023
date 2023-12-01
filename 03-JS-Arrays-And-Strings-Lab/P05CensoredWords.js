function solve(text, word) {
   let regex = new RegExp([word], "g")
    console.log(text.replace(regex, '*'.repeat(word.length)));
}

// решение на задачата с while цикъл
// function solve(text, word) {
//     while (text.includes(word)) {
//         text = text.replace(word, '*'.repeat(word.length));
//     }
//     console.log(text);
// }


solve('A small sentence with some words small', 'small')