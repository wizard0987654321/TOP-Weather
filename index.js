async function getInput(input) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4acb4aaef6284deaa6d230155242003&q=${input}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
}

const showButton = document.getElementById("showButton");

showButton.addEventListener("click", function() {
    const inputField = document.getElementById("cityInput");
    const city = inputField.value;
    getInput(city);
});