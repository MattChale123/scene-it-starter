
let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);
if (watchlist === null) {
    watchlist = []
}
document.querySelector('.movies-container').innerHTML = renderMovies(watchlist);
const movieFilter = document.getElementById("col-12 results")

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div>
            <h2>${currentMovie.Title}</h2>
            <div>`
    });

    return movieHtmlArray.join('');
}
