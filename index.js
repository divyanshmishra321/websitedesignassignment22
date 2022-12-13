var color = new Array();
color[0] = "#8ABF96";
color[1] = "#FFECFB";
color[2] = "#FFF9B5";
color[3] = "#DDE8FF";
color[4] = "#FFDAAB";
color[5] = "#C4A5F3";
color[6] = "#D9A38F";
color[7] = "#E2CFF4";
color[8] = "#B38F8F";
color[9] = "#B6C7EF";

setInterval(function changeColor() {
  var randomColor = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[randomColor];
}, 2000);

function boldText() {
  var target = document.getElementById("TextArea");
  if (target.style.fontWeight == "bolder") {
    target.style.fontWeight = "normal";
  } else {
    target.style.fontWeight = "bolder";
  }
}

function italicText() {
  var target = document.getElementById("TextArea");
  if (target.style.fontStyle == "italic") {
    target.style.fontStyle = "normal";
  } else {
    target.style.fontStyle = "italic";
  }
}

function underlineText() {
  var target = document.getElementById("TextArea");
  if (target.style.textDecoration == "underline") {
    target.style.textDecoration = "none";
  } else {
    target.style.textDecoration = "underline";
  }
}

function alertonload() {
  alert("Welcome to our Page");
}
