import { convertAllKeysToSnakeCase } from 'utils';

import { Schema, ParamsParser, CallParams } from './types';
import wfetch from './wfetch';

function getOptions(params: CallParams, paramsParser: ParamsParser) {
    if(!paramsParser) {
        return {};
    }

    if(paramsParser === 'query|page') {
        return {
            query: convertAllKeysToSnakeCase({
                page: undefined,
                pageSize: undefined,
                ...params,
            }),
        };
    }

    if(paramsParser === 'query') {
        return {
            query: convertAllKeysToSnakeCase(params),
        };
    }

    if(paramsParser === 'body|queryId') {
        const { id, ...rest } = params;
        return {
            query: { id },
            body: convertAllKeysToSnakeCase(rest),
        };
    }

    if(paramsParser === 'body') {
        return {
            body: convertAllKeysToSnakeCase(params),
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
