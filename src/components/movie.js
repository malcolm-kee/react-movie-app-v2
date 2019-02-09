import React from 'react';

export const Movie = props => (
  <div
    className="movie-container selectable"
    onClick={props.onClick}
    tabIndex={0}
    data-testid="movie-container"
  >
    <h1>{props.name}</h1>
    <h2>{props.releaseDate}</h2>
  </div>
);

export default Movie;
