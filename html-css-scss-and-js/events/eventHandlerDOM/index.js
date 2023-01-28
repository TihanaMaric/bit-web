var btnButton = document.querySelector("#btn");
var div = document.querySelector("#text-area");
var input = document.getElementById("chat");
btnButton.addEventListener("click", function(){
    div.innerHTML += "<p>" + input.value + "</p>";
    input.value = "";
});
