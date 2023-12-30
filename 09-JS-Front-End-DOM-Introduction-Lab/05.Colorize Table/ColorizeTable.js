function colorize() {
    const table = document.getElementsByTagName("tr");

    let index = 0;
    for (const current of table) {
        index++;
        if (index % 2 === 0) {
            current.style.background = 'Teal';
        }

    }

}



// друго решение в Judge не работи защото Judge не поддържа forЕаch на HTML елементите
// function colorize() {
//     const table = document.querySelectorAll("tr:nth-of-type(2n) td");

//     table.forEach(x => {
//         x.style.background = "Teal";
//     });
// }



// Друго решение
// function colorize() {
//     const rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
//     rows.forEach((row) => {
//         row.style.background = 'Teal';
//     });

// }