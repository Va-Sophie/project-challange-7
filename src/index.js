let now = new Date();
function formatDate(day) {
  let DaysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = day.getHours();
  let minutes = day.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let moment = `On ${[DaysofWeek[day.getDay()]]} at ${hours}:${minutes}`;
  return moment;
}
document.getElementById(`data`).innerHTML = `${formatDate(now)}`;
////
//// weather description
function description(element) {
  let description = element.data.weather[0].description;
  document.getElementById("description").innerHTML = `${description}`;
}
//// weather icon
function icon(element) {
  let codeOfIcon = element.data.weather[0].icon;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${codeOfIcon}@2x.png`
    );
}
////
function showTemperature(element) {
  let temp = Math.round(element.data.main.temp);
  document.getElementById(`h3`).innerHTML = `${temp}`;
}
function humidity(element) {
  let humidity = element.data.main.humidity;
  document.getElementById(`humidity`).innerHTML = `${humidity}%`;
}
function windSpeed(element) {
  let speed = Math.round(element.data.wind.speed);
  document.getElementById("windSpeed").innerHTML = `${speed} km/h`;
}
function cityname(element) {
  let name = element.data.name;
  document.getElementById("heading").innerHTML = `${name}`;
}
//// forecast
function NameOfTheDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let dayname = date.getDay();
  let DaysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return DaysofWeek[dayname];
}
////
////
function integrationOfIcons(responce) {
  let forecastobject = responce.data.daily;
  let forecast = "";
  forecastobject.forEach(function (day, index) {
    if (index < 5) {
      forecast =
        forecast +
        `<div class="col-sm-2" id="forecast">
  <div>
    <span id="daysofweek">${NameOfTheDay(day.dt)}</span>
  </div>
  <img
    src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
    alt=""
    id="forecastIcon"
  />
  <div>
  <div id="descriptionInforecast">${day.weather[0].description}</div>
    <h5 class="h5">
      <span id="min">${Math.round(
        day.temp.min
      )}˚</span> / <span id="max">${Math.round(day.temp.max)}˚</span>
    </h5>
  </div>
</div>`;
    }
  });
  document.getElementById("displayOfIcons").innerHTML = forecast;
}

function APIforecast(element) {
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let lon = element.data.coord.lon;
  let lat = element.data.coord.lat;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${ApiUrl}`).then(integrationOfIcons);
}
////
let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
let units = "metric";
let ApiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=düsseldorf&appid=${apiKey}&units=${units}`;
axios.get(`${ApiUrl1}`).then(showTemperature);
axios.get(`${ApiUrl1}`).then(humidity);
axios.get(`${ApiUrl1}`).then(windSpeed);
axios.get(`${ApiUrl1}`).then(cityname);
axios.get(`${ApiUrl1}`).then(description);
axios.get(`${ApiUrl1}`).then(icon);
axios.get(`${ApiUrl1}`).then(APIforecast);
////
function work() {
  let city = document.getElementById("form").value;
  city = city.trimEnd().trimStart().toLowerCase();
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = "metric";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${ApiUrl}`).then(showTemperature);
  axios.get(`${ApiUrl}`).then(humidity);
  axios.get(`${ApiUrl}`).then(windSpeed);
  axios.get(`${ApiUrl}`).then(cityname);
  axios.get(`${ApiUrl}`).then(description);
  axios.get(`${ApiUrl}`).then(icon);
  axios.get(`${ApiUrl}`).then(APIforecast);
}
document.getElementById("button-addon2").addEventListener("click", work);
const input = document.querySelector("form");
input.onkeydown = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    work();
  }
};
////
function currentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = `metric`;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(`${ApiUrl}`).then(showTemperature);
  axios.get(`${ApiUrl}`).then(humidity);
  axios.get(`${ApiUrl}`).then(windSpeed);
  axios.get(`${ApiUrl}`).then(cityname);
  axios.get(`${ApiUrl}`).then(description);
  axios.get(`${ApiUrl}`).then(icon);
}
function action() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
document.getElementById("geolocation").addEventListener("click", action);
////
function toFahrenheit(element) {
  let toF = Math.round(Math.round(element.data.main.temp) * 1.8) + 32;
  document.getElementById(`h3`).innerHTML = `${toF}`;
}
function toCelsius(element) {
  let toC = Math.round(element.data.main.temp);
  document.getElementById(`h3`).innerHTML = `${toC}`;
}

function one() {
  let city = document.getElementById("heading").innerHTML;
  city = city.toLowerCase();
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = "metric";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${ApiUrl}`).then(toFahrenheit);
}
function two() {
  let city = document.getElementById("heading").innerHTML;
  city = city.toLowerCase();
  let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
  let units = "metric";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${ApiUrl}`).then(toCelsius);
}
function callFahrenheit(event) {
  event.preventDefault();
  one();
}
function callCelsius(event) {
  event.preventDefault();
  two();
}
document.getElementById("two").addEventListener("click", callFahrenheit);
document.getElementById("one").addEventListener("click", callCelsius);
