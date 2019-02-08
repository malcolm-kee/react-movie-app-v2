import React from 'react';
import { Movie } from './components/movie';
import { TitleBar } from './components/title-bar';
import { Button } from './components/button';
import { useToggle } from './hooks/use-toggle';
import { loadMovies } from './api';
import { BusyContainer } from './components/busy-container';

function useMovieData() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    loadMovies().then(movieData => {
      setMovies(movieData);
      setIsLoading(false);
    });
  }, []);

  return {
    movies,
    isLoading
  };
}

function App() {
  const [moviesShown, toggleShowMovies] = useToggle(false);
  const { movies, isLoading } = useMovieData();

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
        <BusyContainer isLoading={isLoading}>
          {movies.map(movie => (
            <Movie
              name={movie.name}
              releaseDate={movie.releaseDate}
              key={movie.id}
            />
          ))}
        </BusyContainer>
      )}
    </div>
  );
}

export default App;
