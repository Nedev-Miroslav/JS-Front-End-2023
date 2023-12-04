function revelWords(worrds, text) {

    let arrWords = worrds.split(", ");
    let arrText = text.split(" ");

    for (let i = 0; i < arrWords.length; i++) {
        for (let j = 0; j < arrText.length; j++) {

            if (arrText[j].includes("*") && arrWords[i].length === arrText[j].length) {
                arrText[j] = arrWords[i];
            }
        }
    }

    console.log(arrText.join(" "))
}

revelWords('great, learning',
'softuni is ***** place for ******** new programming languages');
