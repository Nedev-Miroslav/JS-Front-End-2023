function solve(num) {
    	let typeOfInput = typeof(num);

    if (typeOfInput === "number") {
        let resulet = Math.pow(num, 2) * Math.PI
        console.log(resulet.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }

}

solve(6.7)
solve("soadj")
solve(undefined)