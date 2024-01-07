function search() {

   let listItems = Array.from(document.querySelectorAll("li"));
   let searchingText = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let matches = 0;

   for (const li of listItems) { // При разкоментиране на по-долния код този цикъл е излишен

      li.style.fontWeight = ""
      li.style.textDecoration = ""

   }

   for (const li of listItems) {

      // li.style.fontWeight = "" Може и без да се прави горния цикъл изчистването да е тук
      // li.style.textDecoration = ""

      if (li.textContent.includes(searchingText)) {
         matches++;
         li.style.fontWeight = "bold"
         li.style.textDecoration = "underline"
      }

   }

   result.textContent = `${matches} matches found`;

}
