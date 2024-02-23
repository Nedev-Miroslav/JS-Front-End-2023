function solve(input) {
    let n = Number(input.shift());

    let ridersInfoObj = {};

    for (let i = 0; i < n; i++) {

        let currentRiderDetails = input.shift();
        let [rider, initialCpacity, initioalPosition] = currentRiderDetails.split("|")

        if (initialCpacity > 100) {
            initialCpacity = 100
        }

        ridersInfoObj[rider] = [initialCpacity, initioalPosition];

     
    }

    let currentCommand = "";

    while (currentCommand !== "Finish" && currentCommand !== undefined) {
        let command = currentCommand.split(" - ")[0];

        if (command === "StopForFuel") {

            let rider = currentCommand.split(" - ")[1];
            let minimumFuel = Number(currentCommand.split(" - ")[2]);
            let changedPosition = Number(currentCommand.split(" - ")[3]);

            let riderFuelAmount = Number(ridersInfoObj[rider][0]);


            if (riderFuelAmount < minimumFuel) {

                ridersInfoObj[rider][1] = changedPosition

                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);

            } else {
                console.log(`${rider} does not need to stop for fuel!`)
            }


        } else if (command === "Overtaking") {
            let rider1Name = currentCommand.split(" - ")[1];
            let rider2Name = currentCommand.split(" - ")[2];

            let position1 = ridersInfoObj[rider1Name][1];
            let position2 = ridersInfoObj[rider2Name][1];

            if (position1 < position2) {
                ridersInfoObj[rider1Name][1] = position2;
                ridersInfoObj[rider2Name][1] = position1;

                console.log(`${rider1Name} overtook ${rider2Name}!`)

            }



        } else if (command === "EngineFail") {
            let rider = currentCommand.split(" - ")[1];
            let laps = Number(currentCommand.split(" - ")[2]);
            delete ridersInfoObj[rider];

            console.log(`${rider} is out of the race because of a technical issue, ${laps} laps before the finish.`)


        }


        currentCommand = input.shift();

    }

    for (const entries of Object.entries(ridersInfoObj)) {
        const [key, value] = entries;
        console.log(key);
        console.log(`  Final position: ${value[1]}`)
    }




}

solve(["3",
    "Valentino Rossi|110|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])




    // Друго решение на задачата
    // function solve(input) {
    //     let n = Number(input.shift());
    //     let ridersInfoObj = {};
      
    //     for (let i = 0; i < n; i++) {
    //       let currentRiderDetails = input.shift();
    //       let [rider, initialCapacity, initialPosition] = currentRiderDetails.split("|");
      
    //       if (initialCapacity > 100) {
    //         initialCapacity = 100;
    //       }
      
    //       ridersInfoObj[rider] = {
    //         capacity: Number(initialCapacity),
    //         position: Number(initialPosition),
    //       };
    //     }
      
    //     let currentCommand = input.shift();
      
    //     while (currentCommand !== "Finish" && currentCommand !== undefined) {
    //       let [command, ...params] = currentCommand.split(" - ");
      
    //       if (command === "StopForFuel") {
    //         let [rider, minimumFuel, changedPosition] = params;
    //         let riderFuelAmount = ridersInfoObj[rider].capacity;
      
    //         if (riderFuelAmount < Number(minimumFuel)) {
    //           ridersInfoObj[rider].position = Number(changedPosition);
    //           console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
    //         } else {
    //           console.log(`${rider} does not need to stop for fuel!`);
    //         }
    //       } else if (command === "Overtaking") {
    //         let [rider1Name, rider2Name] = params;
    //         let rider1 = ridersInfoObj[rider1Name];
    //         let rider2 = ridersInfoObj[rider2Name];
      
    //         if (rider1.position < rider2.position) {
    //           [rider1.position, rider2.position] = [rider2.position, rider1.position];
    //           console.log(`${rider1Name} overtook ${rider2Name}!`);
    //         }
    //       } else if (command === "EngineFail") {
    //         let [rider, laps] = params;
    //         delete ridersInfoObj[rider];
    //         console.log(`${rider} is out of the race because of a technical issue, ${laps} laps before the finish.`);
    //       }
      
    //       currentCommand = input.shift();
    //     }
      
    //     for (const [rider, info] of Object.entries(ridersInfoObj)) {
    //       console.log(`${rider}\n  Final position: ${info.position}`);
    //     }
    //   }