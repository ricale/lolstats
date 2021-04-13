import { calls } from 'api';
import { QUEYE_TYPE_ID } from 'consts';

import { factoryWatchFetchAction } from '../_utils';
import { actionTypes as t } from './actions';

export const watchGetSummoner = factoryWatchFetchAction(
    t.REQUEST_GET_SUMMONER,
    async (payload: any) => {
        const summoner = await calls.getSummoner(payload);
        const entries = await calls.getSummonerEntry({userId: summoner.userId});
        // const statistics = await calls.getSummonerStatistics({
        //     accountId: summoner.accountId,
        //     queue: QUEYE_TYPE_ID.SOLO_QUEUE, // FIXME:
        // });
        

        return {
            summoner,
            entries,
            // statistics,
        }
    }
);
