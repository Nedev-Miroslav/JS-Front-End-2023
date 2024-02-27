window.addEventListener("load", solve);

function solve() {

    let formElement = document.querySelector("form");
    let expensetypeInput = document.getElementById("expense");
    let amountInput = document.getElementById("amount");
    let dateInput = document.getElementById("date");


    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", solvingFun);

    function solvingFun() {
        if (expensetypeInput.value == "" || amountInput.value == "" || dateInput.value == "") {
            return;
        }

        let previewELement = document.getElementById("preview-list");
        let expensesListElement = document.getElementById("expenses-list");




        let li = document.createElement('li');
        li.classList.add("expense-item");

        let article = document.createElement("article");

        let type = document.createElement("p");
        type.textContent = `Type: ${expensetypeInput.value}`;
      

        let amount = document.createElement("p");
        amount.textContent = `Amount: ${amountInput.value}$`;
        let temp = amountInput.value;

        let date = document.createElement("p");
        date.textContent = `Date: ${dateInput.value}`;


        article.appendChild(type);
        article.appendChild(amount);
        article.appendChild(date);

        let divButton = document.createElement("div");
        divButton.classList.add("buttons");

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


        divButton.appendChild(editBtn);
        divButton.appendChild(okBtn);

        li.appendChild(article);
        li.appendChild(divButton);



        previewELement.appendChild(li)



        expensetypeInput.value = "";
        amountInput.value = "";
        dateInput.value = "";

        addBtn.disabled = true;

   

    function edit() {
        expensetypeInput.value = document.querySelectorAll("article p")[0].textContent.split(": ")[1];
        amountInput.value = temp;
        dateInput.value = document.querySelectorAll("article p")[2].textContent.split(": ")[1];
  
        previewELement.removeChild(li);
        addBtn.disabled = false;
      }



      function ok() {
        li.removeChild(divButton);
        previewELement.removeChild(li);
        expensesListElement.appendChild(li);
        addBtn.disabled = false;
      }


      let buttonRefresh = document.querySelector(".delete");
      buttonRefresh.addEventListener("click", () => {
        window.location.reload();
      })


    }
}