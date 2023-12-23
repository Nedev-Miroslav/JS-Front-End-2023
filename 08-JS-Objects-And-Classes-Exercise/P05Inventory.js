function inventory(input) {

    let heroes = [];

    for (const heroData of input) {
        let [name, level, items] = heroData.split(" / ")

        let hero = {
            name,
            level: Number(level),
            items: items

        };

        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
 
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}





// function inventory(input) {
//     let objHero = [];

//     input.forEach((element) => {

//         let [heroName, level, itemsList] = element.split(" / ")

//         objHero.push({
//             "Hero": heroName,
//             "level": level,
//             "items": itemsList,
//         });
//     });

//     let sortedHeroes = objHero.sort((a, b) => Number(a.level) - Number(b.level));

//    for (const obj of sortedHeroes) {
//     const {Hero, level, items} = obj;

//         console.log(`Hero: ${Hero}`);
//         console.log(`level => ${level}`);
//         console.log(`items => ${items}`);
//    }
// }




inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)


