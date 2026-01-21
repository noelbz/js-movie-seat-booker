export class Movie {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
export async function fetchMovies() {
  // npx json-server db.json --port 3000
  const response = await fetch("http://localhost:3000/movies");
  const data = await response.json();
  return data.map(function(movie){
    return new Movie(movie.id, movie.title, movie.price)
  });
}