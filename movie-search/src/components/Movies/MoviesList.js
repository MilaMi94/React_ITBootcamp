import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      MoviesList
      {movies.map((movie) => {
        return <MoviesListItem key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
