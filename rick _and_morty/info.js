const character = document.querySelector(".character");
const imgId = localStorage.getItem("1");
let url = "https://rickandmortyapi.com/api/character/" + imgId;

let div = document.createElement("div");
let img = document.createElement("img");
let p = document.createElement("p");
let homeButton = document.querySelector(".btn-secondary");

let displayInform = () => {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      character.innerHTML = "";

      let characterImgURL = data.image;
      let characterGender = data.gender;
      let characterName = data.name;
      let characterOrigin = data.origin.name;
      let characterSpecies = data.species;
      let characterStatus = data.status;

      // new lines when adding text
      p.setAttribute("style", "white-space: pre-wrap;"); 
      div.setAttribute("class", "character text-center");
      p.textContent = `
                      Name: ${characterName}
                      Gender: ${characterGender}
                      Origin: ${characterOrigin}
                      Species: ${characterSpecies}
                      Status: ${characterStatus}
                                                `;

      img.setAttribute("src", characterImgURL);
      img.setAttribute("class", "charactersImg img-fluid");

      character.append(div);
      div.append(img);
      div.append(p);
    });
};
displayInform();

let goHome = () => window.location.replace("index.html");

homeButton.addEventListener("click", goHome);