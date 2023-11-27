function solve(num){
    const digit = Array.from(String(num), Number);
    const isConsistent = new Set(digit).size === 1;
    const sum = digit.reduce(function (total, num) {
        return total + num;
    }, 0);

     console.log(isConsistent);
     console.log(sum);
}
