//Initial References
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from API
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    //if input field is empt
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">please Enter A Movie Name</h3>`
    }
    //if input field is Not empt
    else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.poster);
            console.log(data.title);
            console.log(data.imdbRating);
            console.log(data.Rated);
            console.log(data.year);
            console.log(data.Runtime);
            console.log(data.Genre);
            console.log(data.plot);
            console.log(data.Actors);
            result.innerHTML = `<div class=info>
            <img src=${data.poster} class="poster"
            <div>
             <h2>${data.Title},</h2>
             <div class="rating">
             <img src="star-icon.svg">
             <h4>${data.imdbRating}</h4>
             </div>
             <div class="details">
             <span>${data.Rated}</span>
             <span>${data.year}</span>
             <span>${data.Runtime}</span>
             </div>
             <div class="genre">
             <div>${data.Genre.split(",").
             join("<div></div>")}</div>
             </div>
             </div>
             </div>
             <h3>plot:</h3>
             <p>${data.plot}</p>
             <h3>cast:</h3>
             <p>${data.Actors}</p>
           `;
        });
    }
};
window.addEventListerner("load", getMovie);