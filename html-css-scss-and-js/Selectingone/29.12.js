//1..Selecting One/Multiple Elements
//1.1

(function(){
    document.querySelector(".two").className = "bg";
})();

//2.1

(function(){
    document.querySelectorAll("li").forEach(function (el) {
        el.className = "li-bg";
    });
})();

//3.1

(function(){
    document.querySelectorAll(".three li").forEach(function (el){
        el.className = "li-three";
        el.style.textTransform = "upperccase";
    });
})();

