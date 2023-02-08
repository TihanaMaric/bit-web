var footbalField = $(".field");
var body = $("body");
var player = $(".player");

footbalField.on("click", function (event) {
  var xPosition = event.pageX - 30;
  var yPosition = event.pageY - 30;
  player.offset({ top: yPosition, left: xPosition });
});