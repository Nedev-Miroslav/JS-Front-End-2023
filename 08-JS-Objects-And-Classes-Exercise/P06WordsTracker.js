function wordsTracker(input) {
    const [searchWords, ...words] = input;
  
    const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {});
  
    words.forEach((word) => {
      if (wordOccurances.hasOwnProperty(word)) {
        wordOccurances[word] += 1;
      }
    });

    let entries = Object.entries(wordOccurances).sort((a, b) => b[1] - a[1]); 
    
    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`)
    } 
  
  }
  

//  Друго решение на задачата
// function wordsTracker(list) {
//     let stringList = list.shift().split(" ");

//     const occurances = {};

//     stringList.forEach((word) => {
//         occurances[word] = 0;


//         list.forEach((element) => {
//             if (word === element) {
//                 occurances[word] += 1;
//             }

//         });
//     });


//     let entries = Object.entries(occurances).sort((a, b) => b[1] - a[1]); 
    
//     for (const [key, value] of entries) {
//         console.log(`${key} - ${value}`)
//     }   

// }

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);