import React from 'react';

export const Button = ({ type = 'button', ...props }) => (
  <button className="button" type={type} {...props} />
);
