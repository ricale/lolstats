import { calls } from 'api';

import { factoryWatchFetchAction } from '../_utils';
import { actionTypes as t } from './actions';

export const watchGetSummoner = factoryWatchFetchAction(
    t.REQUEST_GET_SUMMONER,
    calls.getSummoner
);
