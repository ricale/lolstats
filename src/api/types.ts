export type Schema = {
    method: string
    urlGetter: (arg: Record<string, any>) => string
}

export type CallParams = Record<string, any>

export type WfetchOption = {
    body?: Record<string, any>
    query?: Record<string, any>
    contentType?: string
    token?: string
}

export type ParamsParser =
    'query' |
    'query|page' |
    'body' |
    'body|queryId' |
    Function |
    undefined

export type RequestResult = {
    response: Response
    responseBody?: any
}
