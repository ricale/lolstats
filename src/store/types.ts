export type BaseAction = {
    type: string
    requestParams?: any
    payload?: any
    meta: {
        timestamp: number
        message?: string
    }
}