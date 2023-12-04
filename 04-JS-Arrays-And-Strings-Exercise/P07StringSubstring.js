function stringSubstring(word, text) {
    let textArr = text.toLowerCase().split(" ");

    let messageToPrint = `${word} not found!`

    for (let i = 0; i < textArr.length; i++) {

        if (textArr[i] === word) {
            messageToPrint = word;
        }
    }
    console.log(messageToPrint);
}

stringSubstring('python', 'JavaScript is the best programming language');
stringSubstring('javascript', 'JavaScript is the best programming language');