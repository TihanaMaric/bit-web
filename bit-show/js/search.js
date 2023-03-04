export default function search() {

  let listSearch = $("#search-list");
  
  $(".search").keyup(function () {
    let search = $(this).val();
    if (search !== "") {
      $.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${search}`,
        type: "GET",
        dataType: "json",
      }).done(function (response) {
        let html = "";

        listSearch.empty();
        listSearch.fadeIn();
        response.forEach(function (el) {
          html = `<li class='list' data-id='${el.show.id}' data-rating='${el.show.rating.average}'>${el.show.name}</li>`;

          listSearch.append(html);
        });

        $(".list").click(function () {
          let list_id = $(this).attr("data-id");
          let list_rating = $(this).attr("data-rating");
          localStorage.setItem("id", list_id);
          localStorage.setItem("rating", list_rating);
          window.location.replace("info_page.html");
        });
      });
    } else {
      listSearch.fadeOut();
    }
  });
}