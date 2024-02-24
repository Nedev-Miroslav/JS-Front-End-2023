const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsButton = document.getElementById("load-vacations");
const vacationList = document.getElementById("list");
const formElement = document.querySelector("#form form");
const nameInput = document.getElementById("name");
const numDaysInput = document.getElementById("num-days");
const formDateInput = document.getElementById("from-date");
const formAddButton = document.getElementById("add-vacation");
const formEditButton = document.getElementById("edit-vacation");

loadVacationsButton.addEventListener("click", loadVacantions)

formAddButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newVacation = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newVacation)
    })
        .then(loadVacantions)
 
        clearForm();
}); 

formEditButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const vacationId = formElement.dataset.vacation;

    const vacationData = {
        _id:  vacationId,
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value
    };
   
    fetch(`${baseUrl}/${vacationId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vacationData)
    })
    .then(loadVacantions)
    .then(() => {

        formAddButton.removeAttribute("disabled");
        formEditButton.setAttribute("disabled", "disabled")

        clearForm();

        delete formElement.dataset.vacation;
    })
    
    
});

function clearForm(){
    nameInput.value = "";
    numDaysInput.value = "";
    formDateInput.value = "";
}

function loadVacantions(){
   return fetch(baseUrl)
    .then(res => res.json())
    .then(result => {
        renderVacations(Object.values(result));
    });
}

function renderVacations(vacations) {
    vacationList.innerHTML = "";

    vacations
    .map(renderVacation)
    .forEach(vacationElement => vacationList.appendChild(vacationElement))
}

function renderVacation(vacation){
    const container = document.createElement("div");
    container.className = "container";

    const h2Element = document.createElement("h2");
    h2Element.textContent = vacation.name;

    const h3DateElement = document.createElement("h3");
    h3DateElement.textContent = vacation.date;

    const h3DaysElement = document.createElement("h3");
    h3DaysElement.textContent = vacation.days;

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = vacation.name;
        numDaysInput.value = vacation.days;
        formDateInput.value = vacation.date;

        container.remove();

        formEditButton.removeAttribute("disabled");
        formAddButton.setAttribute("disabled", "disabled")


        formElement.dataset.vacation = vacation._id;


    })

    const doneButton = document.createElement("button");
    doneButton.className = "done-btn";
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", () => {
        fetch(`${baseUrl}/${vacation._id}`, {
            method: "DELETE"
        })
        .then(loadVacantions)
    });

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3DaysElement);
    container.appendChild(changeButton);
    container.appendChild(doneButton);

    return container;

}










































// // Авторско решение
// const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

// const endpoints = {
//     update: (id) => `${BASE_URL}/${id}`,
//     delete: (id) => `${BASE_URL}/${id}`,
// }
// const nameElement = document.getElementById("name");
// const dateElement = document.getElementById("from-date");
// const daysNumber = document.getElementById("num-days");

// const confirmedVacations = document.getElementById("confirmed-vacantions");
// const list = document.getElementById('list');

// const addBtn = document.getElementById("add-vacation");
// const editBtn = document.getElementById("edit-vacation");
// const loadBtn = document.getElementById("load-vacations");
// const clearBtn = document.querySelector(".clear-btn");

// function attachEvents() {
//     loadBtn.addEventListener('click', loadBoardEventHandler);
//     addBtn.addEventListener('click', (ev) => createTaskEventHandler(ev));
// }

// function getIdByName(task) {
//     return fetch(BASE_URL)
//         .then(res => res.json())
//         .then(res => Object.entries(res).find(e => e[1].name == task)[1]._id)
// }

// async function loadBoardEventHandler() {
//     clearAllSections();
//     try {
//         const res = await fetch(BASE_URL);
//         const allTasks = await res.json();
//         Object.values(allTasks)
//             .forEach((task) => {
//                 list.innerHTML += `
//                 <div class="container">
//                     <h2>${task.name}</h2>
//                     <h3>${task.date}</h3>
//                     <h3>${task.days}</h3>
//                     <button class="change-btn">Change</button>
//                     <button class="done-btn">Done</button>
//                 </div>`
//                 document.querySelector('.change-btn').addEventListener('click', (ev) => updateCourse(ev));
//                 document.querySelector('.done-btn').addEventListener('click', (ev) => deleteCourse(ev));
//             })
//     } catch (err) {
//         console.error(err);
//     }
// }

// function createTaskEventHandler(ev) {
//     clearAllSections();

//     ev.preventDefault();
//     if(nameElement.value != '' && daysNumber.value != '' && dateElement.value != '') {

//     }
//     const headers = {
//         method: 'POST',
//         body: JSON.stringify({
//             name: nameElement.value,
//             days: daysNumber.value,
//             date: dateElement.value,
//         })
//     };

//     fetch(BASE_URL, headers)
//         .then(loadBoardEventHandler)
//         .catch(console.error);

//     clearAllInputs();
// }

// async function updateCourse(ev) {
//     ev.preventDefault();
//     addBtn.disabled = true;
//     editBtn.disabled = false;
//     const tr = ev.target.parentElement;
//     console.log()
//     const [name, date, days] = Array.from(tr.children);
//     nameElement.value = name.textContent;
//     dateElement.value = date.textContent;
//     daysNumber.value = days.textContent;
   

//     editCourse(name.textContent);
// }

// function editCourse(task) {
//     editBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         const data = { name: nameElement.value, days: daysNumber.value, date: dateElement.value};
//         getIdByName(task)
//             .then((id) => fetch(endpoints.update(id), {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: data.name,
//                     days: data.days,
//                     date: data.date,
//                     _id: id
//                 })
//             }))
//             .then(() => {
//                 nameElement.value = '';
//                 daysNumber.value = '';
//                 dateElement.value = '';
//             })
//             .then(loadBoardEventHandler);
//             addBtn.disabled = false;
//             editBtn.disabled = true;
//     })
    
// }

// function deleteCourse (ev) {
//     const tr = ev.target.parentElement;
//     const task = Array.from(tr.children)[0];

//     getIdByName(task.textContent)
//         .then((id) => fetch(endpoints.delete(id), {
//             method: 'DELETE',
//             headers: { 'content-type': 'application/json' }
//         }))
//         .then(loadBoardEventHandler);
// }

// function clearAllSections() {
//     document.getElementById('list').innerHTML = '';
// }

// function clearAllInputs() {
//     nameElement.value = '';
//     daysNumber.value = '';
//     dateElement.value = '';
// }

// attachEvents();


























// function solve() {
//     let baseUrl = "http://localhost:3030/jsonstore/tasks"
//     let loadButtonElement = document.getElementById("load-vacations");

//     let listWithData = document.getElementById("list");
//     let editButtonElement = document.getElementById("edit-vacation");
//     let addVacantionElement = document.getElementById("add-vacation");


//     let name = document.getElementById("name")
//     let days = document.getElementById("num-days")
//     let date = document.getElementById("from-date")

//     loadButtonElement.addEventListener("click", loadingFunc);
//     addVacantionElement.addEventListener("click", addNewVacantion);


//     function loadingFunc() {
//         listWithData.innerHTML = "";

//         fetch(baseUrl)
//             .then((res) => res.json())
//             .then((result) => {
//                 let obj = Object.entries(result);

//                 for (const entries of obj) {

//                     listWithData.innerHTML += `<div class="container">
//                 <h2>${entries[1].name}</h2>
//                 <h3>${entries[1].date}</h3>
//                 <h3>${entries[1].days}</h3>
//                 <button class="change-btn">Change</button>
//                 <button class="done-btn">Done</button>
//                 </div>`
                
//                 let changeButtomElement = document.querySelector(".change-btn");
//                 changeButtomElement.addEventListener("click", changeFun);
                
//                 let doneButtonElement =  document.querySelector('.done-btn');
//                 doneButtonElement.addEventListener("click", deleteFunc)
            
            
//             }
//                 editButtonElement.disabled = true;



//             });

//     }

//     function addNewVacantion(e) {
//         e.preventDefault()
//         let curName = document.getElementById("name").value;
//         let curDays =document.getElementById("num-days").value;
//         let curDate = document.getElementById("from-date").value;

//         fetch(baseUrl, {
//             method: "POST",
//             body: JSON.stringify(
//                 {
//                     name: curName,
//                     days: curDays,
//                     date: curDate,
//                 }
//             )

           
//         })
          
//             .then(() => {
//                 document.getElementById("name").value = "";
//                 document.getElementById("num-days").value = "";
//                 document.getElementById('from-date').value = '';
            
//                 loadingFunc()
//             })


//      }


//      function changeFun(e){
//         e.preventDefault()
//         addVacantionElement.disabled = true;
//         editButtonElement.disabled = false;

//         let parent = e.target.parentElement;
        
//         let [nameCurr, dateCurr, daysCurr] = Array.from(parent.children)
//         name.value = nameCurr.textContent;
//         date.value = dateCurr.textContent;
//         days.value = daysCurr.textContent;
        
        
//         editButtonElement.addEventListener("click", editFun);
        
        
//         function editFun(ev){
//             let id = "";
            
//             ev.preventDefault()
//             fetch(baseUrl)
//             .then((res) => res.json())
//             .then(result => {
//                let obj = Object.entries(result)
//                for (const entries of obj) {

//                     if(name.value === entries[1].name){
//                         id = entries[0];
//                     }

//                 }
//                 let postURl = `${baseUrl}/${id}`

//                 let headers = {
//                     method: "POST",
//                     body: JSON.stringify({
//                         name: name.value,
//                         days: days.value,
//                         date: date.value,
//                         _id: id
//                     })
//                 }

//                 fetch(postURl, headers)
//                 .then(() => {
//                 document.getElementById("name").value = "";
//                 document.getElementById("num-days").value = "";
//                 document.getElementById('from-date').value = '';
//                 })
//                 .then(() => loadingFunc)
//                 e.preventDefault()
//                 addVacantionElement.disabled = false;
//                 editButtonElement.disabled = true;   
//             })



//         }

//      }

//     function deleteFunc(e){
//         let tr = e.target.parentElement;
//         let name = Array.from(tr.children)[0];
        
//         let id = "";
            
//         e.preventDefault()
//         fetch(baseUrl)
//         .then((res) => res.json())
//         .then(result => {
//            let obj = Object.entries(result)
//            for (const entries of obj) {

//                 if(name.value === entries[1].name){
//                     id = entries[0];
//                 }
//             }
//             });

//             let deleteUrl = `${baseUrl}/${id}`

//             let headers = {
//                 method: "DELETE",
//                 body: JSON.stringify({
//                     name: name.value,
//                     days: days.value,
//                     date: date.value,
//                     _id: id
//                 })
//             }
//             fetch(deleteUrl, headers)
                
//      }

// }

// solve()















// const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

// const endpoints = {
//     update: (id) => `${BASE_URL}/${id}`,
//     delete: (id) => `${BASE_URL}/${id}`,
// }
// const nameElement = document.getElementById("name");
// const dateElement = document.getElementById("from-date");
// const daysNumber = document.getElementById("num-days");

// const confirmedVacations = document.getElementById("confirmed-vacantions");
// const list = document.getElementById('list');

// const addBtn = document.getElementById("add-vacation");
// const editBtn = document.getElementById("edit-vacation");
// const loadBtn = document.getElementById("load-vacations");
// const clearBtn = document.querySelector(".clear-btn");

// function attachEvents() {
//     loadBtn.addEventListener('click', loadBoardEventHandler);
//     addBtn.addEventListener('click', (ev) => createTaskEventHandler(ev));
// }

// function getIdByName(task) {
//     return fetch(BASE_URL)
//         .then(res => res.json())
//         .then(res => Object.entries(res).find(e => e[1].name == task)[1]._id)
// }

// async function loadBoardEventHandler() {
//     clearAllSections();
//     try {
//         const res = await fetch(BASE_URL);
//         const allTasks = await res.json();
//         Object.values(allTasks)
//             .forEach((task) => {
//                 list.innerHTML += `
//                 <div class="container">
//                     <h2>${task.name}</h2>
//                     <h3>${task.date}</h3>
//                     <h3>${task.days}</h3>
//                     <button class="change-btn">Change</button>
//                     <button class="done-btn">Done</button>
//                 </div>`
//                 document.querySelector('.change-btn').addEventListener('click', (ev) => updateCourse(ev));
//                 document.querySelector('.done-btn').addEventListener('click', (ev) => deleteCourse(ev));
//             })
//     } catch (err) {
//         console.error(err);
//     }
// }

// function createTaskEventHandler(ev) {
//     clearAllSections();

//     ev.preventDefault();
//     if(nameElement.value != '' && daysNumber.value != '' && dateElement.value != '') {

//     }
//     const headers = {
//         method: 'POST',
//         body: JSON.stringify({
//             name: nameElement.value,
//             days: daysNumber.value,
//             date: dateElement.value,
//         })
//     };

//     fetch(BASE_URL, headers)
//         .then(loadBoardEventHandler)
//         .catch(console.error);

//     clearAllInputs();
// }

// async function updateCourse(ev) {
//     ev.preventDefault();
//     addBtn.disabled = true;
//     editBtn.disabled = false;
//     const tr = ev.target.parentElement;
//     console.log()
//     const [name, date, days] = Array.from(tr.children);
//     nameElement.value = name.textContent;
//     dateElement.value = date.textContent;
//     daysNumber.value = days.textContent;
   

//     editCourse(name.textContent);
// }

// function editCourse(task) {
//     editBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         const data = { name: nameElement.value, days: daysNumber.value, date: dateElement.value};
//         getIdByName(task)
//             .then((id) => fetch(endpoints.update(id), {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: data.name,
//                     days: data.days,
//                     date: data.date,
//                     _id: id
//                 })
//             }))
//             .then(() => {
//                 nameElement.value = '';
//                 daysNumber.value = '';
//                 dateElement.value = '';
//             })
//             .then(loadBoardEventHandler);
//             addBtn.disabled = false;
//             editBtn.disabled = true;
//     })
    
// }

// function deleteCourse (ev) {
//     const tr = ev.target.parentElement;
//     const task = Array.from(tr.children)[0];

//     getIdByName(task.textContent)
//         .then((id) => fetch(endpoints.delete(id), {
//             method: 'DELETE',
//             headers: { 'content-type': 'application/json' }
//         }))
//         .then(loadBoardEventHandler);
// }

// function clearAllSections() {
//     document.getElementById('list').innerHTML = '';
// }

// function clearAllInputs() {
//     nameElement.value = '';
//     daysNumber.value = '';
//     dateElement.value = '';
// }

// attachEvents();
