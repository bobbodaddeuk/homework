
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjlhMmI2MjBiNjMwYjViM2RmYWEyMzBhNDIzODFiMCIsInN1YiI6IjY1OTNjZGE0Y2U0ZGRjNmU2NDdkZGIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4CSbF2T53qjlLENtBlffmhp-YxvcN7oE5otcgSdDpHc'
  }
};
let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
function card() {
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      let rows = response['results']
      rows.forEach(a => {
        let id = a['id'];
        let title = a['title'];
        let overView = a['overview'];
        let posterPath = a['poster_path'];
        let voteAverage = a['vote_average'];
        let temp_html = `
        <div class='card' onclick="getId(${id})">
            <img class='movieImg' src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${title} Poster">
            <p class='movieName'> < <b>${title}</b> ></p>
            <p class='movieSum'>${overView}</p>
            <p class='voteAverage'>평점 : <b>${voteAverage}</b></p>
        </div>
        `;
        let element = document.getElementById('names-q1');
        element.innerHTML += temp_html;
      });
    })
    .catch(err => console.error(err));
}
card()

  function filter() {
  let search = document.getElementById("search").value.toLowercase();
  let listInner = document.getElementsByClassName("listInner");

  for (let i = 0; i < listInner.length; i++) {
    title = listInner[i].getElementsByClassName('title');
    if (title[0].innerHTML.toLowercase().indexOf(search) !== -1) {
      listInner[i].style.display = "flex"
    } else {
      listInner[i].style.display = "none"
    }
  }
}
function getId(id) {
  alert("이 영화의 id는 " + id + "입니다.")
}
