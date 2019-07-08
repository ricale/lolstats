import * as api from 'api';
import {factoryWatchFetchAction} from 'lib';

export const watchFetchSummoner = factoryWatchFetchAction(
  'SUMMONERS/FETCH_ONE',
  api.fetchSummoner,
  p => [p.username],
);

export const watchFetchSummonerEntry = factoryWatchFetchAction(
  'SUMMONERS/FETCH_ENTRY',
  api.fetchSummonerEntry,
  p => [p.userId],
);

export const watchFetchSummonerMatches = factoryWatchFetchAction(
  'SUMMONERS/FETCH_MATCHES',
  api.fetchSummonerMatches,
  p => [p.accountId, p.queue],
);
