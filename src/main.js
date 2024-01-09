import { options } from "./apikey.js";
let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

function repeatCard() {
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      let rows = response["results"];
      rows.forEach((a) => {
        let id = a["id"];
        let title = a["title"];
        let overView = a["overview"];
        let posterPath = a["poster_path"];
        let voteAverage = a["vote_average"];
        let temp_html = `
          <div class='card' onclick='alert("이 영화의 id는 " + ${id} + "입니다.")'>
              <img class='movieImg' src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${title} Poster">
              <p class='movieName'> < <b>${title}</b> ></p>
              <p class='movieSum'>${overView}</p>
              <p class='voteAverage'>평점 : <b>${voteAverage}</b></p>
          </div>
          `;
        let element = document.getElementById("names-q1");
        element.innerHTML += temp_html;
      });
    })
    .catch((err) => console.error(err));
}
repeatCard();

function filter() {
  const search = document.getElementById("searchValue").value.toLowerCase();
  const cards = document.getElementsByClassName("card");
  const searchResults = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].getElementsByClassName("movieName")[0].innerText.toLowerCase().indexOf(search) !== -1) {
      cards[i].style.display = "grid";
      searchResults++;
    } else {
      cards[i].style.display = "none";
    }
  }
  if (searchResults === 0) {
    alert("검색 결과가 없습니다.");
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filter();
});
