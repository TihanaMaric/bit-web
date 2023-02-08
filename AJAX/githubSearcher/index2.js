$(document).ready(function () {
  var localName = localStorage.getItem("usersName");
  var baseUrl2 = "https://api.github.com/users/";
  var main = $("main");

  $.get(baseUrl2 + localName + "/" + "repos", { per_page: 5 }, function (data) {
    var table = $("<table></table>");
    var tr1 = $("<tr></tr>");
    var th1 = $("<th>Repository name</th>");
    var th2 = $("<th>Repository image</th>");
    var th3 = $("<th>Description</th>");
    var th4 = $("<th>Number of start</th>");
    var th5 = $("<th>Languages used</th>");

    tr1.append(th1);
    tr1.append(th2);
    tr1.append(th3);
    tr1.append(th4);
    tr1.append(th5);

    table.append(tr1);
    main.append(table);

    var repos = data;

    console.log(repos);
    repos.forEach((el) => {
      var tr = $("<tr></tr>");
      var td1 = $("<td></td>");
      var td2 = $("<td></td>");
      var td3 = $("<td></td>");
      var td4 = $("<td></td>");
      var td5 = $("<td></td>");

      td1.text(el.name);
      td2.text(el.type);
      if (el.description === null) {
        td3.text("There is no description");
      } else {
        td3.text(el.description);
      }

      td4.text(el.size);
      var baseLangeUrl = "https://api.github.com/repos/";

      $.get(
        baseLangeUrl + localName + "/" + el.name + "/" + "languages",
        function (data) {
          console.log(localName);
          console.log(el);

          td5.text(Object.getOwnPropertyNames(data));
        }
      );

      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5);
      table.append(tr);
    });
  });
});