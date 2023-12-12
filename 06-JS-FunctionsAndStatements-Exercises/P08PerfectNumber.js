function checkForPerfectNumber(number) {

    function isPerfectNumber(num) {

        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        let report = "";

        if (sum === num) {
            report = "We have a perfect number!";
        } else {
            report = "It's not so perfect.";
        }

        return report;
    }

    console.log(isPerfectNumber(number));
}


checkForPerfectNumber(6);