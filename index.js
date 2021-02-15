
const myForm = document.getElementById('movies-container');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn btn-primary input-group-btn").addEventListener("click", function(event){
        event.preventDefault()
        const searchString = document.getElementById('btn btn-primary input-group-btn').value
        const urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString).then(function(response) {
            var movieHTML = renderMovies(response.data.Search);
            moviesContainer.innerHTML = movieHTML;
            movieData = response.data.Search
        document.querySelector('.movies-container').innerHTML = renderMovies(movieData);
      });
    })
},

function saveToWatchList(imdbID){
    const movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = []
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    return movie
},

function renderMovies(movieArray){
    const movieHtmlArray = movieArray.map(function(currentMovie) {
         return `<div>
             <h2>${currentMovie.Title}</h2>
             <a href='#' onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add</a>
         <div>`
     });
    
     return movieHtmlArray.join('');
 })
