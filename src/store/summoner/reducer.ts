import { SummonerState, SummonerAction } from './types';
import { actionTypes as t } from './actions';

const initialState: SummonerState = {
    detail: null,
};

export default function summonerReducer(
    state = initialState,
    action: SummonerAction,
) {
    switch(action.type) {
        case t.SUCCESS_GET_SUMMONER:
            console.log('SUCCESS_GET_SUMMONER', action);
            return {
                ...state,
            };
    }
    return state;
}
