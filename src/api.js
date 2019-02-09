import axios from 'axios';

const MOVIE_ENDPOINT = 'https://react-intro-movies.herokuapp.com/movies';

export const loadMovies = () => axios(MOVIE_ENDPOINT).then(res => res.data);

export const createMovie = movie =>
  axios.post(MOVIE_ENDPOINT, movie).then(res => res.data);

export const saveMovie = movie =>
  axios.put(`${MOVIE_ENDPOINT}/${movie.id}`, movie).then(res => res.data);
