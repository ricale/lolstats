function transformAllKeysFromSnakeCaseToCamelCase (hash) {
  return Object.keys(hash).reduce((result, k) => {
    const newKey = k.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
    result[newKey] = transformSnakeCaseToCamelCase(hash[k]);
    return result;
  }, {});
}

export default function transformSnakeCaseToCamelCase (value) {
  if(Array.isArray(value)) {
    return value.map(v => transformSnakeCaseToCamelCase(v));

  } else if(value && typeof value === typeof {}) {
    return transformAllKeysFromSnakeCaseToCamelCase(value);

  } else {
    return value;
  }
}
