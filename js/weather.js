const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span");
      const weatherIcon = document.createElement("img");
      const city = document.querySelector("#weather div");
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      document.querySelector("#weather").prepend(weatherIcon);
      weather.innerText = `${Math.round(data.main.temp)}℃`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Coudln't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
