function create(words) {

   const contentElement = document.getElementById("content");

   for (const word of words) {
      const div = document.createElement("div");
      const paragraph = document.createElement("p");

      paragraph.textContent = word;
      paragraph.style.display = "none";


      div.appendChild(paragraph);
      contentElement.appendChild(div);


      div.addEventListener("click", () =>
         paragraph.style.display = "block");
   }
}



// Друго решение на задачата
// function create(words) {

//    const contentElement = document.getElementById("content");

//    for (const word of words) {
//       const div = document.createElement("div");
//       const paragraph = document.createElement("p");

//       paragraph.textContent = word;
//       paragraph.style.display = "none";


//       div.appendChild(paragraph);
//       div.addEventListener("click", onclick);

//       contentElement.appendChild(div);

//       function onclick(e) {
//          e.currentTarget.children[0].style.display = "block";
//       }

//    }

// }