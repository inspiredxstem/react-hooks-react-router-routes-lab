import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDetails = actors.map(actor => {
    return (<div key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>{actor.movies.map(actorMovie => {
        return <li key={actorMovie}>{actorMovie}</li>
      })}</ul>
    </div>)
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDetails}
    </div>
  );
}

export default Actors;
