console.log('hello')
let pageNumber = Math.floor(Math.random() * 15);
const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTFjMzY1YmZmMjYxZGIwYzNlNGYzNzZjNzFmNTAxZSIsIm5iZiI6MTc2MzI2ODczMS4wOTQsInN1YiI6IjY5MTk1ODdiM2ViNDU3MGY2NTljNWRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6g685zAHlv4uZlpWaktFCV2GD9AMIxxzysC80fB_CSM'
  }
};

const title = document.getElementById('title');
const overview = document.getElementById('overview');
const poster = document.getElementById('poster');
let defaultText = document.getElementById('default-text');
const vote = document.getElementById('vote');
const preview = document.getElementById('preview');

const getMovies = () => {

    fetch(url, options)
    .then(res => res.json())
    .then(res => {
        const random = Math.floor(Math.random() * res.results.length);
      console.log(res)
      title.innerHTML = res.results[random].title;
      overview.innerHTML = res.results[random].overview;
      const img = res.results[random].poster_path;
      poster.src = `https://image.tmdb.org/t/p/original/${img}`;
      vote.innerHTML = res.results[random].vote_average + ' / 10';
      preview.href = `https://www.rottentomatoes.com/search?search=${res.results[random].title}`;

    })
    .catch(err => console.error(err));

}

button.addEventListener('click', () => {
    defaultText.innerHTML = '';
    getMovies();
})