function solve(str, startIndex, count){
    let lastIndex = startIndex + count;
    let subStr = str.substring(startIndex, lastIndex);
    console.log(subStr);
}

solve('ASentence', 1, 8);