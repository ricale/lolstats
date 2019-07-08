const getQueryString = (queries = {}) => {
  const keys = Object.keys(queries).filter(k => queries[k] !== undefined);
  if(keys.length === 0) {
    return '';
  }

  const kvStrings = keys.map(k => `${k}=${queries[k]}`);
  return '?' + kvStrings.join('&');
};

export default function factoryUrlTemplate (string) {
  const ids = string.match(/:[a-zA-Z_][a-zA-Z_0-9]*/g);

  return function (replaces) {
    const hash = {...replaces};

    const replaced = ids.reduce((acc, id) => {
      const value = hash[id.slice(1)];
      delete hash[id.slice(1)];
      return string.replace(id, value)
    }, string);

    const queryString = getQueryString(hash);

    return `${replaced}${queryString}`;
  }
}
