function extractText() {
   const items = document.getElementsByTagName("li");
   const result = [];

   for (const item of Array.from(items)) {
        result.push(item.textContent);

   }
   const textAreaElement = document.getElementById("result");
   textAreaElement.textContent = result.join("\n");

}

// Друго решение
// function extractText() {
//     let itemNodes =
//         document.querySelectorAll("ul#items li");
//     let textarea =
//         document.querySelector("#result");
//     for (let node of itemNodes) {
//         textarea.value += node.textContent + "\n";
//     }
// }


// Друго решение
// function extractText() {
//     const listItem = Array.from(document.querySelectorAll("li"));
//     const text = listItem.map((i) => i.textContent).join("\n");
//     document.querySelector("textarea").value = text;

// }