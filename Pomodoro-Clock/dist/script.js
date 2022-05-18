var temp = 1500;
var m = parseInt(temp / 60);
var s = temp % 60;
var cron = null;
var bk = 300;
var bkc = parseInt(bk / 60);
var se = 'Session';

function contador() {
  if (temp === 0) {
    document.getElementById("beep").play();
  }
  if (temp != 0) {
    m = parseInt(temp / 60);
    s = temp % 60;
    temp--;
  } else if (se === 'Break' && temp < 1) {
    m = parseInt(temp / 60);
    s = temp % 60;
    se = 'Session';
    temp = bk;
  } else if (temp < 1) {
    se = 'Break';
    m = parseInt(temp / 60);
    s = temp % 60;
    temp = bk;
  }
  show();
};



$('#session-increment').click(
function () {
  if (cron === null && temp < 3600) {
    temp = temp + 60;
    m = parseInt(temp / 60);
    s = temp % 60;
    document.getElementById("session-length").innerHTML = m;
    show();
  }
});


$('#session-decrement').click(
function () {
  if (cron === null && temp > 60) {
    temp = temp - 60;
    m = parseInt(temp / 60);
    s = temp % 60;
    document.getElementById("session-length").innerHTML = m;
    show();
  }
});


$('#break-increment').click(
function () {
  if (bk < 3600) {
    bk = bk + 60;
    bkc = parseInt(bk / 60);
    document.getElementById("break-length").innerHTML = bkc;
  }
});


$('#break-decrement').click(
function () {
  if (bk > 60) {
    bk = bk - 60;
    bkc = parseInt(bk / 60);
    document.getElementById("break-length").innerHTML = bkc;
  }
});


$('#start_stop').click(
function () {
  if (s === 0 && cron === null || s === "0" + 0 && cron === null) {
    contador();
    cron = setInterval(() => {contador();}, 1000);

  } else if (cron === null) {
    contador();
    cron = setInterval(() => {contador();}, 1000);

  } else if (cron !== null) {
    clearInterval(cron);
    cron = null;
  }
});


$('#reset').click(
function () {
  clearInterval(cron);
  cron = null;
  temp = 1500;
  m = parseInt(temp / 60);
  s = temp % 60;
  bk = 300;
  bkc = parseInt(bk / 60);
  se = 'Session';
  show();
  document.getElementById("session-length").innerHTML = m;
  document.getElementById("break-length").innerHTML = bkc;
  document.getElementById("beep").pause();document.getElementById("beep").currentTime = 0;
});



document.getElementById("break-length").innerHTML = bkc;
document.getElementById("session-length").innerHTML = m;

function show() {
  document.getElementById("timer-label").innerHTML = se;
  if (m < 10 && s <= 9) {
    document.getElementById("time-left").innerHTML = "0" + m + ':' + "0" + s;
  } else if (m >= 10 && s <= 9) {
    document.getElementById("time-left").innerHTML = m + ':' + "0" + s;
  } else if (m < 10 && s >= 10) {
    document.getElementById("time-left").innerHTML = "0" + m + ':' + s;
  } else {
    document.getElementById("time-left").innerHTML = m + ':' + s;
  }
};
show();