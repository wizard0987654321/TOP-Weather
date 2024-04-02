async function getInput(input) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4acb4aaef6284deaa6d230155242003&q=${input}`, {mode: 'cors'});
    const weatherData = await response.json();
    processData(weatherData);
}

function processData(data) {
    const temperature = document.getElementById("temperature");
    const img = document.querySelector("img");
    let isCelsius = checkUnit();

    if(isCelsius) {
        temperature.textContent = data.current.feelslike_c + " Celsius";
    } else {
        temperature.textContent = data.current.feelslike_f + " Farenheit";
    }

    img.src = `https:${data.current.condition.icon}`;
    console.log(data);
}

const showButton = document.getElementById("showButton");

showButton.addEventListener("click", function() {
    const inputField = document.getElementById("cityInput");
    const city = inputField.value;
    getInput(city);
});

function checkUnit() {
    const selectElement = document.getElementById('temperatureUnit');
    const selectedUnit = selectElement.value;
    
    if (selectedUnit === 'celsius') {
      return true;
    } else if (selectedUnit === 'fahrenheit') {
      return false;
    }
  }