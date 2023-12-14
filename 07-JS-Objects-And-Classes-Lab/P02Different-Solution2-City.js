function getCityObjectInfo (cityObj){
    for (const entries of Object.entries(cityObj)) {
       const [key, value] = entries;
       console.log(`${key} -> ${value}`);
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