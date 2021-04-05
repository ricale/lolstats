import { convertToSnakeCase } from 'utils';

const factoryUrlGetter = (str: string) => {
    const replacees = [
        ...new Set(
            str.match(/<%= [a-zA-Z0-9]+ %>/g) || []
        )
    ];

    const [matched, _queryNames] = str.match(/<%= q\(([a-zA-Z0-9_,]+)\) %>/) || [];
    const queryNames = _queryNames ? _queryNames.split(',') : [];

    return (args: Record<string, any> | undefined) => {
        const params: Record<string, any> = args || {};

        const replaced = replacees.reduce((acc, replacee) =>
            acc.replace(
                replacee,
                params[convertToSnakeCase(replacee.slice(4, -3))] || ''
            )
        , str);

        if(!matched) {
            return replaced;
        }

        const queryString = queryNames
            .map(q => params[q] ? `${q}=${params[q]}` : '')
            .filter(q => !!q)
            .join('&');

        return replaced.replace(matched, queryString ? `?${queryString}` : '');
    };
};

export default factoryUrlGetter;
