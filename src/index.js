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
    let minutes = `0${day.getMinutes()}`;
    return minutes;
  }
  if (hours < 10) {
    let hours = `0${day.getHours()}`;
    return hours;
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
let apiKey = "0b3a182635d594d7bd1abd38c840f9c3";
let units = "metric";
let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}&units=${units}`;
axios.get(`${ApiUrl}`).then(showTemperature);
axios.get(`${ApiUrl}`).then(humidity);
axios.get(`${ApiUrl}`).then(windSpeed);
