export var searchMovie = () => {
  $("#movie-list").html("");

  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "aa6648f3",
      s: $("#search-input").val(),
    },
    success: (hasil) => {
      if (hasil.Response == "True") {
        let movies = hasil.Search;
        $.each(movies, function (i, data) {
          $("#movie-list").append(`
            <div class="col-md-4">
              <div class="card mb-3">
                  <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${data.Title} (${data.Year})</h5>
                  <a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-movie-id="${data.imdbID}">See Detail</a>
                  </div>
              </div>
            </div>
              `);
        });
      } else {
        $("#movie-list").html(`
          <div class="col">
              <h1 class="text-center">${hasil.Error}</h1>
          </div>`);
      }
    },
  });
};
