const getAxios = () => import('axios');

const MOVIE_ENDPOINT = 'https://react-intro-movies.herokuapp.com/movies';

export const loadMovies = searchKey =>
  getAxios()
    .then(axios => axios.default(MOVIE_ENDPOINT, { params: { q: searchKey } }))
    .then(res => res.data);

export const createMovie = movie =>
  getAxios()
    .then(axios => axios.post(MOVIE_ENDPOINT, movie))
    .then(res => res.data);

export const saveMovie = movie =>
  getAxios()
    .then(axios => axios.put(`${MOVIE_ENDPOINT}/${movie.id}`, movie))
    .then(res => res.data);
