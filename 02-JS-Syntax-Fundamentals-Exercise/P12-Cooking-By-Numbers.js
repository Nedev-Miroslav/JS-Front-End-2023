function solve(number, ...commands) {
    let sum = Number(number);


    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];

        switch (command) {
            case "chop":
                sum /= 2;
                break;
            case "dice":
                sum = Math.sqrt(sum);
                break;
            case "spice":
                sum += 1;
                break;
            case "bake":
                sum *= 3;
                break;
            case "fillet":
                sum -= sum * 0.2;
                break;

        }
        console.log(sum);

    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')





// Друго решение
// function solve(sum, op1, op2, op3, op4, op5) {
//     let arrOp = [];
//     arrOp.push(op1);
//     arrOp.push(op2);
//     arrOp.push(op3);
//     arrOp.push(op4);
//     arrOp.push(op5);

//     for (let index = 0; index < arrOp.length; index++) {
//         let currentOperation = arrOp[index];
//         switch (currentOperation) {
//             case "chop":
//                 sum /= 2;
//                 break;
//             case "dice":
//                 sum = Math.sqrt(sum);
//                 break;
//             case "spice":
//                 sum += 1;
//                 break;
//             case "bake":
//                 sum *= 3;
//                 break;
//             case "fillet":
//                 sum -= sum * 0.2;
//                 break;

//         }
//         console.log(sum);

//     }
// }

