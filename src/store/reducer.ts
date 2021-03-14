import { combineReducers } from 'redux';
import { History } from 'history';

import getRouterReducer from './router/reducer';

import summoner from './summoner/reducer';

export default function getRootReducer (history: History<{}>) {
    return combineReducers({
        router: getRouterReducer(history),
        summoner,
    })
}
