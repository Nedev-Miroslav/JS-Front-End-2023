function takeEveryNthElement(input, sptep) {

    let newArr = [];

    for (let i = 0; i < input.length; i += sptep) {
        newArr.push(input[i]);
    }

    return newArr;
}

takeEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2);