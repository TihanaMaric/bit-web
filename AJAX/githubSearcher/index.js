var inputUser = $("#search");
var baseUrl = "https://api.github.com/search/users?q=";
var main = $("main");
var table = $("table");

$(document).ready(function () {
  inputUser.on("keypress", function(e) {
    if (e.keyCode === 13) {
      main.empty();
      $.get(baseUrl + inputUser.val(), { per_page: 8 }, function (data) {
        var users = data.items;
        users.forEach((user) => {
          var div = $("<div></div>");
          var img = $("<img></img>");
          var p = $("<p></p>");
          img.attr("src", user.avatar_url);
          p.text(user.login);
          div.append(img);
          div.append(p);
          main.append(div);
        });

        var userDivs = $(main.children());
        var baseUrl2 = "https://api.github.com/users/";

        userDivs.on("click", function (e) {
          var usersName = $(e.currentTarget).text();
          localStorage.setItem("usersName", usersName);
          window.location.href = "./repoInfo.html";
        });
      });
    }
  });
});
