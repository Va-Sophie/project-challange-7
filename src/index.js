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
    let minutes = `0${minutes}`;
  }
  if (hours < 10) {
    let hours = `0${hours}`;
  }
  let moment = `On ${[DaysofWeek[day.getDay()]]} at ${hours}:${minutes}`;
  return moment;
}
document.getElementById(`data`).innerHTML = `${formatDate(now)}`;
