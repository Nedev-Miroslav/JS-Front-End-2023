function calculatePrace(product, quantuty){
    let finalPrice = 0;

    if(product === "coffee"){
        finalPrice = 1.50 * quantuty;
    } else if(product === "water"){
        finalPrice = 1 * quantuty;
    }else if(product === "coke"){
        finalPrice = 1.40 * quantuty;
    }else if(product === "snacks"){
        finalPrice = 2.00 * quantuty;
    }

    console.log(`${finalPrice.toFixed(2)}`)
}

calculatePrace("water", 5)
calculatePrace("coffee", 2)
