import { convertAllKeys } from 'utils';

import { Schema, ParamsParser, CallParams } from './types';
import wfetch from './wfetch';

function convertAllKeysFromCamelToSnake(value: any) {
    return convertAllKeys(value, {
        searcher: /([a-z])([A-Z])/g,
        replacer: (_, p1, p2) => `${p1}_${p2.toLowerCase()}`,
    });
}

function getOptions(params: CallParams, paramsParser: ParamsParser) {
    if(!paramsParser) {
        return {};
    }

    if(paramsParser === 'query|page') {
        return {
            query: convertAllKeysFromCamelToSnake({
                page: undefined,
                pageSize: undefined,
                ...params,
            }),
        };
    }

    if(paramsParser === 'query') {
        return {
            query: convertAllKeysFromCamelToSnake(params),
        };
    }

    if(paramsParser === 'body|queryId') {
        const { id, ...rest } = params;
        return {
            query: { id },
            body: convertAllKeysFromCamelToSnake(rest),
        };
    }

    if(paramsParser === 'body') {
        return {
            body: convertAllKeysFromCamelToSnake(params),
        };
    }

    return (paramsParser as Function)(params);
}

function factoryCall(
    schema: Schema,
    paramsParser: ParamsParser = undefined,
    // {
    //     auth = true,
    // }
) {
    return (params: CallParams) => {
        const options = getOptions(params, paramsParser);

        return wfetch(schema, options);
    }
}

export default factoryCall;
