function solve(speed, road) {
    if (road === "residential") {
        let diff = speed - 20;
        if(speed <= 20){
            console.log(`Driving ${speed} km/h in a 20 zone`)
        } else if(diff <= 20 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - speeding`)
        } else if(diff <= 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - excessive speeding`)
        } else if(diff > 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - reckless driving`)
        }

    } else if (road === "city") {
        let diff = speed - 50;
        if(speed <= 50){
            console.log(`Driving ${speed} km/h in a 50 zone`)
        } else if(diff <= 20 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - speeding`)
        } else if(diff <= 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - excessive speeding`)
        } else if(diff > 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - reckless driving`)
        }

    } else if (road === "interstate") {
        let diff = speed - 90;
        if(speed <= 90){
            console.log(`Driving ${speed} km/h in a 90 zone`)
        } else if(diff <= 20 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - speeding`)
        } else if(diff <= 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - excessive speeding`)
        } else if(diff > 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - reckless driving`)
        }

    } else if (road === "motorway") {

        let diff = speed - 130;
        if(speed <= 130){
            console.log(`Driving ${speed} km/h in a 130 zone`)
        } else if(diff <= 20 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - speeding`)
        } else if(diff <= 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - excessive speeding`)
        } else if(diff > 40 ) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - reckless driving`)
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');


// Друго решение на тази задача
// function solve(speed, area) {
//     const speedLimits = {
//         residential: 20,
//         city: 50,
//         interstate: 90,
//         motorway: 130,
//     };

//     const currentSpeedLimit = speedLimits[area];
//     const speedOverLimit = speed - currentSpeedLimit;

//     if (speedOverLimit <= 0) {
//         console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`)
//         return;
//     }

//     const speedingMessage = speedOverLimit <= 20 
//     ? "speeding" 
//     : speedOverLimit <= 40 
//     ? "excessive speeding" 
//     : "reckless driving";
//     console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingMessage}`)
// }





