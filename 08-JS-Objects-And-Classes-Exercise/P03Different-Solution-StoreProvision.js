function checkStoreProvision(input1, input2) {

    const productObj = {}

    for (let i = 0; i < input1.length; i += 2) {
        let product = input1[i];
        let count = Number(input1[i + 1]);

        if (productObj.hasOwnProperty(product)) {
            productObj[product] += count;
        } else {
            productObj[product] = count;
        }
    }

    for (let i = 0; i < input2.length; i += 2) {
        let product = input2[i];
        let count = Number(input2[i + 1]);


        if (productObj.hasOwnProperty(product)) {
            productObj[product] += count;
        } else {
            productObj[product] = count;
        }
    }

    for (const key in productObj) {
        console.log(`${key} -> ${productObj[key]}`)
    }
}



checkStoreProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);