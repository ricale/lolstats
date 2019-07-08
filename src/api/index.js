import {wfetch, factoryUrlTemplate} from 'lib';

import * as schema from './schema';

export const fetchSummoner = (username) =>
  wfetch(...schema.FETCH_SUMMONER, {query: {username}});

export const fetchSummonerEntry = (userId) =>
  wfetch(...schema.FETCH_SUMMONER_ENTRY, {query: {userId}})

export const fetchSummonerMatches = (accountId, queue) =>
  wfetch(...schema.FETCH_SUMMONER_MATCHES, {query: {accountId, queue}})
