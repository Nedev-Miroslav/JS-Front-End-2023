function addItem() {
   let itemsElements = document.getElementById("items");
   let inputElements = document.getElementById("newItemText");

    let liElement = document.createElement("li");
    liElement.textContent = inputElements.value;

    let deleteELement = document.createElement("a");
    deleteELement.href = "#";
    deleteELement.textContent = "[Delete]";
    deleteELement.addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
    });

    liElement.appendChild(deleteELement);
    itemsElements.appendChild(liElement);

    inputElements.value = "";
}