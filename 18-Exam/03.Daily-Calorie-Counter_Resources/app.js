let baseUrl = 'http://localhost:3030/jsonstore/tasks';

let loadMealsButton = document.getElementById("load-meals");
let mealsList = document.getElementById("list");

let formElement = document.querySelector("#form form");

let foodInput = document.getElementById("food");
let timeInput = document.getElementById("time");
let caloriesInput = document.getElementById("calories");

let formAddMealButton = document.getElementById("add-meal");
let formEditMealButton = document.getElementById("edit-meal");


loadMealsButton.addEventListener("click", loadMeals);

function loadMeals() {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            renderAllMeals(Object.values(result));
        });
}

function renderAllMeals(allMeals) {
    mealsList.innerHTML = "";

    allMeals
        .map(renderSingleMeal)
        .forEach(m => mealsList.appendChild(m))
}

function renderSingleMeal(meal) {
    let container = document.createElement("div");
    container.className = "meal";

    let h2 = document.createElement("h2");
    h2.textContent = meal.food;

    let h3TimeElement = document.createElement("h3");
    h3TimeElement.textContent = meal.time;

    let h3CaloriesElement = document.createElement("h3");
    h3CaloriesElement.textContent = meal.calories;

    let divButtons = document.createElement("div");
    divButtons.setAttribute("id", "meal-buttons");

    let changeButton = document.createElement("button");
    changeButton.className = "change-meal";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;

        container.remove();

        formEditMealButton.removeAttribute("disabled");
        formAddMealButton.setAttribute("disabled", "disabled")


        formElement.dataset.meal = meal._id;


    })

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-meal";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        fetch(`${baseUrl}/${meal._id}`, {
            method: "DELETE"
        })
            .then(loadMeals)
    });


    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(h3TimeElement);
    container.appendChild(h3CaloriesElement);
    container.appendChild(divButtons);


    return container;

}


formAddMealButton.addEventListener("click", (e) => {

    e.preventDefault();

    const newMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)

    clearForm();
});


formEditMealButton.addEventListener("click", (e) => {
    e.preventDefault();

    let mealId = formElement.dataset.meal;

    const mealData = {
        _id: mealId,
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(`${baseUrl}/${mealId}`, {
        method: "PUT",
        body: JSON.stringify(mealData)
    })
        .then(loadMeals)
        .then(() => {

            formAddMealButton.removeAttribute("disabled");
            formEditMealButton.setAttribute("disabled", "disabled")

            clearForm();

            delete formElement.dataset.meal;
        })


});




function clearForm() {
    foodInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";
}