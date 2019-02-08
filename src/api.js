import axios from 'axios';

export const loadMovies = () =>
  axios('https://react-intro-movies.herokuapp.com/movies').then(
    res => res.data
  );
