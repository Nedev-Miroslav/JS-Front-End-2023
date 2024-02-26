const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadHistoryButton = document.getElementById("load-history");
const historyList = document.getElementById("list");
const formElement = document.querySelector("#form form");
const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");
const formAddButton = document.getElementById("add-weather");
const formEditButton = document.getElementById("edit-weather");


loadHistoryButton.addEventListener("click", loadHistory);



formEditButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const weatherId = formElement.dataset.weather;

    const weatherData = {
        _id:  weatherId,
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value
    };
   
    fetch(`${baseUrl}/${weatherId}`, {
        method: "PUT",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: JSON.stringify(weatherData)
    })
    .then(loadHistory)
    .then(() => {

        formAddButton.removeAttribute("disabled");
        formEditButton.setAttribute("disabled", "disabled")

        clearForm();

        delete formElement.dataset.weather;
    })
    
    
});

function loadHistory(){
    return fetch(baseUrl)
     .then(res => res.json())
     .then(result => {
         renderAllHistory(Object.values(result));
     });
 }

 function renderAllHistory(allHistory) {
    historyList.innerHTML = "";

    allHistory
    .map(renderHistory)
    .forEach(historyElement => historyList.appendChild(historyElement))
}

function renderHistory(history){
    const container = document.createElement("div");
    container.className = "container";

    const h2Element = document.createElement("h2");
    h2Element.textContent = history.location;

    const h3DateElement = document.createElement("h3");
    h3DateElement.textContent = history.date;

    const h3temperatureElement = document.createElement("h3");
    h3temperatureElement.setAttribute("id", "celsius");
    h3temperatureElement.textContent = history.temperature;

    const divButtons = document.createElement("div");
    divButtons.className = "buttons-container";

    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        locationInput.value = history.location;
        temperatureInput.value = history.temperature;
        dateInput.value = history.date;

        container.remove();

        formEditButton.removeAttribute("disabled");
        formAddButton.setAttribute("disabled", "disabled")


        formElement.dataset.weather = history._id;


    })

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        fetch(`${baseUrl}/${history._id}`, {
            method: "DELETE"
        })
        .then(loadVacantions)
    });


    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3temperatureElement);
    container.appendChild(divButtons);


    return container;

}

formAddButton.addEventListener("click", (e) => {
    
    e.preventDefault();

    const newWeather = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value
    };
    console.log(newWeather)
    fetch(baseUrl, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: JSON.stringify(newWeather)
    })
        .then(loadHistory)
 
        clearForm();
}); 




function clearForm(){
    locationInput.value = "";
    temperatureInput.value = "";
    dateInput.value = "";
}

