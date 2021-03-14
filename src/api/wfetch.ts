import { convertAllKeys } from 'utils';

import { Schema, WfetchOption, RequestResult } from './types';

function getRequestBody(body: Record<string, any>) {
    if(!body) {
        return null;
    }
    return JSON.stringify(body);
}

function getHeaders(token: string) {
    const headers: Record<string, any> = {};
    // if(token) {
    //     headers['Authorization'] = 
    // }
    return headers;
}

async function checkStatusAndGetResponseBody(response: Response) {
    if(response.status === 204) {
        return { success: true };
    }

    if(response.status < 300) {
        return response.json();
    }

    throw response;
}

async function handleAndThrowError(err: unknown) {
    if(err instanceof Response) {
        const isJson = err.headers.get('content-type').includes('json');
        const errorBody = isJson ? (await err.json()) : (await err.text());

        const error = {
            networkStatus: err.status,
            body: isJson ? convertAllKeys(errorBody) : errorBody.slice(0, 50),
        };

        throw error;
    }
    throw err;
}

function logResult(
    url: string,
    fetchOptions: RequestInit,
    result: RequestResult,
) {
    const shortUrl = url.slice(/*Config.API_URL.length*/0);
    const {
        method,
        body,
        headers,
    } = fetchOptions;
    const {
        response,
        responseBody,
    } = result;

    console.log('[', response.status, ']', method, shortUrl);
  
    // Logger.groupCollapsedAtOnce(
    //     ['[', response.status, ']', method, shortUrl],
    //     [
    //         headers && ['headers', headers],
    //         !!body && [
    //             'body',
    //             typeof body === typeof 'string' ? JSON.parse(body.toString()) : body,
    //         ],
    //         !!responseBody && [
    //             'response', responseBody,
    //         ],
    //     ],
    // );
}

export default async function wfetch(
    { urlGetter, method }: Schema,
    o?: WfetchOption,
) {
    const url = urlGetter(o?.query || null);
    const fetchOptions: RequestInit = {
        method,
        mode: 'cors',
        body: getRequestBody(o?.body),
        headers: getHeaders(o?.token),
    };

    try {
        const response = await fetch(url, fetchOptions);
        const responseBody = await checkStatusAndGetResponseBody(response);
        const converted = convertAllKeys(responseBody);

        logResult(url, fetchOptions, {
            response,
            responseBody,
        });

        return converted;

    } catch(err) {
        logResult(url, fetchOptions, {
            response: err,
        });

        await handleAndThrowError(err);
    }
}