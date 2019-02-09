import React from 'react';

export const useToggle = initialOn => {
  const [on, setOn] = React.useState(initialOn);
  return [on, () => setOn(prevOn => !prevOn)];
};
