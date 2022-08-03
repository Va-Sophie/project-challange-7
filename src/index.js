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
  document.querySelector("h1").innerHTML = `${name}`;
}
////
let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
let units = "metric";
let ApiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=düsseldorf&appid=${apiKey}&units=${units}`;
axios.get(`${ApiUrl1}`).then(showTemperature);
axios.get(`${ApiUrl1}`).then(humidity);
axios.get(`${ApiUrl1}`).then(windSpeed);
axios.get(`${ApiUrl1}`).then(cityname);
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
