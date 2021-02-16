
let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);
if (watchlist === null) {
    watchlist = []
}
document.querySelector('.movies-container').innerHTML = renderMovies(watchlist);


function renderMovies(movieArray){
    const movieHtmlArray = movieArray.map(function(currentMovie) {
         return `<div>
            <h2>${currentMovie.Title}</h2>
            <img src="${currentMovie.Poster} class="card-img-top" alt="movieposter">
            <br>
            <a href='#' onclick="removeMovie('${currentMovie.imdbID}')" class="btn btn-primary">Remove</a>
         <div>`
     });
    
     return movieHtmlArray.join('');
 }


function removeMovie(imdbID) {
    console.log(watchlist, imdbID)
    let results = watchlist.filter(movie => movie.imdbID !== imdbID)
    watchlist = results
    document.querySelector('.movies-container').innerHTML = renderMovies(results);
    watchlistJSON = JSON.stringify(results);
    localStorage.setItem('watchlist', watchlistJSON);
}
