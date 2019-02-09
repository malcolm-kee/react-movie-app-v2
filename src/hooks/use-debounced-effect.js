import React from 'react';

export const useDebouncedEffect = (effect, deps, timeout = 500) => {
  React.useEffect(() => {
    let cleanup;
    const timerId = setTimeout(() => {
      cleanup = effect();
    }, timeout);
    return () => {
      clearTimeout(timerId);
      if (typeof cleanup === 'function') cleanup();
    };
  }, deps);
};
