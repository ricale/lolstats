type Hash = Record<string, unknown>
type ConvertAllKeysOptions = {
    searcher: RegExp | string
    replacer: (substring: string, ...args: any[]) => string
}

function isHash(src: unknown): src is Hash {
    return src && typeof src === typeof {};
}

function convertAllHashKeys(
    hash: Hash,
    options: ConvertAllKeysOptions
) {
    return Object.keys(hash).reduce((result: Hash, k: string) => {
        const newKey = k.replace(options.searcher, options.replacer);
        result[newKey] = convertAllKeys(hash[k], options);
        return result;
    }, {});
}

export default function convertAllKeys (
    value: unknown,
    options: ConvertAllKeysOptions = {
        searcher: /_([a-z])/g,
        replacer: (_, ...args) => args[0].toUpperCase(),
    }
): (typeof value) {
    if(Array.isArray(value)) {
        return value.map(v => convertAllKeys(v, options));

    } else if(isHash(value)) {
        return convertAllHashKeys(value, options);

    } else {
        return value;
    }
}
