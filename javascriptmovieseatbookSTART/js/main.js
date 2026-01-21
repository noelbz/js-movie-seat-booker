import { fetchMovies } from "./movieService.js";
import { initSeats, clearSelectedSeats } from "./seats.js";

const movieSelect = document.getElementById("movie");
const container = document.querySelector(".container");

async function start() {
  clearSelectedSeats();
  const movies = await fetchMovies();
  movies.forEach(function(movie) {
    const option = document.createElement("option");
    option.value = movie.price;
    option.textContent = `${movie.title} (${movie.price} kr)`;
    movieSelect.appendChild(option);
  });

  initSeats(container, movieSelect);
}
start();