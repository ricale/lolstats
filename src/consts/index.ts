export const SOLO_QUEUE = 'RANKED_SOLO_5x5';
export const FLEX_QUEUE = 'RANKED_FLEX_SR';
export const QUEUE_TYPE = {
  SOLO_QUEUE,
  FLEX_QUEUE,
};
export const QUEYE_TYPE_ID = {
  SOLO_QUEUE: 420,
  FLEX_QUEUE: 440,
}

export const QUEUE_NAME = {
  [SOLO_QUEUE]: '솔로랭크',
  [FLEX_QUEUE]: '자유랭크',
}

import * as championByKey from './championByKey.json';
export { championByKey };
