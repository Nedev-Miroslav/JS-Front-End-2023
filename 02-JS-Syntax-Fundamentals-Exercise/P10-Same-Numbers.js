function solve(num) {

    let strNum = num + "";

    let sum = 0;
    let isSame = true;

    for (let index = 0; index < strNum.length; index++) {
        let current = Number(strNum[index]);
        sum += current;

        if (index + 1 < strNum.length) {
            if (strNum[index] !== strNum[index + 1]) {
                isSame = false;
            }
        }
    }

    console.log(isSame);
    console.log(sum);

} 

// друг начин за решение на задачата
// function solve(num){
//     const digit = Array.from(String(num), Number);
//     const isConsistent = new Set(digit).size === 1;
//     const sum = digit.reduce(function (total, num) {
//         return total + num;
//     }, 0);

//      console.log(isConsistent);
//      console.log(sum);
// }
