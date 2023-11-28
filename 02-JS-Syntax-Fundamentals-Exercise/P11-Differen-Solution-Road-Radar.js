function solve(speed, area) {
    const speedLimits = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130,
    };

    const currentSpeedLimit = speedLimits[area];
    const speedOverLimit = speed - currentSpeedLimit;

    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`)
        return;
    }

    const speedingMessage = speedOverLimit <= 20 
    ? "speeding" 
    : speedOverLimit <= 40 
    ? "excessive speeding" 
    : "reckless driving";
    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingMessage}`)
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
