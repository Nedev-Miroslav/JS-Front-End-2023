function convertToJSON(name, lastName, hairColor){
    const obj = {
        name,
        lastName,
        hairColor,
    }

    const textJSON = JSON.stringify(obj);
    console.log(textJSON);
}

convertToJSON('George', 'Jones', 'Brown');