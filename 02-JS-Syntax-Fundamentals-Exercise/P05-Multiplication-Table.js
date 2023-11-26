function solve (num){
    for (let index = 1; index <= 10; index++) {
        let product = num * index;
        
        console.log(`${num} X ${index} = ${product}`)
    }


}

solve(6);