import { put, takeEvery } from 'redux-saga/effects';

import { BaseAction } from '../types';
import { resultActionCreator } from './actionsCreator';

export default function factoryWatchFetchAction(
    actionType: string,
    dataGetter: (payload: Record<string, any> | string) => Record<string, any>,
) {
    function* worker(action: BaseAction) {
        try {
            const successActionType = actionType.replace('REQUEST_', 'SUCCESS_');
            // @ts-ignore
            const data = yield dataGetter(action.payload);
            yield put(
                resultActionCreator(successActionType)({
                    requestParams: action.payload,
                    payload: data,
                    message: successActionType,
                })
            );

        } catch(err) {
            const failureActionType = actionType.replace('REQUEST_', 'FAILURE_');
            yield put(
                resultActionCreator(failureActionType)({
                    requestParams: action.payload,
                    payload: err,
                    message: failureActionType,
                })
            );
        }
    }

    return function* watchFetch() {
        yield takeEvery(actionType, worker);
    }
}
