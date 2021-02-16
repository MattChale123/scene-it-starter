
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
}

function renderMovies(movieArray){
    const movieHtmlArray = movieArray.map(function(currentMovie) {
         return `<div>
            <h2>${currentMovie.Title}</h2>
            <img src="${currentMovie.Poster} class="card-img-top" alt="movieposter">
            <br>
            <a href='#' onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add</a>
            <br>
         <div>`
     });
    
     return movieHtmlArray.join('');
 }


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("genre-button").addEventListener("click", function(e){
        e.preventDefault()
        const searchString = document.querySelector('.recommendation-search').value
        const urlEncodedSearchString = encodeURIComponent(searchString);
        console.log(urlEncodedSearchString)
        fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
        .then(res => res.json())
        .then(data => {
            console.log(data.Search)
            const moviesContainer = document.querySelector('.recomended-container');
            let movieHTML = renderMovies(data.Search)
            moviesContainer.innerHTML = movieHTML;
            movieData = data.Search
            })
    })
})
