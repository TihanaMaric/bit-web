//2.1
(function(){
    var list = document.querySelector(".active");
    list.classList.remove(".active");
    list.parentElement.parentElement.parentElement.firstElementChild.firstChild.className = "active";
})();