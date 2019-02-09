import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from 'react-testing-library';
import * as api from './api';
import App from './app';

const mockMovieData = [
  {
    id: 1,
    name: 'Aquaman',
    releaseDate: '2018-12-07',
    description:
      'Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.'
  },
  {
    id: 2,
    name: 'Bumblebee',
    releaseDate: '2018-12-15',
    description:
      'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken. When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.'
  }
];

afterEach(cleanup);

describe('<App />', () => {
  it('shows loading indicator when show movies is clicked', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('Show Movies'));
    expect(getByTestId('loading-indicator')).not.toBeNull();
  });

  it('display all the movie data from api', async () => {
    const spy = jest
      .spyOn(api, 'loadMovies')
      .mockImplementation(() => Promise.resolve(mockMovieData));

    const { getByText, getAllByTestId, getByTestId } = render(<App />);
    fireEvent.click(getByText('Show Movies'));

    await waitForElement(() => getByTestId('movie-container'));

    expect(getAllByTestId('movie-container').length).toBe(mockMovieData.length);

    spy.mockRestore();
  });

  it('will make the form become edit and populate with movie data when one of the movie is clicked', async () => {
    const spy = jest
      .spyOn(api, 'loadMovies')
      .mockImplementation(() => Promise.resolve(mockMovieData));

    const { getByText, getByTestId, getByLabelText } = render(<App />);
    fireEvent.click(getByText('Show Movies'));

    await waitForElement(() => getByTestId('movie-container'));

    expect(getByText('Create Movie')).not.toBeNull();

    fireEvent.click(getByTestId('movie-container'));

    expect(getByText('Edit Movie')).not.toBeNull();
    expect(getByLabelText('Name').value).toBe(mockMovieData[0].name);
    expect(getByLabelText('Release Date').value).toBe(
      mockMovieData[0].releaseDate
    );

    spy.mockRestore();
  });
});
