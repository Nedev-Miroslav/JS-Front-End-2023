function toggle() {
    let buttonElement = document.getElementsByClassName("button")[0];
    let extraTextElement = document.querySelector("#extra")



    if (buttonElement.textContent === "More") {
        buttonElement.textContent = "Less";
        extraTextElement.style.display = "block";
    } else if (buttonElement.textContent === "Less") {
        buttonElement.textContent = "More";
        extraTextElement.style.display = "none";
    }

}