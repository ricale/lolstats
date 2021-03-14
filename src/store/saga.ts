import { all } from 'redux-saga/effects';

import * as summonerWatchers from './summoner/saga';

function watchAll(...args: Array<any>) {
    return all(
        args.reduce((result: Array<any>, watchers) =>
            result.concat(
                Object.keys(watchers).map(k => watchers[k]()),
            )
        , [])
    );
}

export default function* rootSaga() {
    yield watchAll(
        summonerWatchers,
    );
}
