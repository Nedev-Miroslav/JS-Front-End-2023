function addAndSubtractNumbers(n1, n2, n3) {
    let sum = (n1, n2) => {
        return n1 + n2;
    }

    let subtract = (sum, n3) => (sum(n1, n2) - n3);
    console.log(subtract(sum, n3));

}

addAndSubtractNumbers(23, 6, 10);
