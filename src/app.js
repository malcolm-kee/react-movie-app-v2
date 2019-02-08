import React from 'react';
import { Movie } from './components/movie';

function App() {
  return (
    <div>
      <div className="title-bar">
        <h1>React Movie App</h1>
      </div>
      <Movie name="Aquaman" releaseDate="2018-12-07" />
      <Movie name="Bumblebee" releaseDate="2018-12-15" />
      <Movie
        name="Fantastic Beasts: The Crimes of Grindelwald"
        releaseDate="2018-11-14"
      />
    </div>
  );
}

export default App;
