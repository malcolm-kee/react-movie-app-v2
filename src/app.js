import React from 'react';
import { Movie } from './components/movie';
import { TitleBar } from './components/title-bar';
import { Button } from './components/button';
import { useToggle } from './hooks/use-toggle';

function App() {
  const [moviesShown, toggleShowMovies] = useToggle(false);

  return (
    <div>
      <TitleBar>
        <h1>React Movie App</h1>
      </TitleBar>
      <div className="button-container">
        <Button onClick={toggleShowMovies}>
          {moviesShown ? 'Hide' : 'Show'} Movies
        </Button>
      </div>
      {moviesShown && (
        <>
          <Movie name="Aquaman" releaseDate="2018-12-07" />
          <Movie name="Bumblebee" releaseDate="2018-12-15" />
          <Movie
            name="Fantastic Beasts: The Crimes of Grindelwald"
            releaseDate="2018-11-14"
          />
        </>
      )}
    </div>
  );
}

export default App;
