$(document).ready(function() {
  getSeconds();
});

var curday;
var secTime;
var ticker;

function getSeconds() {
  var nowDate = new Date();
  var dy = 0; //Sunday through Saturday, 0 to 6
  var countertime = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate(),
    11,
    0,
    0
  ); //11 out of 24 hours = 11am

  var curtime = nowDate.getTime(); //current time
  var atime = countertime.getTime(); //countdown time
  var diff = parseInt((atime - curtime) / 1000);
  if (diff > 0) {
    curday = dy - nowDate.getDay();
  } else {
    curday = dy - nowDate.getDay() - 1;
  } //after countdown time
  if (curday < 0) {
    curday += 7;
  } //already after countdown time, switch to next week
  if (diff <= 0) {
    diff += 86400 * 7;
  }
  startTimer(diff);
}

function startTimer(secs) {
  secTime = parseInt(secs);
  ticker = setInterval("tick()", 1000);
  tick(); //initial count display
}

function tick() {
  var secs = secTime;
  if (secs > 0) {
    secTime--;
  } else {
    clearInterval(ticker);
    getSeconds(); //start over
  }

  var days = Math.floor(secs / 86400);
  secs %= 86400;
  var hours = Math.floor(secs / 3600);
  secs %= 3600;
  var mins = Math.floor(secs / 60);
  secs %= 60;

  //update the time display
  document.getElementById("days").innerHTML = curday;
  document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
  document.getElementById("minutes").innerHTML = (mins < 10 ? "0" : "") + mins;
  document.getElementById("seconds").innerHTML = (secs < 10 ? "0" : "") + secs;
}

function openNav() {
  document.getElementById("mySideNav").style.width = "240px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";
  monthAndYear.innerHTML = months[month] + " " + year;
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(row);
      }
      date++;
    }
    tbl.appendChild(row);
  }
}
function previous() {
  currentYear = currentMonth === 0 ? currentYear : currentYear - 1;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}
function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}
