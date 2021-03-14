import { getActionTypesForApiCall, actionsCreator } from '../_utils';

export const actionTypes = getActionTypesForApiCall([
    'GET_SUMMONER',
    'GET_SUMMONER_ENTRY',
    'GET_SUMMONER_MATCHES',
    'GET_SUMMONER_STATISTICS',
])

export default actionsCreator(actionTypes);
