export const joinString = (delimiter, ...params) => {
  const results = [];
  for (let param of params) {
    if (!param) {
      continue;
    }

    const paramType = typeof param;

    if (paramType == 'string' || paramType == 'number') {
      results.push(param);
      continue;
    }

    if (Array.isArray(param) && param.length > 0) {
      const innerResult = joinString(delimiter, ...param);
      if (innerResult) {
        results.push(innerResult);
      }
    }
  }

  return results.join(delimiter);
};

export const classNames = joinString.bind(null, ' ');
