import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BusyContainer } from './busy-container';

afterEach(cleanup);

describe('<BusyContainer />', () => {
  test('it show loading indicator when loading', () => {
    const { getByTestId } = render(
      <BusyContainer isLoading>Some Content</BusyContainer>
    );
    expect(getByTestId('loading-indicator')).not.toBeNull();
  });

  test('it will not show loading indicator when not loading', () => {
    const { queryByTestId } = render(
      <BusyContainer>Some Content</BusyContainer>
    );
    expect(queryByTestId('loading-indicator')).toBeNull();
  });
});
