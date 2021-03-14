import { RouterState } from 'connected-react-router';

import { SummonerState } from './summoner/types';

export interface RootState {
    router: RouterState<{}>
    summoner: SummonerState
}

export type BaseAction = {
    type: string
    requestParams?: any
    payload?: any
    meta: {
        timestamp: number
        message?: string
    }
}

export * from './summoner/types';
