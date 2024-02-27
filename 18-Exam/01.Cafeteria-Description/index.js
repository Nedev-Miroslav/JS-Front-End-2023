function solve(input) {

    let n = Number(input.shift());

    let baristaObj = {};

    for (let i = 0; i < n; i++) {
        let currentBaristaDetails = input.shift();
        let [barista, shift, coffeeType] = currentBaristaDetails.split(" ");
        let coffeeTypeArr = coffeeType.split(",");

        baristaObj[barista] = [shift, coffeeTypeArr];

    }
    // console.log(baristaObj["Alice"][1].includes("Espresso"))

//"Prepare / {barista name} / {shift} / {coffee type}"

    let currentCommand = input.shift();

    while (currentCommand !== "Closed") {

        let command = currentCommand.split(" / ")[0];

        if (command === "Prepare") {
            let name = currentCommand.split(" / ")[1];
            let currShift = currentCommand.split(" / ")[2];
            let CofType = currentCommand.split(" / ")[3];
        

            let barristShift = baristaObj[name][0];
            
            if(currShift === barristShift && baristaObj[name][1].includes(CofType)) {
                console.log(`${name} has prepared a ${CofType} for you!`)

            } else{
                console.log(`${name} is not available to prepare a ${CofType}.`)
            }


        }else if(command === "Change Shift") {
            let name = currentCommand.split(" / ")[1];
            let newShift = currentCommand.split(" / ")[2];

            baristaObj[name][0] = newShift;
            console.log(`${name} has updated his shift to: ${baristaObj[name][0]}`)

        }else if(command === "Learn") {
            let name = currentCommand.split(" / ")[1];
            let newCofType = currentCommand.split(" / ")[2];

            if(baristaObj[name][1].includes(newCofType)){
                console.log(`${name} knows how to make ${newCofType}.`)
            } else{
                baristaObj[name][1].push(newCofType);
                console.log(`${name} has learned a new coffee type: ${newCofType}.`)
            }



        }





        currentCommand = input.shift();
    }


    for (const entries of Object.entries(baristaObj)) {
        const [key, value] = entries;
        console.log(`Barista: ${key}, Shift: ${value[0]}, Drinks: ${value[1].join(", ")}`)

    }



}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);