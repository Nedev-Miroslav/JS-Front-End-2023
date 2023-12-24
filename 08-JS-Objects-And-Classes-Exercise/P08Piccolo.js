function chechCars(input) {
    const parking = new Set();
  
    input.forEach((entry) => {
      const [command, number] = entry.split(", ");
  
      if (command === "IN") {
        parking.add(number);
      } else if (command === "OUT") {
        parking.delete(number);
      }
    });
  
    const carNumbers = Array.from(parking).sort();
  
    console.log(carNumbers.join("\n"));
  }


// Друго решение на задачата
// function chechCars(input) {

//     let parkingLot = [];

//     for (const car of input) {

//         let [direction, number] = car.split(", ");

//         if (direction === "IN" && !parkingLot.includes(number)) {
//             parkingLot.push(number);
//         } else if (direction === "OUT" && parkingLot.includes(number)) {
//             let index = parkingLot.indexOf(number);
//             parkingLot.splice(index, 1);
//         }

//     }

//     if (parkingLot.length > 0) {

//         let sorted = parkingLot.sort((a, b) => {
//             return a.localeCompare(b);
//         });

//         console.log(sorted.join("\n"));

//     } else {
//         console.log("Parking Lot is Empty");
//     }

// }

chechCars(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
);