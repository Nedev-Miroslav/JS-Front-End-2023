function solve(num1, num2) {
    let n1 = num1;
    let n2 = num2;

    function factorial1(n1) {
        if (n1 === 0) {
            return 1;
        } else {
            return factorial1(n1 - 1) * n1;
        }
    }
    
    function factorial2(n2) {
        if (n2 === 0) {
            return 1;
        } else {
            return factorial2(n2 - 1) * n2;
        }
    }

   let firstFact = factorial1(n1);
   let secontFact = factorial2(n2);

   let result = firstFact / secontFact;

   console.log(`${result.toFixed(2)}`);

}

solve(5, 2);