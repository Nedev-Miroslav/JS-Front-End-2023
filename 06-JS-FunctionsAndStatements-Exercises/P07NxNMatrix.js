function printMatrix(num) {

    for (let i = 0; i < num; i++) {

        let currentRow = "";

        for (let j = 0; j < num; j++) {
            currentRow += `${num} `;
        }

        console.log(currentRow);
    }
}

// Друго решение на задачата
//  function printMatrix(number) {

//     function printRow(num){
        
//         let singleRow = (num.toString() + " ").repeat(num);
//         return singleRow;
//     }

//     for(let i = 1; i <= number; i++){
//         console.log(printRow(number));
//     }


//  }

printMatrix(7);