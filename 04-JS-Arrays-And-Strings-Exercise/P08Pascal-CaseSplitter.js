function pascalCaseSplitter(input) {
    let regex = /[A-Z][a-z]*/gm;
    let match = input.match(regex);
    console.log(match.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');