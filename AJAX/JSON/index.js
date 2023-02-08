var button = document.querySelector("button");
var image = document.querySelector("#img");
button.addEventListener('click', getDog);
function getDog(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"https://dog.ceo/api/breeds/image/random");
    xmlhttp.onload = function(){
        if(xmlhttp.status >= 200 && xmlhttp.status < 400){
            var response = JSON.parse(xmlhttp.response);
            console.log(response.message);
            image.src = response.message;
        }
    }
    xmlhttp.send();
}