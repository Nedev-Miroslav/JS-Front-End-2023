function calculatePrace(product, quantuty){

    const productPrise  = {
        coffee: (quantuty) => quantuty * 1.50,
        water: (quantuty) => quantuty * 1,
        coke: (quantuty) => quantuty * 1.40,
        snacks: (quantuty) => quantuty * 2.00,
    };

    const productCalculate = productPrise[product];
    const finalPrice = productCalculate(quantuty);
    console.log(`${finalPrice.toFixed(2)}`)

}


calculatePrace("water", 5)
calculatePrace("coffee", 2)