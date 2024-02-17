// for (let index = 0; index <= 5; index++) {
//     setTimeout(function () {
//         console.log(index)
//     }, index * 1000);

// }


for (var index = 0; index <= 5; index++) {
    setTimeout(function () {
        console.log(index)
    }, index * 1000);

}

// Това поведение във втория случай се получава тъй като var хойства и се качва най-отгоре и 
// започва да съществува извън обсега на for цикъла. 