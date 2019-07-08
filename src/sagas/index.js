import {all} from 'redux-saga/effects';

import * as summoners from './summoners';

const watchAll = (...args) => {
  return all(
    args.reduce((result, sagas) => (
      result.concat(
        Object.keys(sagas).map(k => sagas[k]())
      )
    ), [])
  );
};

export default function* rootSaga () {
  yield watchAll(
    summoners
  );
}
