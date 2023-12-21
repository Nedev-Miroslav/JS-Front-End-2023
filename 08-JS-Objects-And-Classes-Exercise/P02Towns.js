function printTowns(input) {
    for (const line of input) {

        const townObj = {};

        let [town, latitude, longitude] = line.split(" | ");

        townObj.town = town;
        townObj.latitude = Number(latitude).toFixed(2);
        townObj.longitude = Number(longitude).toFixed(2);

        console.log(townObj);
    }

}

printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

