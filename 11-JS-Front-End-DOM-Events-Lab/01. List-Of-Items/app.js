function addItem() {
   let currentAddElement = document.getElementById("newItemText").value;
   let ulToAddElements = document.getElementById("items");

   let createElement = document.createElement("li");
   createElement.textContent = currentAddElement;
   ulToAddElements.appendChild(createElement);

   
}

// дриго решение
// function addItem() {
//     let inputElement = document.getElementById('newItemText');
//     let itemsElement = document.getElementById('items');

//     let liElement = document.createElement('li');
//     liElement.textContent = inputElement.value;

//     itemsElement.appendChild(liElement);
// }