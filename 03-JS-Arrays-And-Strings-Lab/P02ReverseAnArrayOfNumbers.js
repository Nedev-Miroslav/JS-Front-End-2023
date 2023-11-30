function reverseArrayOfNumbers(index, input){
    let result = input.slice(0, index).reverse().join(" ");
    console.log(result);
}

// друг начин за решение
// function reverseArrayOfNumbers(index, input){
//     let subArr = input.slice(0, index);
//     subArr.reverse()
//     let result = "";
//     for (let currentNum of subArr) {
//         result += `${currentNum} `;
//     }
//     console.log(result);
// }


 reverseArrayOfNumbers(4, [-1, 20, 99, 5]);