 function printMatrix(number) {

    function printRow(num){
        
        let singleRow = (num.toString() + " ").repeat(num);
        return singleRow;
    }

    for(let i = 1; i <= number; i++){
        console.log(printRow(number));
    }


 }

printMatrix(7);