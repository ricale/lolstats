const convertToCamelCase = (str: string): string =>
    str.replace(/^([A-Za-z]+)/, (_, p1) => p1.toLowerCase())
        .replace(/(_[A-Za-z]+)g/, (_, p1) =>
            `${p1.slice(1,2).toUpperCase()}${p1.slice(2).toLowerCase}`
        );

export default convertToCamelCase;
