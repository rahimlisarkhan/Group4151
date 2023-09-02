const movieDetail = document.querySelector("#movieDetail");
const movieSearch = document.querySelector("#movieSearch");

movieSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const movieTitle = this.value;
    // getMovie(movieTitle);
    getMovieSearch(movieTitle);
    this.value = "";
  }
});

function getMovie(title) {
  const myPromises = fetch(
    `http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`
  );

  myPromises
    .then((res) => {
      const dataPromises = res.json();
      return dataPromises;
    })
    .then((data) => {
      console.log(data);
      renderDetail(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

function getMovieSearch(title) {
  const myPromises = fetch(
    `http://www.omdbapi.com/?apikey=a407a7b3&s=${title}&limit=1`
  );

  myPromises
    .then((res) => {
      const dataPromises = res.json();
      return dataPromises;
    })
    .then((data) => {
      console.log(data.Search);
      renderSearchResult(data.Search);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

function renderDetail(movie) {
  console.log(movie);

  movieDetail.innerHTML = `<div class="d-flex gap-5 my-5 px-5">
    <img height="300" style="object-fit: cover"  src="${movie.Poster}" />

    <div>
    <h1>${movie.Title}</h1>
    <ul>
      <li>Country: ${movie.Country}</li>
      <li>Awards: ${
        movie.Awards === "N/A" ? "Sistemde yoxdur" : movie.Awards
      }</li>
      <li>Min: ${movie.Runtime}</li>
      <li>Year: ${movie.Year}</li>
      <li class="text-warning h3">${movie.imdbRating}</li>
    </ul>

    <ul>
    ${movie.Ratings.map(
      (rait) => `<li class="text-danger h6">${rait.Source}: ${rait.Value} </li>`
    ).join("")}
    </ul>
    </div>
  </div>`;
}

function renderSearchResult(movies) {
  console.log(movies);

  movieDetail.innerHTML = movies
    ?.map(
      (movie) => `<div class="d-flex gap-5 my-5 border shadow">
      <img width="400" height="300" style="object-fit: cover"  src="${movie.Poster}" />
  
      <div class="p-5">
      <h1>${movie.Title}</h1>
      <h2>${movie.Type}</h2>
      <h2>${movie.Year}</h2>
      </div>
    </div>`
    )
    .join("");
}
