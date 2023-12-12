function showLoadingBar(percent){

    if(percent === 100){
        console.log("100% Complete!");
    } else{
        let countPercent = percent / 10;
        let countPoints = 10 - countPercent;
        let percents = "%".repeat(countPercent);
        let points = ".".repeat(countPoints);
        console.log(`${percent}% [${percents}${points}]`);
        console.log("Still loading...")
    }
}

showLoadingBar(60);