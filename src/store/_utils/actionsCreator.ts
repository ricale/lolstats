import { convertToCamelCase } from 'utils';

import { BaseAction } from '../types';

type ActionGetter = (data?: any) => BaseAction
type ActionData = {
    requestParams?: any
    payload?: any
    message?: string
}

const requestActionCreator = (actionType: string) =>
    (data?: ActionData): BaseAction => ({
        type: actionType,
        payload: data,
        meta: {
            timestamp: new Date().getTime(),
        },
    });

export const resultActionCreator = (actionType: string) =>
    (data?: ActionData): BaseAction => ({
        type: actionType,
        requestParams: data.requestParams,
        payload: data.payload,
        meta: {
            timestamp: new Date().getTime(),
            message: data.message
        },
    });

const actionsCreator = (actionTypes: Record<string, string>) =>
    Object.keys(actionTypes)
        .filter(key => !key.match(/^(SUCCESS|FAILURE)/))
        .reduce((acc: Record<string, ActionGetter>, key: string) => {
            acc[convertToCamelCase(key)] = requestActionCreator(key);
            return acc;
        }, {});

export default actionsCreator;
