function validatePassworrd(password) {

    function isValidLength(text) {

        return text.length >= 6 && text.length <= 10;
    }

    function isAlphanumeric(text) {
        let regex = /^[A-Za-z0-9]+$/gm;
        let isCorrect = regex.test(text);

        return isCorrect;
    }

    function checkDigits(text) {
        let digitCount = 0;

        for (const digit of text) {
            if (!isNaN(digit)) {
                digitCount++;
            }
        }

        return digitCount >= 2;
    }

    let validLength = isValidLength(password);
    let validNumeric = isAlphanumeric(password)
    let validCount = checkDigits(password);

    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!validNumeric) {
        console.log("Password must consist only of letters and digits")
    }

    if (!validCount) {
        console.log("Password must have at least 2 digits");
    }

    if (validCount && validLength && validNumeric) {
        console.log("Password is valid");
    }

}



validatePassworrd('Ps$s');