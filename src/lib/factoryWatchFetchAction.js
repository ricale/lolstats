import {put, call, takeEvery} from 'redux-saga/effects';

export default function factoryWatchFetchAction (actionType, apiCall, argsGetter, mockupData) {
  argsGetter || (argsGetter = (p => []));
  return function* watchFetchAction () {
    yield takeEvery(actionType, function* fetchAction (action) {
      try {
        const result = mockupData || (yield call(apiCall, ...argsGetter(action.payload)));
        yield put({type: `${actionType}/SUCCESS`, payload: result});
      } catch(error) {
        console.error(error);
        yield put({type: `${actionType}/FAILURE`, payload: error});
      }
    });
  };
}
