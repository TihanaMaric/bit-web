import Shows from './models/display_shows.js';
import Creatshows from './models/create_shows.js';
import search from './search.js';


// creating new obj of shows

const newShow = new Shows();

// handler for section where to store data

let mainSection = $("#mainSection");

// getting data for html and display data

function loadShow() {
  $.ajax({
    url: `http://api.tvmaze.com/shows`,
    type: "GET",
    dataType: "json",
  }).done(function (response) {
    const responCopy = [...response];

    let sortShows = responCopy.sort((a, b) => {
      return b.rating.average - a.rating.average;
    });

    let sliceShows = sortShows.slice(0, 50);

    sliceShows.forEach((el) => {
      let createShow = new Creatshows(
        el.id,
        el.image.original,
        el.name,
        el.rating.average
      );
      newShow.addShow(createShow);
    });

    mainSection.append(newShow.getShow());

    $(".article").click(function () {
      let show_id = $(this).attr("data-id");
      let show_rating = $(this).attr("data-rating");
      localStorage.setItem("id", show_id);
      localStorage.setItem("rating", show_rating);
      window.location.replace("info_page.html");
    });
  });
}

loadShow();
search();