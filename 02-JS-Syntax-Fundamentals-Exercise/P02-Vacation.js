function solve (groupCount, typeOfGroup, DayOfWeek){

    let priceWithoutRedyce;
    


    if(typeOfGroup === "Students"){

        if(DayOfWeek === "Friday") {
            priceWithoutRedyce = groupCount * 8.45;

        }else if(DayOfWeek === "Saturday"){
            priceWithoutRedyce = groupCount * 9.80;

        }else if(DayOfWeek === "Sunday"){
            priceWithoutRedyce = groupCount * 10.46;
        }

        if(groupCount >= 30){
            priceWithoutRedyce = priceWithoutRedyce * 0.85
        }

    } else if(typeOfGroup === "Business"){
        let priceFor10;

        if(DayOfWeek === "Friday") {
            priceWithoutRedyce = groupCount * 10.90;
            priceFor10 = 10 * 10.90;

        }else if(DayOfWeek === "Saturday"){
            priceWithoutRedyce = groupCount * 15.60;
            priceFor10 = 10 * 15.60;

        }else if(DayOfWeek === "Sunday"){
            priceWithoutRedyce = groupCount * 16;
            priceFor10 = 10 * 16;
        }

        if(groupCount >= 100){
            priceWithoutRedyce = priceWithoutRedyce - priceFor10;
        }


    } else if(typeOfGroup === "Regular"){

        if(DayOfWeek === "Friday") {
            priceWithoutRedyce = groupCount * 15;

        }else if(DayOfWeek === "Saturday"){
            priceWithoutRedyce = groupCount * 20;

        }else if(DayOfWeek === "Sunday"){
            priceWithoutRedyce = groupCount * 22.50;
        }

        if(groupCount >= 10 && groupCount <= 20){
            priceWithoutRedyce = priceWithoutRedyce * 0.95;
        }

    }

    console.log(`Total price: ${priceWithoutRedyce.toFixed(2)}`)

}

