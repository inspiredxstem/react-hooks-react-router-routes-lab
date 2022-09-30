import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map(movie => {
    return (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time}</p>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>
              {genre}
            </li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
    )
}

export default Movies;
