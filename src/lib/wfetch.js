import transformSnakeCaseToCamelCase from './transformSnakeCaseToCamelCase';

export default async (method, urlGetter, {query, data} = {}) => {
  const url = urlGetter(query);
  const options = {
    method,
  };
  
  const response = await fetch(url, options);
  const json = await response.json();
  const result = transformSnakeCaseToCamelCase(json);
  result.status = response.status;

  return result;
};
