import React from "react";
import { useParams } from "react-router-dom";

function Trailer({ mov }) {
  const params = useParams();
  const movie = mov.filter((el) => el.name == params.name)[0];
  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.posterurl} />
    </div>
  );
}

export default Trailer;
