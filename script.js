const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjlhMmI2MjBiNjMwYjViM2RmYWEyMzBhNDIzODFiMCIsInN1YiI6IjY1OTNjZGE0Y2U0ZGRjNmU2NDdkZGIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4CSbF2T53qjlLENtBlffmhp-YxvcN7oE5otcgSdDpHc'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

function movies(movie) {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1').then(function(response) {})

}

for (i = 0; i < data.length; i++) {
  let id = data[i].id;
  let title = data[i].title;
  let overView = data[i].overView;
  let posterPath = data[i].posterPath;
  let voteAverage = data[i].voteAverage;
}
