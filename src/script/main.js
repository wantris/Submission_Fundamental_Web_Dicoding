import { searchMovie } from "./searchmovie.js";

$("#search-button").on("click", () => {
  searchMovie();
});

$("#search-input").on("keyup", (e) => {
  if (e.keyCode == 13) {
    searchMovie();
  }
});

$("#movie-list").on("click", ".detail", function () {
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "aa6648f3",
      i: $(this).data("movie-id"),
    },
    success: (movie) => {
      if (movie.Response === "True") {
        $(".modal-body").html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 float-left">
                            <img class="img-fluid" src="${movie.Poster}" alt="Card image cap">
                        </div>
                        <div class ="col-md-8 float-right">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                <li class="list-group-item">Released : ${movie.Released}</li>
                                <li class="list-group-item">Genre : ${movie.Genre}</li>
                                <li class="list-group-item">Country : ${movie.Country}</li>
                                <li class="list-group-item">Drirector : ${movie.Director}</li>
                                <li class="list-group-item">Actors : ${movie.Actors}</li>
                                <li class="list-group-item">Plot : ${movie.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `);
      }
    },
  });
});
