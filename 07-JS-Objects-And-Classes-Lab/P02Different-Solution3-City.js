function getCityObjectInfo (cityObj){
    const {name, area, population, country, postCode} = cityObj;

    console.log(`name -> ${name}`);
    console.log(`area -> ${area}`);
    console.log(`population -> ${population}`);
    console.log(`country -> ${country}`);
    console.log(`postCode -> ${postCode}`);

}

getCityObjectInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);