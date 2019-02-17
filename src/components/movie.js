import React from 'react';

export const Movie = props => (
  <div
    className="movie-container selectable"
    onClick={props.onClick}
    onKeyDown={e => {
      if (
        e.keyCode === 32 || // space
        e.keyCode === 13 // enter
      ) {
        props.onClick();
      }
    }}
    tabIndex={0}
    data-testid="movie-container"
  >
    <h1>{props.name}</h1>
    <h2>{props.releaseDate}</h2>
  </div>
);

export default Movie;
