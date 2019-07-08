import {factoryUrlTemplate as t} from 'lib';

const API_HOST = 'http://localhost:8030/v1';

export const FETCH_SUMMONER = ['GET', t(`${API_HOST}/summoners/:username`)];
export const FETCH_SUMMONER_ENTRY = ['GET', t(`${API_HOST}/entries/:userId`)]
export const FETCH_SUMMONER_MATCHES = ['GET', t(`${API_HOST}/matches/:accountId`)]
