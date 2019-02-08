import React from 'react';
import { createMovie } from './api';

const useMovieFormData = () => {
  const [name, setName] = React.useState('');
  const [releaseDate, setReleaseDate] = React.useState('');
  return {
    setName,
    setReleaseDate,
    values: {
      name,
      releaseDate
    }
  };
};

export const MovieForm = ({ onSubmitSuccess }) => {
  const { values, setName, setReleaseDate } = useMovieFormData();

  const handleSubmit = ev => {
    ev.preventDefault();
    createMovie(values).then(() => {
      onSubmitSuccess();
      setName('');
      setReleaseDate('');
    });
  };

  return (
    <div className="movie-form">
      <form onSubmit={handleSubmit}>
        <legend>Create Movie</legend>
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            className="input"
            value={values.name}
            id="name"
            name="name"
            onChange={ev => setName(ev.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="releaseDate" className="label">
            Release Date
          </label>
          <input
            className="input"
            value={values.releaseDate}
            id="releaseDate"
            name="releaseDate"
            type="date"
            onChange={ev => setReleaseDate(ev.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
