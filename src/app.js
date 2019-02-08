import React from 'react';
import { Movie } from './components/movie';
import { TitleBar } from './components/title-bar';

function App() {
  return (
    <div>
      <TitleBar>
        <h1>React Movie App</h1>
      </TitleBar>
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
