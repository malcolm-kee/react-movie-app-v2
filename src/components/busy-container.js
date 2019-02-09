import React from 'react';

export const BusyContainer = ({ isLoading, children }) => (
  <div className="busy-container">
    {isLoading && <span className="spinner" data-testid="loading-indicator" />}
    {children}
  </div>
);
