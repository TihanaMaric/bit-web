var footballField = document.querySelector(".field");
var body = document.querySelector("body");
var player = document.querySelector(".player");
function getPosition(el){
    var xPosition = el.clientX;
    var yPosition = el.clientY;
    console.log(xPosition);
    console.log(yPosition);
    player.style.top = yPosition + "px";
    player.style.left = xPosition + "px";
}

footballField.addEventListener("click", getPosition);