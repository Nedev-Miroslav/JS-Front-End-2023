function solve(arr){
  
    const sum = arr.reduce(function (acc, curr) {
           return acc + curr;
          }, 0);

          console.log(sum);
}

solve([6, 5, 6,]);