function solve(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log("yes")
    } else{
        console.log("no")
    }
}


solve(1984);


// Решение използвайки DATE
// function solve(year) {
//     let date = new Date(year, 1, 1);
//     date.setMonth(date.getMonth() + 1);
//     date.setDate(date.getDate() - 1);

//     if (date.getDate() === 29) {
//         console.log("yes")
//     } else {
//         console.log("no")
//     }

// }

