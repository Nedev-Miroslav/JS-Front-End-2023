function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById("searchField");
   let tableRows = document.querySelectorAll("tbody tr");



   function onClick() {

      for (const row of tableRows) {
        // row.className = ""; eдиния вариант
        row.classList.remove("select"); // другия вариант 
      }

        for (const row of tableRows) {
         if(input.value !== "" && row.innerHTML.includes(input.value)){
               row.className = "select";

         }

      }
         input.field = "";
   } 
}