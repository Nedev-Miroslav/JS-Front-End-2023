function extract(id) {
    const text = document.getElementById(id).textContent;
    const pattern = /\((.+?)\)/g;
    let result = [];


    let match = pattern.exec(text);

    while (match !== null) {
        result.push(match[1]);
        match = pattern.exec(text);
    }


    return result.join('; ');
}


// друго решение
// function extract(id) {
//     let text = document.getElementById(id).textContent;
//     const pattern = /\((.+?)\)/g;
//     let result = text.match(pattern);
//     return result.join('; ');
// }