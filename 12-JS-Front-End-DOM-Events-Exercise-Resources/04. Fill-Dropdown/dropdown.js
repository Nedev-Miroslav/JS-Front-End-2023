function addItem() {

    let itemElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");
    

    let menuElement = document.getElementById("menu");
    
    if(itemElement.value === ""){
        return;
    }
    
    let createnOption = document.createElement("option");
   

    createnOption.textContent = itemElement.value;
    createnOption.value = valueElement.value;
   

    menuElement.appendChild(createnOption);

    itemElement.value = '';
    valueElement.value = '';
    
}    