function calculatePrace(product, quantuty){
    const productPrise  = {
        coffee:  1.50,
        water: 1,
        coke:  1.40,
        snacks: 2.00,
    }
    const productCalculate = productPrise[product];
    const finalPrice = productCalculate * quantuty;
    console.log(`${finalPrice.toFixed(2)}`)

}



// Друго решение на задачата
// function calculatePrace(product, quantuty){

//     const productPrise  = {
//         coffee: (quantuty) => quantuty * 1.50,
//         water: (quantuty) => quantuty * 1,
//         coke: (quantuty) => quantuty * 1.40,
//         snacks: (quantuty) => quantuty * 2.00,
//     };

//     const productCalculate = productPrise[product];
//     const finalPrice = productCalculate(quantuty);
//     console.log(`${finalPrice.toFixed(2)}`)

// }




// Друго решение на задачата 
// function calculatePrace(product, quantuty){
//     let finalPrice = 0;

//     if(product === "coffee"){
//         finalPrice = 1.50 * quantuty;
//     } else if(product === "water"){
//         finalPrice = 1 * quantuty;
//     }else if(product === "coke"){
//         finalPrice = 1.40 * quantuty;
//     }else if(product === "snacks"){
//         finalPrice = 2.00 * quantuty;
//     }

//     console.log(`${finalPrice.toFixed(2)}`)
// }

calculatePrace("water", 5)
calculatePrace("coffee", 2)
