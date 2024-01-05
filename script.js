
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
    .then(response  => {
      let rows = response['results']
      rows.forEach(a => {
        let id = a['id'];
        let title = a['title'];
        let overView = a['overview'];
        let posterPath = a['poster_path'];
        let voteAverage = a['vote_average'];
        let temp_html = `
        <div class='card' onclick="getId(${id})">
            <img src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${title} Poster">
            <h1>${title}</h1>
            <p class = '줄거리'>${overView}</p>
            <p class = '평점'>${voteAverage}</p>
        </div>
        `;
       let element = document.getElementById('names-q1');
       element.innerHTML += temp_html;
      }); 
    })
    .catch(err => console.error(err));
} 
card()

function getId(id) {
  alert("영화 id : " + id)
}
//해야될 것 
//1. 검색 버튼 클릭 시 새로고침 되는 거
//2. 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
//3. 영화 검색 UI 구헌