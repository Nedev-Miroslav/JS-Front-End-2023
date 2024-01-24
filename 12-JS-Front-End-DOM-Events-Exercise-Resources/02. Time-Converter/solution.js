function attachEventsListeners() {

    let daysElement = document.getElementById("days");
    let daysButtonElement = document.getElementById("daysBtn");

    let hoursElement = document.getElementById("hours");
    let hoursButtonElement = document.getElementById("hoursBtn");

    let minutesElement = document.getElementById("minutes");
    let minutesButtonElement = document.getElementById("minutesBtn");

    let secondsElement = document.getElementById("seconds");
    let secondsButtonElement = document.getElementById("secondsBtn");



    daysButtonElement.addEventListener("click", dayConvert);
    hoursButtonElement.addEventListener("click", houerConvert);
    minutesButtonElement.addEventListener("click", minuteConvert);
    secondsButtonElement.addEventListener("click", secondConvert);


    function dayConvert() {
        hoursElement.value = daysElement.value * 24;
        minutesElement.value = hoursElement.value * 60;
        secondsElement.value = minutesElement.value * 60;
    }

    function houerConvert() {
       daysElement.value = hoursElement.value / 24;
       minutesElement.value = hoursElement.value * 60;
       secondsElement.value = minutesElement.value * 60;
    }

    function minuteConvert() {
        hoursElement.value = minutesElement.value / 60
        daysElement.value = hoursElement.value / 24;
        secondsElement.value = minutesElement.value * 60;
    }

    function secondConvert() {

        minutesElement.value = secondsElement.value / 60
        hoursElement.value = minutesElement.value / 60
        daysElement.value = hoursElement.value / 24;
    }
}


