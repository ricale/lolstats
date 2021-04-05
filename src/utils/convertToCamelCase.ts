const convertToCamelCase = (str: string): string =>
    str.replace(/([A-Z]+)/g, (_, p1) => p1.toLowerCase())
        .replace(/_[a-z]/g, (matched) => `${matched.slice(1).toUpperCase()}`);

export default convertToCamelCase;
