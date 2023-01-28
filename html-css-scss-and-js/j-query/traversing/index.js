var img = $("img").first();
img.addClass("selected");

function removeAdd() {
  img.removeClass("selected");
  $("body").find("div").eq(1).children().eq(1).addClass("selected");
}

removeAdd();