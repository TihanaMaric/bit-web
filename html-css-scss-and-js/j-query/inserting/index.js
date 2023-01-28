$(function () {
    var list = [
      "https://picsum.photos/200",
      "https://picsum.photos/201",
      "https://picsum.photos/202",
      "https://picsum.photos/203",
      "https://picsum.photos/204",
      "https://picsum.photos/205",
      "https://picsum.photos/206",
    ];
    var div = $("<div> </div>");
    div.addClass("gallery");
  
    list.forEach(function (element) {
      var img = $("<img>");
      var el = element;
      var size = Math.round(Math.random() * 250 + 1);
  
      img.attr("src", el).width(size);
      div.append(img);
    });
  
    $("body").prepend(div);
    
    $("img").each(function (index, element) {
      if ($(element).width() > 200) {
        return false;
      }
      $(element).css("border", "2px solid green");
    });
  
    var title = $("<h1>Title</h1>");
    div.prepend(title);
  });