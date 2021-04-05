import { SummonerState, SummonerAction } from './types';
import { actionTypes as t } from './actions';

const initialState: SummonerState = {
    detail: null,
    entries: [],
    statistics: null,
};

export default function summonerReducer(
    state = initialState,
    action: SummonerAction,
) {
    switch(action.type) {
        case t.SUCCESS_GET_SUMMONER:
            return {
                ...state,
                detail: {
                    ...action.payload.summoner,
                },
                entries: [
                    ...action.payload.entries,
                ],
                statistics: [
                    ...action.payload.statistics,
                ],
            };
    }
    return state;
}
