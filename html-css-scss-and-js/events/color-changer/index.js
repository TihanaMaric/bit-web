var container = document.querySelector(".container-fluid");
var start;

 function changeColor() {
  if (container.classList.contains('bg-dark')) {
    container.className = "container-fluid bg-primary vh-100";
  } else {
    container.className = "container-fluid bg-dark vh-100";
  }
}

function autoChangeColor() {
  start = setInterval(changeColor, 2000);
}

function stop() {
  clearInterval(start);
}