function getCityObjectInfo (cityObj){
    for (const key in cityObj) {

       console.log(key + " -> " + cityObj[key]);
    }
}

getCityObjectInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);