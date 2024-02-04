function loadCommits() {
    const username = document.querySelector("#username").value;
    const repo = document.querySelector("#repo").value;

    if(!username || !repo){
        console.log("error")
        return
    }

    const list = document.querySelector("ul");
    
    list.innerHTML = ""; // зачистваме за да не се добавя всеки път при натискане на бутона.

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((res) => res.json())
    .then((commits) => {
        commits.forEach((commitObj) => {
        const item = document.createElement("li");
        item.textContent = commitObj.commit.message;
    
        list.appendChild(item);
    
    });
  });
 // document.getElementsByTagName("button")[0].disabled = true; // друг начин за зачистване за да не се добавя всеки път при натискане на бутона.
}



// решение на задачата с Async / Await
// async function loadCommits() {
//         const username = document.querySelector("#username").value;
//         const repo = document.querySelector("#repo").value;
    
//         if(!username || !repo){
//             console.log("error")
//             return
//         }
    
//         const list = document.querySelector("ul");
           
    
//         const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)

//         const commits = await response.json();
        
//             commits.forEach((commitObj) => {
//             const item = document.createElement("li");
//             item.textContent = commitObj.commit.message;
        
//             list.appendChild(item);
        
//         });
   
//      document.getElementsByTagName("button")[0].disabled = true;
//     }
    

// решение на задачата с Async / Await още по-съкратено
    // async function loadCommits() {
    //     const username = document.querySelector("#username").value;
    //     const repo = document.querySelector("#repo").value;
    
    //     if(!username || !repo){
    //         console.log("error")
    //         return
    //     }
    
    //     const list = document.querySelector("ul");
           
    
    //     const commits = await (
    //     await fetch(`https://api.github.com/repos/${username}/${repo}/commits`))
    //     .json();
        
    //         commits.forEach((commitObj) => {
    //         const item = document.createElement("li");
    //         item.textContent = commitObj.commit.message;
        
    //         list.appendChild(item);
        
    //     });
   
    //  document.getElementsByTagName("button")[0].disabled = true;
    // }
    