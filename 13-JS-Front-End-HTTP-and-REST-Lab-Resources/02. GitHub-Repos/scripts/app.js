function loadRepos() {
   fetch("https://api.github.com/users/testnakov/repos")
   .then((res) => res.json())
   .then((result) => {
   for (let i = 0; i < result.length; i++) {
      let p = document.createElement("p")
      p.textContent = result[i].name;
      let div = document.getElementById("res");
      div.appendChild(p);
      
   }
   
   
   document.getElementsByTagName("button")[0].disabled = true;

   
   })
   .catch((error) => console.error(error));



}