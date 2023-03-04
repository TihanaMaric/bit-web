const gallery = document.querySelector(".gallery");
const leftPages = document.querySelector(".leftArrows");
const rightPages = document.querySelector(".rightArrows");

let pageNumber = 5;
let pageOne = document.querySelector(".page1");
let pageTwo = document.querySelector(".page2");
let pageThree = document.querySelector(".page3");
let pageFour = document.querySelector(".page4");
let pageFive = document.querySelector(".page5");
let selectLi = document.querySelectorAll(".page");

const pageNumbers = () => {
  pageOne.textContent = pageNumber - 4;
  pageTwo.textContent = pageNumber - 3;
  pageThree.textContent = pageNumber - 2;
  pageFour.textContent = pageNumber - 1;
  pageFive.textContent = pageNumber;
};
pageNumbers();

const getRickAndMorty = (url) => {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      gallery.innerHTML = "";

      data.results.forEach((el) => {
        let characterImgURL = el.image;
        let characterDetails = el.name;
        let characterId = el.id;

        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let likeButtonImg = document.createElement("img");

        div.setAttribute(
          "class",
          "oneCharacter text-center border card container-fluid m-3 mb-5"
        );
        p.textContent = characterDetails;
        p.setAttribute("class", "card-text characterName");
        img.setAttribute("src", characterImgURL);
        img.setAttribute("class", "charactersImg img-fluid");
        img.setAttribute("id", characterId);
        likeButtonImg.setAttribute("src", "./like.jpg");
        likeButtonImg.setAttribute("class", "likeImageButton");
        button.textContent = "Like";
        button.setAttribute("class", "btn card-link mb-3");
        button.prepend(likeButtonImg);

        gallery.append(div);
        div.append(img);
        div.append(p);
        div.append(button);

        const greenOnClick = () => button.classList.toggle("greenOnClick"); //this toggles class greenOnClick to like button whenever its clicked

        button.addEventListener("click", greenOnClick);
      });

      const characterImages = document.querySelectorAll(".charactersImg");

      characterImages.forEach((el) => {
        el.addEventListener("click", function () {
          let img = this;
          let imgId = img.getAttribute("id");

          localStorage.setItem("1", imgId);
          window.location.replace("./characterinfo.html");
        });
      });
    });
};
getRickAndMorty("https://rickandmortyapi.com/api/character");

const createNewPage = () => {
  const page = document.createElement("li");
  page.textContent =
    parseInt(
      document.querySelector(".pagination").previousSibling.textContent
    ) + 1;
  page.append(document.querySelector(".pagination"));
};

const removeGreen = (page) => {
  selectLi.forEach((element) => {
    element.classList.remove("bg-success");
  });
  let li = document.querySelector(page);
  li.classList.add("bg-success");
};

pageOne.addEventListener("click", function () {
  getRickAndMorty(
    "https://rickandmortyapi.com/api/character?page=" + (pageNumber - 4)
  );
  removeGreen(".page1");
});

pageTwo.addEventListener("click", function () {
  getRickAndMorty(
    "https://rickandmortyapi.com/api/character?page=" + (pageNumber - 3)
  );
  removeGreen(".page2");
});

pageThree.addEventListener("click", function () {
  getRickAndMorty(
    "https://rickandmortyapi.com/api/character?page=" + (pageNumber - 2)
  );
  removeGreen(".page3");
});

pageFour.addEventListener("click", function () {
  getRickAndMorty(
    "https://rickandmortyapi.com/api/character?page=" + (pageNumber - 1)
  );
  removeGreen(".page4");
});

pageFive.addEventListener("click", function () {
  if (pageNumber !== 35) {
    getRickAndMorty(
      "https://rickandmortyapi.com/api/character?page=" + pageNumber
    );
    removeGreen(".page5");
  }
});

leftPages.addEventListener("click", function () {
  if (pageNumber > 5) {
    pageNumber -= 5;
    pageNumbers();
  }
  selectLi.forEach((element) => {
    element.classList.remove("bg-success");
  });
});

rightPages.addEventListener("click", function () {
  if (pageNumber < 35) {
    pageNumber += 5;
    pageNumbers();
  }
  selectLi.forEach((element) => {
    element.classList.remove("bg-success");
  });
});