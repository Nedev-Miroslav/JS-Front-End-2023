// Авторско решение
window.addEventListener("load", solve);

function solve() {
  let formElement = document.querySelector("form");
  let taskTitleInput = document.getElementById("student");
  let taskCategoryInput = document.getElementById("university");
  let taskContentInput = document.getElementById("score");

  let publishBtn = document.getElementById("next-btn");
  publishBtn.addEventListener("click", publish);

  function publish() {
    if (
      taskTitleInput.value == "" ||
      taskCategoryInput.value == "" ||
      taskContentInput.value == ""
    ) {
      return;
    }
    let reviewList = document.getElementById("preview-list");
    let publishedList = document.getElementById("candidates-list");

    let taskLiElement = document.createElement("li");
    taskLiElement.classList.add("application");

    let taskArticleElement = document.createElement("article");

    let titleHeadingElement = document.createElement("h4");
    titleHeadingElement.textContent = taskTitleInput.value;
    let taskTitle = taskTitleInput.value;
    let categoryPElement = document.createElement("p");
    categoryPElement.textContent = `University:${" "}${taskCategoryInput.value}`;
    let taskCategory = taskCategoryInput.value;

    let contentPElement = document.createElement("p");
    contentPElement.textContent = `Score:${" "}${taskContentInput.value}`;
    let taskContent = taskContentInput.value;

    taskArticleElement.appendChild(titleHeadingElement);
    taskArticleElement.appendChild(categoryPElement);
    taskArticleElement.appendChild(contentPElement);

    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", edit);

    let postBtn = document.createElement("button");
    postBtn.classList.add("action-btn");
    postBtn.classList.add("apply");
    postBtn.textContent = "apply";
    postBtn.addEventListener("click", post);

    taskLiElement.appendChild(taskArticleElement);
    taskLiElement.appendChild(editBtn);
    taskLiElement.appendChild(postBtn);

    reviewList.appendChild(taskLiElement);
    formElement.reset();
    publishBtn.disabled = true;

    function edit() {
      taskTitleInput.value = taskTitle;
      taskCategoryInput.value = taskCategory;
      taskContentInput.value = taskContent;

      reviewList.removeChild(taskLiElement);
      publishBtn.disabled = false;
    }

    function post() {
      reviewList.removeChild(taskLiElement);
      taskLiElement.removeChild(postBtn);
      taskLiElement.removeChild(editBtn);
      publishedList.appendChild(taskLiElement);
      publishBtn.disabled = false;
    }
  }
}

















// window.addEventListener("load", solve);

// function solve() {

//   let studentNameElement = document.getElementById("student");
//   let universityElement = document.getElementById("university");
//   let scoreElement = document.getElementById("score");

//   let buttonElement = document.getElementById("next-btn");


//   buttonElement.addEventListener("click", addUnofmation);

//   let previewListElement = document.getElementById("preview-list");
//   let candidateListElement = document.getElementById("candidates-list");

//   function addUnofmation() {
//     let buttons = document.getElementsByClassName("action-btn");

//     if (document.getElementById("student").value == "" || document.getElementById("university").value == "" || document.getElementById("score").value == "") {
//       return;
//     }


//     let li = document.createElement('li');
//     li.classList.add("application");

//     let article = document.createElement("article");

//     let h4 = document.createElement("h4");
//     h4.textContent = studentNameElement.value;

//     let uni = document.createElement("p");
//     uni.textContent = `University: ${universityElement.value}`;

//     let score = document.createElement("p");
//     score.textContent = `Score: ${scoreElement.value}`;

//     article.appendChild(h4);
//     article.appendChild(uni);
//     article.appendChild(score);


//     let editBtn = document.createElement("button");
//     editBtn.classList.add("action-btn");
//     editBtn.classList.add("edit");
//     editBtn.textContent = "edit";
//     let applyBtn = document.createElement("button");
//     applyBtn.classList.add("action-btn");
//     applyBtn.classList.add("apply");
//     applyBtn.textContent = "apply";

//     li.appendChild(article);
//     li.appendChild(editBtn);
//     li.appendChild(applyBtn);

//     previewListElement.appendChild(li)

//     // previewListElement.innerHTML = `
//     //   <li class="application">
//     //     <article>
//     //       <h4>${studentNameElement.value}</h4>
//     //       <p>University: ${universityElement.value}</p>
//     //       <p>Score: ${scoreElement.value}</p>
//     //     </article>
//     //     <button class="action-btn edit">edit</button>
//     //     <button class="action-btn apply">apply</button>
//     //   </li>  
//     // `


//     studentNameElement.value = "";
//     universityElement.value = "";
//     scoreElement.value = "";

//     buttonElement.disabled = true;


//     let editButton = buttons[0];
//     let applyButton = buttons[1];

//     editButton.addEventListener("click", editFun);
//     applyButton.addEventListener("click", applyFun)


//     function editFun() {
//       studentNameElement.value = document.querySelector("h4").textContent;
//       universityElement.value = document.querySelectorAll("article p")[0].textContent.substring(12);
//       scoreElement.value = document.querySelectorAll("article p")[1].textContent.substring(7);

//       buttonElement.disabled = false;

//       let toRemove = document.getElementsByClassName("application")[0];

//       toRemove.remove();

//     }


//     function applyFun() {
//       let student = document.querySelector("h4").textContent;
//       let university = document.querySelectorAll("article p")[0].textContent;
//       let currscore = document.querySelectorAll("article p")[1].textContent;

//       let li = document.createElement('li');
//       li.classList.add("application")
//       let article = document.createElement("article");
//       let h4 = document.createElement("h4");
//       h4.textContent = student;

//       let uni = document.createElement("p");
//       uni.textContent = university;

//       let score = document.createElement("p");
//       score.textContent = currscore;

//       article.appendChild(h4);
//       article.appendChild(uni);
//       article.appendChild(score);

//       li.appendChild(article)

//       candidateListElement.appendChild(li)

//       //     candidateListElement.innerHTML = `     
//       //     <li class="application">
//       //     <article>
//       //       <h4>${student}</h4>
//       //       <p>${university}</p>
//       //       <p>${currscore}</p>
//       //     </article>
//       //    </li>  
//       // `

//       let toRemove = document.getElementsByClassName("application")[0];
//       buttonElement.disabled = false;
//       toRemove.remove();
//     }

//   }

// }





