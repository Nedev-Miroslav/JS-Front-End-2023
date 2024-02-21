
function solve(commands) {
const carWash = {
    soap: (cleanPercentage) => cleanPercentage + 10,
    water: (cleanPercentage) => cleanPercentage + cleanPercentage * 0.2,
    "vacuum cleaner": (cleanPercentage) =>
      cleanPercentage + cleanPercentage * 0.25,
    mud: (cleanPercentage) => cleanPercentage - cleanPercentage * 0.1,
  };

  let clean = commands.reduce(function(total, current) {
    return carWash[current](total)
  }, 0);


  return `The car is ${clean.toFixed(2)} clean`;


}


// Друго решение на задачата
// function solve(commands) {
     
//     let cleanPercentage = 0;
  
//     for (let index = 0; index < commands.length; index++) {
//       const command = commands[index];
  
//       if (command === "soap") {
//         cleanPercentage += 10;
//       } else if (command === "water") {
//         cleanPercentage += cleanPercentage * 0.2;
//       } else if (command === "vacuum cleaner") {
//         cleanPercentage += cleanPercentage * 0.25;
//       } else if (command === "mud") {
//         cleanPercentage -= cleanPercentage * 0.1;
//       }
//     }
  
//     return `The car is ${cleanPercentage.toFixed(2)} clean`;
//   }
  
  console.log(solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]));