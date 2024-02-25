window.addEventListener("load", solve);

function solve() {

  let formElement = document.querySelector("form");
  let playerInput = document.getElementById("player");
  let scoreInput = document.getElementById("score");
  let roundInput = document.getElementById("round");

  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", solvingFun);

  function solvingFun() {
    if (playerInput.value == "" || scoreInput.value == "" || roundInput.value == "") {
      return;
    }

    let sureListELement = document.getElementById("sure-list");
    let scoreboardList = document.getElementById("scoreboard-list");




    let li = document.createElement('li');
    li.classList.add("dart-item");

    let article = document.createElement("article");

    let name = document.createElement("p");
    name.textContent = playerInput.value;

    let score = document.createElement("p");
    score.textContent = `Score: ${scoreInput.value}`;

    let round = document.createElement("p");
    round.textContent = `Round: ${roundInput.value}`;


    article.appendChild(name);
    article.appendChild(score);
    article.appendChild(round);

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", edit);

    let okBtn = document.createElement("button");
    okBtn.classList.add("btn");
    okBtn.classList.add("ok");
    okBtn.textContent = "ok";
    okBtn.addEventListener("click", ok);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(okBtn);



    sureListELement.appendChild(li)



    playerInput.value = "";
    scoreInput.value = "";
    roundInput.value = "";

    addBtn.disabled = true;

    // editBtn.addEventListener("click", edit);
    // okBtn.addEventListener("click", ok);

    function edit() {
      playerInput.value = document.querySelectorAll("article p")[0].textContent;
      scoreInput.value = document.querySelectorAll("article p")[1].textContent.split(": ")[1];
      roundInput.value = document.querySelectorAll("article p")[2].textContent.split(": ")[1];

      sureListELement.removeChild(li);
      addBtn.disabled = false;
    }

    function ok() {
      li.removeChild(editBtn);
      li.removeChild(okBtn);
      sureListELement.removeChild(li);
      scoreboardList.appendChild(li);
      addBtn.disabled = false;
    }

    let buttonRefresh = document.querySelector("#players-container div div button");
    buttonRefresh.addEventListener("click", () => {
      window.location.reload();
    })

  }

}
