function hashtag(input){
    let regex = /#[A-Za-z]+/gm;
    let matches = input.match(regex);

    for (const word of matches) {
        let wordWithoutHashtag = word.replace("#", "");
        console.log(wordWithoutHashtag);
    }
}

hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');