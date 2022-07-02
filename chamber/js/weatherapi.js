// select HTML elements to edit
const currentTemp = document.querySelector("#weather-temperature");
const speedWind = document.querySelector("#weather-wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-condition");

// const url = "https://api.openweathermap.org/data/3.0/weather?id=3448439q=Fairbanks&units=imperial&appid=462a7178d36c51e0635a903f65415fe0"
// key=462a7178d36c51e0635a903f65415fe0
const url =
  "https://api.openweathermap.org/data/2.5/weather?id=3448439&units=imperial&appid=462a7178d36c51e0635a903f65415fe0";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    speedWind.textContent = data.wind.speed
  });
