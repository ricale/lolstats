import s from './schema';
import factoryCall from './factoryCall';

export const getSummoner = factoryCall(s.GET_SUMMONER, 'query');
export const getSummonerEntry = factoryCall(s.GET_SUMMONER_ENTRY, 'query');
export const getSummonerStatistics = factoryCall(s.GET_SUMMONER_STATISTICS, 'query');
