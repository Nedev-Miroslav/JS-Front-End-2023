function solve(fruit, weightInGr, priceForKilo){
    let weightInKg = weightInGr / 1000;
    let totalPrice = weightInKg * priceForKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)