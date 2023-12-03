function arrayRotation(input, countRotation) {

    for (let i = 0; i < countRotation; i++) {

        let firstElement = input.shift();
        input.push(firstElement);
    }

    console.log(input.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);