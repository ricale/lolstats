import convertAllKeys from './convertAllKeys';

export default function convertAllKeysToSnake(value: any) {
    return convertAllKeys(value, {
        searcher: /([a-z])([A-Z])/g,
        replacer: (_, p1, p2) => `${p1}_${p2.toLowerCase()}`,
    });
}
