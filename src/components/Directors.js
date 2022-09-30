import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDetails = directors.map(director => {
    return <div key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map(directorMovie => {
          return <li key={directorMovie}>{directorMovie}</li>
        })}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDetails}
    </div>
  )
}

export default Directors;
