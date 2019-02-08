import React from 'react';

export const Movie = props =>
  React.createElement('div', { className: 'movie-container' }, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.releaseDate)
  ]);
