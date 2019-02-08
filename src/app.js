import React from 'react';
import { loadMovies } from './api';
import { BusyContainer } from './components/busy-container';
import { Button } from './components/button';
import { Movie } from './components/movie';
import { TitleBar } from './components/title-bar';
import { useToggle } from './hooks/use-toggle';
import { MovieForm } from './movie-form';

function useMovieData() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const loadMoviesData = () => {
    setIsLoading(true);
    loadMovies().then(movieData => {
      setMovies(movieData);
      setIsLoading(false);
    });
  };
  React.useEffect(loadMoviesData, []);

  return {
    movies,
    isLoading,
    loadMoviesData
  };
}

function App() {
  const [moviesShown, toggleShowMovies] = useToggle(false);
  const { movies, isLoading, loadMoviesData } = useMovieData();

  return (
    <div>
      <TitleBar>
        <h1>React Movie App</h1>
      </TitleBar>
      <div className="container">
        <div>
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
        <div>
          <MovieForm onSubmitSuccess={loadMoviesData} />
        </div>
      </div>
    </div>
  );
}

export default App;
