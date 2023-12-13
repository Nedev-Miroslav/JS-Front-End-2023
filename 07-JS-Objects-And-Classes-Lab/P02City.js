function getCityObjectInfo(cityObj) {
    Object.entries(cityObj).forEach(function ([key, value]) {
        console.log(`${key} -> ${value}`);
    });
}


// решение с forIn цикъл
// function getCityObjectInfo (cityObj){
//     for (const key in cityObj) {

//        console.log(key + " -> " + cityObj[key]);
//     }
// }



// решение с forOf цикъл
// function getCityObjectInfo (cityObj){
//     for (const entries of Object.entries(cityObj)) {
//        const [key, value] = entries;
//        console.log(`${key} -> ${value}`);
//     }
// }




// Друг начин за решение на задачата
// function getCityObjectInfo (cityObj){
//     const {name, area, population, country, postCode} = cityObj;

//     console.log(`name -> ${name}`);
//     console.log(`area -> ${area}`);
//     console.log(`population -> ${population}`);
//     console.log(`country -> ${country}`);
//     console.log(`postCode -> ${postCode}`);

// }

getCityObjectInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);