function solve(num) {

    let strNum = num + "";

    let sum = 0;

    for (let index = 0; index < strNum.length; index++) {
        let current = Number(strNum[index]);
        sum += current;
    }

    console.log(sum)
}

solve(97561);