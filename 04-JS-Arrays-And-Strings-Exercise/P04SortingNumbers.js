function sortingNumbers(input){
    
    let sortedArr = input.sort((a, b) => a - b);
    let resultArr = [];

    while(sortedArr.length > 0){
        let smalNum = sortedArr.shift();
        let bigNum = sortedArr.pop();
        resultArr.push(smalNum, bigNum);
    }
    return(resultArr);
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);