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

const useMovieForm = () => {
  const [name, setName] = React.useState('');
  const [releaseDate, setReleaseDate] = React.useState('');
  const [id, setId] = React.useState(undefined);
  return {
    setName,
    setReleaseDate,
    setId,
    values: {
      id,
      name,
      releaseDate
    }
  };
};

function App() {
  const [moviesShown, toggleShowMovies] = useToggle(false);
  const { movies, isLoading, loadMoviesData } = useMovieData();
  const { setName, setReleaseDate, setId, values } = useMovieForm();
  const [isEdit, setIsEdit] = React.useState(false);

  const selectMovie = movie => {
    setIsEdit(true);
    setName(movie.name);
    setReleaseDate(movie.releaseDate);
    setId(movie.id);
  };

  const resetForm = () => {
    setIsEdit(false);
    setName('');
    setReleaseDate('');
    setId(undefined);
  };

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
                  onClick={() => selectMovie(movie)}
                  key={movie.id}
                />
              ))}
            </BusyContainer>
          )}
        </div>
        <div>
          <MovieForm
            isEdit={isEdit}
            values={values}
            setName={setName}
            setReleaseDate={setReleaseDate}
            onSubmitSuccess={loadMoviesData}
            resetForm={resetForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
