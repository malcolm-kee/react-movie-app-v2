import React from 'react';
import { createMovie, saveMovie } from './api';
import { Button } from './components/button';

export const MovieForm = ({
  isEdit,
  onSubmitSuccess,
  values,
  setName,
  setReleaseDate,
  resetForm
}) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const req = isEdit ? saveMovie(values) : createMovie(values);
    req.then(() => {
      onSubmitSuccess();
      resetForm();
    });
  };

  return (
    <div className="movie-form">
      <form onSubmit={handleSubmit}>
        <legend>{isEdit ? 'Edit' : 'Create'} Movie</legend>
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
            {isEdit ? 'Save' : 'Create'}
          </button>
          <Button onClick={resetForm}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};
