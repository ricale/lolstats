import s from './schema';
import factoryCall from './factoryCall';

export const getSummoner = factoryCall(s.GET_SUMMONER, 'query');
