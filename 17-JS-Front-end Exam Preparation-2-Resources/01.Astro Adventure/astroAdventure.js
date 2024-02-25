function solve(input) {
    let n = Number(input.shift());

    let astronautObj = {};

    for (let i = 0; i < n; i++) {

        let currentAstonautDetails = input.shift();
        let [astronaut, oxygenLevel, energyReserves] = currentAstonautDetails.split(" ");

        astronautObj[astronaut] = [oxygenLevel, energyReserves];


    }

    let currentCommand = input.shift();

    while (currentCommand !== "End") {
        let command = currentCommand.split(" - ")[0];

        if (command === "Explore") {
            let astronaut = currentCommand.split(" - ")[1];
            let energyNeeded = Number(currentCommand.split(" - ")[2]);


            let energyAmount = Number(astronautObj[astronaut][1]);

            if (energyAmount >= energyNeeded) {
                astronautObj[astronaut][1] = energyAmount - energyNeeded;
                console.log(`${astronaut} has successfully explored a new area and now has ${astronautObj[astronaut][1]} energy!`)
            } else {
                console.log(`${astronaut} does not have enough energy to explore!`)
            }


        } else if (command === "Refuel") {

            let astronaut = currentCommand.split(" - ")[1];
            let energyAmount = Number(currentCommand.split(" - ")[2]);

            let astroEnergy = Number(astronautObj[astronaut][1]);


            if (astroEnergy + energyAmount > 200) {
                astronautObj[astronaut][1] = 200;
                console.log(`${astronaut} refueled their energy by ${200 - astroEnergy}!`);

            } else {
                astronautObj[astronaut][1] = astroEnergy + energyAmount;
                console.log(`${astronaut} refueled their energy by ${energyAmount}!`);
            }


        } else if (command === "Breathe") {
            let astronaut = currentCommand.split(" - ")[1];
            let oxygenAmount = Number(currentCommand.split(" - ")[2]);

            let astroOxigen = Number(astronautObj[astronaut][0]);

            if (oxygenAmount + astroOxigen > 100) {
                astronautObj[astronaut][0] = 100;
                console.log(`${astronaut} took a breath and recovered ${100 - astroOxigen} oxygen!`)

            } else {
                astronautObj[astronaut][0] = astroOxigen + oxygenAmount;
                console.log(`${astronaut} took a breath and recovered ${oxygenAmount} oxygen!`)
            }

        }



        currentCommand = input.shift();
    }

    for (const entries of Object.entries(astronautObj)) {
        const [key, value] = entries;
        console.log(`Astronaut: ${key}, Oxygen: ${value[0]}, Energy: ${value[1]}`);

    }


}


solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
)