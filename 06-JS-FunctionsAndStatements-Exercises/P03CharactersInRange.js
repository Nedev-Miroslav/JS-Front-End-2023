function charactersInRange(firstChar, lastChar){
  
    let result = [];
    let start = firstChar.charCodeAt();
    let end = lastChar.charCodeAt();

    let startIndex = Math.min(start, end);
    let endIndex = Math.max(start, end);

    for(let i = startIndex + 1; i < endIndex; i++){
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
    }

    console.log(result.join(" "));

}

charactersInRange('#', ':');


