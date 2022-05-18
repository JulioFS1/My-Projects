var displayer = '';
var buttonclick = '';
var buttonid = '';

document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    buttonclick = event.target || event.srcElement;
    buttonid = buttonclick.id;document.getElementById("display").innerHTML = buttonid;
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key == "Q") {
    document.getElementById("Heater 1").click();
    displayer = 'Heater 1';
  } else
  if (e.key == "W") {
    document.getElementById("Heater 2").click();
    displayer = 'Heater 2';
  } else
  if (e.key == "E") {
    document.getElementById("Heater 3").click();
    displayer = 'Heater 3';
  } else
  if (e.key == "A") {
    document.getElementById("Heater 4").click();
    displayer = 'Heater 4';
  } else
  if (e.key == "S") {
    document.getElementById("Clap").click();
    displayer = 'Clap';
  } else
  if (e.key == "D") {
    document.getElementById("Open HiHat").click();
    displayer = 'Open HiHat';
  } else
  if (e.key == "Z") {
    document.getElementById("Kick n' Hat").click();
    displayer = "Kick n' Hat";
  } else
  if (e.key == "X") {
    document.getElementById("Kick").click();
    displayer = 'Kick';
  } else
  if (e.key == "C") {
    document.getElementById("Closed HiHat").click();
    displayer = 'Closed HiHat';
  }
  document.getElementById("display").innerHTML = displayer;
});