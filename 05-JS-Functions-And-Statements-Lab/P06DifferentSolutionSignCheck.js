function signCheck(n1, n2, n3) {
    let numArr = [];
    numArr.push(n1);
    numArr.push(n2);
    numArr.push(n3);

    let negativNumCount = 0;

    for (let current of numArr) {
          if(current < 0){
            negativNumCount += 1;
        }
    }

    if (negativNumCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);