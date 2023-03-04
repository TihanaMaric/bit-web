let body = document.querySelector("body");
let button = document.querySelector("button");
let div = document.querySelector("div");
const requestUrl = "https://api.chucknorris.io/jokes/random";
const chuckJoke = () => {
    fetch(requestUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        div.textContent = '';
        let p = document.createElement("p");
        p.textContent = json.value;
        div.append(p);
        body.append(div);

    });
};
button.addEventListener("click", chuckJoke);