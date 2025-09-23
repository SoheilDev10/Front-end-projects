const send = document.querySelector(".submit");
const nameCity = document.querySelector(".city-name");
const cityOutput = document.getElementById("city");
const descOutput = document.getElementById("desc");
const tempOutput = document.getElementById("temp");
const windOutput = document.getElementById("wind");
const myKey = "914f4ab12bc09601148a6b80aeb50e06";

function convertToCel(value) {
    return Math.floor(value - 273.15);
}

function weather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity.value}&appid=${myKey}`)
        .then(response => {
            if (!response.ok)
                throw new Error("The city not found!");
            else
                return response.json();
        })

        .then(data => {
            console.log(data);
            const city = data.name;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const wind = data.wind.speed;
            cityOutput.innerHTML = `City: ${city}`;
            descOutput.innerHTML = `Description: ${description}`;
            tempOutput.innerHTML = `Temprature: ${convertToCel(temp)}C`;
            windOutput.innerHTML = `Wind Speed: ${wind}m/s`;
        })
        .catch(err => {
            console.error(err);
            window.alert("The city not found! Try again.");
        })
}
send.addEventListener('click', weather);

function sendByEnter() {
    nameCity.addEventListener('keydown', (e) => {
        if (e.key === "Enter")
            weather();
    });
}
sendByEnter();